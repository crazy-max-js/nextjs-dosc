import{_ as o,r as p,o as c,c as r,b as n,d as s,e as t,a as e}from"./app.1ad2624e.js";const l={},i=n("h1",{id:"api-routes-request-helpers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#api-routes-request-helpers","aria-hidden":"true"},"#"),s(" API Routes Request Helpers")],-1),u={class:"custom-container details"},k=n("summary",null,"示例",-1),d={href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes-middleware",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,[s("API Routes provide built-in request helpers which parse the incoming request ("),n("code",null,"req"),s("):")],-1),g=n("code",null,"req.cookies",-1),m=n("code",null,"{}",-1),f=n("code",null,"req.query",-1),b={href:"https://en.wikipedia.org/wiki/Query_string",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"{}",-1),_=n("code",null,"req.body",-1),x=n("code",null,"content-type",-1),v=n("code",null,"null",-1),j=e(`<h2 id="custom-config" tabindex="-1"><a class="header-anchor" href="#custom-config" aria-hidden="true">#</a> Custom config</h2><p>Every API Route can export a<code>config</code>object to change the default configuration, which is the following:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">bodyParser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sizeLimit</span><span class="token operator">:</span> <span class="token string">&#39;1mb&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>The<code>api</code>object includes all config options available for API Routes.</p>`,4),q=n("code",null,"bodyParser",-1),A=n("code",null,"Stream",-1),R={href:"https://www.npmjs.com/package/raw-body",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"raw-body",-1),I=n("code",null,"false",-1),P=n("code",null,"bodyParsing",-1),C=n("strong",null,"webhook",-1),S={href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks#validating-payloads-from-github",target:"_blank",rel:"noopener noreferrer"},z=e(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">bodyParser</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div>`,1),L=n("code",null,"bodyParser.sizeLimit",-1),D={href:"https://github.com/visionmedia/bytes.js",target:"_blank",rel:"noopener noreferrer"},E=e(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">bodyParser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">sizeLimit</span><span class="token operator">:</span> <span class="token string">&#39;500kb&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p><code>externalResolver</code>is an explicit flag that tells the server that this route is being handled by an external resolver likeexpressorconnect. Enabling this option disables warnings for unresolved requests.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">externalResolver</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p><code>responseLimit</code>is automatically enabled, warning when an API Routes&#39; response body is over 4MB.</p><p>If you are not using Next.js in a serverless environment, and understand the performance implications of not using a CDN or dedicated media host, you can set this limit to<code>false</code>.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">responseLimit</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p><code>responseLimit</code>can also take the number of bytes or any string format supported by<code>bytes</code>, for example<code>1000</code>,<code>&#39;500kb&#39;</code>or<code>&#39;3mb&#39;</code>. This value will be the maximum response size before a warning is displayed. Default is 4MB. (see above)</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">responseLimit</span><span class="token operator">:</span> <span class="token string">&#39;8mb&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="extending-the-req-res-objects-with-typescript" tabindex="-1"><a class="header-anchor" href="#extending-the-req-res-objects-with-typescript" aria-hidden="true">#</a> Extending the req/res objects with TypeScript</h2><p>For better type-safety, it is not recommended to extend the<code>req</code>and<code>res</code>objects. Instead, use functions to work with them:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// utils/cookies.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> serialize<span class="token punctuation">,</span> CookieSerializeOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;cookie&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next&#39;</span>

<span class="token doc-comment comment">/**
 * This sets \`cookie\` using the \`res\` object
 */</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">setCookie</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  res<span class="token operator">:</span> NextApiResponse<span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> CookieSerializeOptions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stringValue <span class="token operator">=</span>
    <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;j:&#39;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> options<span class="token punctuation">.</span>maxAge <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    options<span class="token punctuation">.</span>expires <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> options<span class="token punctuation">.</span>maxAge <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Set-Cookie&#39;</span><span class="token punctuation">,</span> <span class="token function">serialize</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> stringValue<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// pages/api/cookies.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setCookie <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../utils/cookies&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> NextApiRequest<span class="token punctuation">,</span> res<span class="token operator">:</span> NextApiResponse<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Calling our pure function using the \`res\` object, it will add the \`set-cookie\` header</span>
  <span class="token comment">// Add the \`set-cookie\` header on the main domain and expire after 30 days</span>
  <span class="token function">setCookie</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token string">&#39;Next.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;api-middleware!&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> maxAge<span class="token operator">:</span> <span class="token number">2592000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// Return the \`set-cookie\` header so we can display it in the browser and show that it works!</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Set-Cookie&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> handler

</code></pre></div><p>If you can&#39;t avoid these objects from being extended, you have to create your own type to include the extra properties:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// pages/api/foo.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> NextApiRequest<span class="token punctuation">,</span> NextApiResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> withFoo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;external-lib-foo&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">NextApiRequestWithFoo</span> <span class="token operator">=</span> NextApiRequest <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token punctuation">(</span>bar<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span>req<span class="token operator">:</span> NextApiRequestWithFoo<span class="token punctuation">,</span> res<span class="token operator">:</span> NextApiResponse<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  req<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span> <span class="token comment">// we can now use \`req.foo\` without type errors</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withFoo</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span>

</code></pre></div><p>Keep in mind this is not safe since the code will still compile even if you remove<code>withFoo()</code>from the export.</p>`,14);function F(H,V){const a=p("ExternalLinkIcon");return c(),r("div",null,[i,n("details",u,[k,n("ul",null,[n("li",null,[n("a",d,[s("API Routes Request Helpers"),t(a)]),s("- "),n("a",h,[s("API Routes with CORS"),t(a)])])])]),y,n("ul",null,[n("li",null,[g,s("- An object containing the cookies sent by the request. Defaults to"),m,s("- "),f,s("- An object containing the"),n("a",b,[s("query string"),t(a)]),s(". Defaults to"),w,s("- "),_,s("- An object containing the body parsed by"),x,s(", or"),v,s("if no body was sent")])]),j,n("p",null,[q,s("is automatically enabled. If you want to consume the body as a"),A,s("or with"),n("a",R,[N,t(a)]),s(", you can set this to"),I,s(".")]),n("p",null,[s("One use case for disabling the automatic"),P,s("is to allow you to verify the raw body of a"),C,s("request, for example"),n("a",S,[s("from GitHub"),t(a)]),s(".")]),z,n("p",null,[L,s("is the maximum size allowed for the parsed body, in any format supported by"),n("a",D,[s("bytes"),t(a)]),s(", like so:")]),E])}const O=o(l,[["render",F],["__file","request-helpers.html.vue"]]);export{O as default};
