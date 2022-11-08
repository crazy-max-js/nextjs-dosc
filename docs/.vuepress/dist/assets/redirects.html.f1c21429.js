import{_ as e,r as t,o as p,c as o,b as n,d as a,e as c,a as r}from"./app.1ad2624e.js";const l={},i=n("h1",{id:"redirects",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#redirects","aria-hidden":"true"},"#"),a(" Redirects")],-1),u={class:"custom-container details"},d=n("summary",null,"示例",-1),k={href:"https://github.com/vercel/next.js/tree/canary/examples/redirects",target:"_blank",rel:"noopener noreferrer"},h=r(`<details class="custom-container details"><summary>示例</summary><p>Version History</p></details><p>Redirects allow you to redirect an incoming request path to a different destination path.</p><p>To use Redirects you can use the<code>redirects</code>key in<code>next.config.js</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p><code>redirects</code>is an async function that expects an array to be returned holding objects with<code>source</code>,<code>destination</code>, and<code>permanent</code>properties:</p><ul><li><code>source</code>is the incoming request path pattern.- <code>destination</code>is the path you want to route to.- <code>permanent\`\`true</code>or<code>false</code>- if<code>true</code>will use the 308 status code which instructs clients/search engines to cache the redirect forever, if<code>false</code>will use the 307 status code which is temporary and is not cached.</li></ul><blockquote><p>**Why does Next.js use 307 and 308?**Traditionally a 302 was used for a temporary redirect, and a 301 for a permanent redirect, but many browsers changed the request method of the redirect to<code>GET</code>, regardless of the original method. For example, if the browser made a request to<code>POST /v1/users</code>which returned status code<code>302</code>with location<code>/v2/users</code>, the subsequent request might be<code>GET /v2/users</code>instead of the expected<code>POST /v2/users</code>. Next.js uses the 307 temporary redirect, and 308 permanent redirect status codes to explicitly preserve the request method used.</p></blockquote><ul><li><code>basePath</code>:<code>false</code>or<code>undefined</code>- if false the<code>basePath</code>won&#39;t be included when matching, can be used for external redirects only.- <code>locale</code>:<code>false</code>or<code>undefined</code>- whether the locale should not be included when matching.- <code>has</code>is an array of<a href="#header-cookie-and-query-matching">has objects</a>with the<code>type</code>,<code>key</code>and<code>value</code>properties.</li></ul><p>Redirects are checked before the filesystem which includes pages and<code>/public</code>files.</p><p>Redirects are not applied to client-side routing (<code>Link</code>,<code>router.push</code>), unless<a href="/docs/guide/advanced-features/middleware">Middleware</a>is present and matches the path.</p><p>When a redirect is applied, any query values provided in the request will be passed through to the redirect destination. For example, see the following redirect configuration:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/old-blog/:path*&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/blog/:path*&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

</code></pre></div><p>When<code>/old-blog/post-1?hello=world</code>is requested, the client will be redirected to<code>/blog/post-1?hello=world</code>.</p><h2 id="path-matching" tabindex="-1"><a class="header-anchor" href="#path-matching" aria-hidden="true">#</a> Path Matching</h2><p>Path matches are allowed, for example<code>/old-blog/:slug</code>will match<code>/old-blog/hello-world</code>(no nested paths):</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/old-blog/:slug&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/news/:slug&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Matched parameters can be used in the destination</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="wildcard-path-matching" tabindex="-1"><a class="header-anchor" href="#wildcard-path-matching" aria-hidden="true">#</a> Wildcard Path Matching</h3><p>To match a wildcard path you can use<code>*</code>after a parameter, for example<code>/blog/:slug*</code>will match<code>/blog/a/b/c/d/hello-world</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/blog/:slug*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/news/:slug*&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Matched parameters can be used in the destination</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="regex-path-matching" tabindex="-1"><a class="header-anchor" href="#regex-path-matching" aria-hidden="true">#</a> Regex Path Matching</h3><p>To match a regex path you can wrap the regex in parentheses after a parameter, for example<code>/post/:slug(\\\\d{1,})</code>will match<code>/post/123</code>but not<code>/post/abc</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/post/:slug(\\\\d{1,})&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/news/:slug&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Matched parameters can be used in the destination</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>The following characters<code>(</code>,<code>)</code>,<code>{</code>,<code>}</code>,<code>:</code>,<code>*</code>,<code>+</code>,<code>?</code>are used for regex path matching, so when used in the<code>source</code>as non-special values they must be escaped by adding<code>\\\\</code>before them:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// this will match \`/english(default)/something\` being requested</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/english\\\\(default\\\\)/:slug&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/en-us/:slug&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="header-cookie-and-query-matching" tabindex="-1"><a class="header-anchor" href="#header-cookie-and-query-matching" aria-hidden="true">#</a> Header, Cookie, and Query Matching</h2><p>To only match a redirect when header, cookie, or query values also match the<code>has</code>field can be used. Both the<code>source</code>and all<code>has</code>items must match for the redirect to be applied.</p><p><code>has</code>items have the following fields:</p><ul><li><code>type</code>:<code>String</code>- must be either<code>header</code>,<code>cookie</code>,<code>host</code>, or<code>query</code>.- <code>key</code>:<code>String</code>- the key from the selected type to match against.- <code>value</code>:<code>String</code>or<code>undefined</code>- the value to check for, if undefined any value will match. A regex like string can be used to capture a specific part of the value, e.g. if the value<code>first-(?&lt;paramName&gt;.*)</code>is used for<code>first-second</code>then<code>second</code>will be usable in the destination with<code>:paramName</code>.</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token comment">// if the header \`x-redirect-me\` is present,</span>
      <span class="token comment">// this redirect will be applied</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:path((?!another-page$).*)&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;header&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-redirect-me&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/another-page&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// if the source, query, and cookie are matched,</span>
      <span class="token comment">// this redirect will be applied</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/specific/:path*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;query&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// the page value will not be available in the</span>
            <span class="token comment">// destination since value is provided and doesn&#39;t</span>
            <span class="token comment">// use a named capture group e.g. (?&lt;page&gt;home)</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;cookie&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;authorized&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/another/:path*&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// if the header \`x-authorized\` is present and</span>
      <span class="token comment">// contains a matching value, this redirect will be applied</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;header&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-authorized&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;(?&lt;authorized&gt;yes|true)&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/home?authorized=:authorized&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// if the host is \`example.com\`,</span>
      <span class="token comment">// this redirect will be applied</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:path((?!another-page$).*)&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;host&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;example.com&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/another-page&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="redirects-with-basepath-support" tabindex="-1"><a class="header-anchor" href="#redirects-with-basepath-support" aria-hidden="true">#</a> Redirects with basePath support</h3><p>When leveraging<a href="/docs/guide/api-reference/next.config.js/basepath"><code>basePath</code>support</a>with redirects each<code>source</code>and<code>destination</code>is automatically prefixed with the<code>basePath</code>unless you add<code>basePath: false</code>to the redirect:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token string">&#39;/docs&#39;</span><span class="token punctuation">,</span>

  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/with-basePath&#39;</span><span class="token punctuation">,</span> <span class="token comment">// automatically becomes /docs/with-basePath</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/another&#39;</span><span class="token punctuation">,</span> <span class="token comment">// automatically becomes /docs/another</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// does not add /docs since basePath: false is set</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/without-basePath&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/another&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="redirects-with-i18n-support" tabindex="-1"><a class="header-anchor" href="#redirects-with-i18n-support" aria-hidden="true">#</a> Redirects with i18n support</h3><p>When leveraging<a href="/docs/guide/advanced-features/i18n-routing"><code>i18n</code>support</a>with redirects each<code>source</code>and<code>destination</code>is automatically prefixed to handle the configured<code>locales</code>unless you add<code>locale: false</code>to the redirect. If<code>locale: false</code>is used you must prefix the<code>source</code>and<code>destination</code>with a locale for it to be matched correctly.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">i18n</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fr&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;de&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defaultLocale</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token keyword">async</span> <span class="token function">redirects</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/with-locale&#39;</span><span class="token punctuation">,</span> <span class="token comment">// automatically handles all locales</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/another&#39;</span><span class="token punctuation">,</span> <span class="token comment">// automatically passes the locale on</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// does not handle locales automatically since locale: false is set</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/nl/with-locale-manual&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/nl/another&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// this matches &#39;/&#39; since \`en\` is the defaultLocale</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/en&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/en/another&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// it&#39;s possible to match all locales even when locale: false is set</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:locale/page&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/en/newpage&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// this gets converted to /(en|fr|de)/(.*) so will not match the top-level</span>
        <span class="token comment">// \`/\` or \`/fr\` routes like /:path* would</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/(.*)&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/another&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>In some rare cases, you might need to assign a custom status code for older HTTP Clients to properly redirect. In these cases, you can use the<code>statusCode</code>property instead of the<code>permanent</code>property, but not both. Note: to ensure IE11 compatibility a<code>Refresh</code>header is automatically added for the 308 status code.</p><h2 id="other-redirects" tabindex="-1"><a class="header-anchor" href="#other-redirects" aria-hidden="true">#</a> Other Redirects</h2><ul><li>Inside<a href="/docs/guide/api-routes/response-helpers">API Routes</a>, you can use<code>res.redirect()</code>.- Inside<a href="/docs/guide/api-reference/data-fetching/get-static-props"><code>getStaticProps</code></a>and<a href="/docs/guide/api-reference/data-fetching/get-server-side-props"><code>getServerSideProps</code></a>, you can redirect specific pages at request-time.</li></ul>`,38);function y(g,m){const s=t("ExternalLinkIcon");return p(),o("div",null,[i,n("details",u,[d,n("ul",null,[n("li",null,[n("a",k,[a("Redirects"),c(s)])])])]),h])}const b=e(l,[["render",y],["__file","redirects.html.vue"]]);export{b as default};
