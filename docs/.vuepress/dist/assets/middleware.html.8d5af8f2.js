import{_ as o,r as p,o as c,c as r,b as s,d as n,e as t,a}from"./app.1ad2624e.js";const l={},i=a(`<h1 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> Middleware</h1><details class="custom-container details"><summary>示例</summary><p>Version History</p></details><p>Middleware allows you to run code before a request is completed, then based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.</p><p>Middleware runsbeforecached content, so you can personalize static files and pages. Common examples of Middleware would be authentication, A/B testing, localized pages, bot protection, and more. Regarding localized pages, you can start with<a href="/docs/guide/advanced-features/i18n-routing">i18n routing</a>and implement Middleware for more advanced use cases.</p><blockquote><p>**Note:**If you were using Middleware prior to<code>12.2</code>, please see the<a href="/docs/messages/middleware-upgrade-guide">upgrade guide</a>.</p></blockquote><h2 id="using-middleware" tabindex="-1"><a class="header-anchor" href="#using-middleware" aria-hidden="true">#</a> Using Middleware</h2><p>To begin using Middleware, follow the steps below:</p><ul><li>Install the latest version of Next.js:</li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> next@latest

</code></pre></div><ul><li>Create a<code>middleware.ts</code>(or<code>.js</code>) file at the root or in the<code>src</code>directory (same level as your<code>pages</code>)- Export a middleware function from the<code>middleware.ts</code>file:</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// middleware.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/server&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/server&#39;</span>

<span class="token comment">// This function can be marked \`async\` if using \`await\` inside</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">&#39;/about-2&#39;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// See &quot;Matching Paths&quot; below to learn more</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  matcher<span class="token operator">:</span> <span class="token string">&#39;/about/:path*&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="matching-paths" tabindex="-1"><a class="header-anchor" href="#matching-paths" aria-hidden="true">#</a> Matching Paths</h2><p>Middleware will be invoked for<strong>every route in your project</strong>. The following is the execution order:</p><ul><li><code>headers</code>from<code>next.config.js</code>- <code>redirects</code>from<code>next.config.js</code>- Middleware (<code>rewrites</code>,<code>redirects</code>, etc.)- <code>beforeFiles</code>(<code>rewrites</code>) from<code>next.config.js</code>- Filesystem routes (<code>public/</code>,<code>_next/static/</code>, Pages, etc.)- <code>afterFiles</code>(<code>rewrites</code>) from<code>next.config.js</code>- Dynamic Routes (<code>/blog/[slug]</code>)- <code>fallback</code>(<code>rewrites</code>) from<code>next.config.js</code></li></ul><p>There are two ways to define which paths Middleware will run on:</p><ul><li>Custom matcher config- Conditional statements</li></ul><h3 id="matcher" tabindex="-1"><a class="header-anchor" href="#matcher" aria-hidden="true">#</a> Matcher</h3><p><code>matcher</code>allows you to filter Middleware to run on specific paths.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token string">&#39;/about/:path*&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>You can match a single path or multiple paths with an array syntax:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/about/:path*&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/dashboard/:path*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>The<code>matcher</code>config allows full regex so matching like negative lookaheads or character matching is supported. An example of a negative lookahead to match all except specific paths can be seen here:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">matcher</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */</span>
    <span class="token string">&#39;/((?!api|_next/static|favicon.ico).*)&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><blockquote><p>**Note:**The<code>matcher</code>values need to be constants so they can be statically analyzed at build-time. Dynamic values such as variables will be ignored.</p></blockquote><p>Configured matchers:</p><ul><li>MUST start with<code>/</code>- Can include named parameters:<code>/about/:path</code>matches<code>/about/a</code>and<code>/about/b</code>but not<code>/about/a/c</code>- Can have modifiers on named parameters (starting with<code>:</code>):<code>/about/:path*</code>matches<code>/about/a/b/c</code>because<code>*</code>iszero or more.<code>?</code>iszero or oneand<code>+</code>one or more- Can use regular expression enclosed in parenthesis:<code>/about/(.*)</code>is the same as<code>/about/:path*</code></li></ul>`,26),u={href:"https://github.com/pillarjs/path-to-regexp#path-to-regexp-1",target:"_blank",rel:"noopener noreferrer"},d=a(`<blockquote><p>**Note:**For backward compatibility, Next.js always considers<code>/public</code>as<code>/public/index</code>. Therefore, a matcher of<code>/public/:path</code>will match.</p></blockquote><h3 id="conditional-statements" tabindex="-1"><a class="header-anchor" href="#conditional-statements" aria-hidden="true">#</a> Conditional Statements</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// middleware.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/server&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/server&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;/about&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">rewrite</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">&#39;/about-2&#39;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">rewrite</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span><span class="token string">&#39;/dashboard/user&#39;</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="nextresponse" tabindex="-1"><a class="header-anchor" href="#nextresponse" aria-hidden="true">#</a> NextResponse</h2><p>The<a href="#nextresponse"><code>NextResponse</code></a>API allows you to:</p><ul><li><code>redirect</code>the incoming request to a different URL- <code>rewrite</code>the response by displaying a given URL- Set request headers for API Routes,<code>getServerSideProps</code>, and<code>rewrite</code>destinations- Set response cookies- Set response headers</li></ul><p>To produce a response from Middleware, you should<code>rewrite</code>to a route (<a href="/docs/guide/basic-features/pages">Page</a>or<a href="/docs/guide/api-routes/edge-api-routes">Edge API Route</a>) that produces a response.</p><h2 id="using-cookies" tabindex="-1"><a class="header-anchor" href="#using-cookies" aria-hidden="true">#</a> Using Cookies</h2><p>Cookies are regular headers. On a<code>Request</code>, they are stored in the<code>Cookie</code>header. On a<code>Response</code>they are in the<code>Set-Cookie</code>header. Next.js provides a convenient way to access and manipulate these cookies through the<code>cookies</code>extension on<code>NextRequest</code>and<code>NextResponse</code>.</p><ul><li>For incoming requests,<code>cookies</code>comes with the following methods:<code>get</code>,<code>getAll</code>,<code>set</code>, and<code>delete</code>cookies. You can check for the existence of a cookie with<code>has</code>or remove all cookies with<code>clear</code>.- For outgoing responses,<code>cookies</code>have the following methods<code>get</code>,<code>getAll</code>,<code>set</code>, and<code>delete</code>.</li></ul><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// middleware.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/server&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/server&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Assume a &quot;Cookie:nextjs=fast&quot; header to be present on the incoming request</span>
  <span class="token comment">// Getting cookies from the request using the \`RequestCookies\` API</span>
  <span class="token keyword">const</span> cookie <span class="token operator">=</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;nextjs&#39;</span><span class="token punctuation">)</span><span class="token operator">?.</span>value
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span> <span class="token comment">// =&gt; &#39;fast&#39;</span>
  <span class="token keyword">const</span> allCookies <span class="token operator">=</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>allCookies<span class="token punctuation">)</span> <span class="token comment">// =&gt; [{ name: &#39;vercel&#39;, value: &#39;fast&#39; }]</span>

  request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">&#39;nextjs&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; true</span>
  request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;nextjs&#39;</span><span class="token punctuation">)</span>
  request<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">&#39;nextjs&#39;</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; false</span>

  <span class="token comment">// Setting cookies on the response using the \`ResponseCookies\` API</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;vercel&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fast&#39;</span><span class="token punctuation">)</span>
  response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;vercel&#39;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">&#39;fast&#39;</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> cookie <span class="token operator">=</span> response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;vercel&#39;</span><span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span> <span class="token comment">// =&gt; { name: &#39;vercel&#39;, value: &#39;fast&#39;, Path: &#39;/test&#39; }</span>
  <span class="token comment">// The outgoing response will have a \`Set-Cookie:vercel=fast;path=/test\` header.</span>

  <span class="token keyword">return</span> response
<span class="token punctuation">}</span>

</code></pre></div><h2 id="setting-headers" tabindex="-1"><a class="header-anchor" href="#setting-headers" aria-hidden="true">#</a> Setting Headers</h2><p>You can set request and response headers using the<code>NextResponse</code>API (settingrequestheaders is available since Next.js v13.0.0).</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// middleware.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/server&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/server&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Clone the request headers and set a new header \`x-hello-from-middleware1\`</span>
  <span class="token keyword">const</span> requestHeaders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">)</span>
  requestHeaders<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;x-hello-from-middleware1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// You can also set request headers in NextResponse.rewrite</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    request<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// New request headers</span>
      headers<span class="token operator">:</span> requestHeaders<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// Set a new response header \`x-hello-from-middleware2\`</span>
  response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;x-hello-from-middleware2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> response
<span class="token punctuation">}</span>

</code></pre></div>`,14),k={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431",target:"_blank",rel:"noopener noreferrer"},h=a(`<h2 id="producing-a-response" tabindex="-1"><a class="header-anchor" href="#producing-a-response" aria-hidden="true">#</a> Producing a Response</h2><p>You can respond to middleware directly by returning a<code>NextResponse</code>(responding from middleware is available since Next.js v13.0.0).</p><p>To enable middleware responses, update<code>next.config.js</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">allowMiddlewareResponseBody</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Once enabled, you can provide a response from middleware using the<code>Response</code>or<code>NextResponse</code>API:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// middleware.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NextRequest<span class="token punctuation">,</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/server&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isAuthenticated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@lib/auth&#39;</span>

<span class="token comment">// Limit the middleware to paths starting with \`/api/\`</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  matcher<span class="token operator">:</span> <span class="token string">&#39;/api/:function*&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Call our authentication function to check the request</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Respond with JSON indicating an error message</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">NextResponse</span><span class="token punctuation">(</span>
      <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> success<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">&#39;authentication failed&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">401</span><span class="token punctuation">,</span> headers<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2>`,7);function m(g,w){const e=p("ExternalLinkIcon");return c(),r("div",null,[i,s("p",null,[n("Read more details on"),s("a",u,[n("path-to-regexp"),t(e)]),n("documentation.")]),d,s("blockquote",null,[s("p",null,[n("**Note:**Avoid setting large headers as it might cause"),s("a",k,[n("431 Request Header Fields Too Large"),t(e)]),n("error depending on your backend web server configuration.")])]),h])}const y=o(l,[["render",m],["__file","middleware.html.vue"]]);export{y as default};
