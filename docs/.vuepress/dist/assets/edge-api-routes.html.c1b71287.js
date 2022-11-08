import{_ as e,r as t,o as p,c as o,b as s,d as n,e as c,a as r}from"./app.1ad2624e.js";const l={},u=r(`<h1 id="edge-api-routes-beta" tabindex="-1"><a class="header-anchor" href="#edge-api-routes-beta" aria-hidden="true">#</a> Edge API Routes (Beta)</h1><p>Edge API Routes enable you to build high performance APIs with Next.js. Using the<a href="/docs/guide/api-reference/edge-runtime">Edge Runtime</a>, they are often faster than Node.js-based API Routes. This performance improvement does come with<a href="/docs/guide/api-reference/edge-runtime#unsupported-apis">constraints</a>, like not having access to native Node.js APIs. Instead, Edge API Routes are built on standard Web APIs.</p><p>Any file inside the folder<code>pages/api</code>is mapped to<code>/api/*</code>and will be treated as an API endpoint instead of a page. They are server-side only bundles and won&#39;t increase your client-side bundle size.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> Basic</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  runtime<span class="token operator">:</span> <span class="token string">&#39;experimental-edge&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>req<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="json-response" tabindex="-1"><a class="header-anchor" href="#json-response" aria-hidden="true">#</a> JSON Response</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/server&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  runtime<span class="token operator">:</span> <span class="token string">&#39;experimental-edge&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>
    <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Jim Halpert&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      status<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      headers<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="cache-control" tabindex="-1"><a class="header-anchor" href="#cache-control" aria-hidden="true">#</a> Cache-Control</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/server&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  runtime<span class="token operator">:</span> <span class="token string">&#39;experimental-edge&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>
    <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Jim Halpert&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      status<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      headers<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;cache-control&#39;</span><span class="token operator">:</span> <span class="token string">&#39;public, s-maxage=1200, stale-while-revalidate=600&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="query-parameters" tabindex="-1"><a class="header-anchor" href="#query-parameters" aria-hidden="true">#</a> Query Parameters</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/server&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  runtime<span class="token operator">:</span> <span class="token string">&#39;experimental-edge&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> searchParams <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
  <span class="token keyword">const</span> email <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="forwarding-headers" tabindex="-1"><a class="header-anchor" href="#forwarding-headers" aria-hidden="true">#</a> Forwarding Headers</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name">NextRequest</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/server&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  runtime<span class="token operator">:</span> <span class="token string">&#39;experimental-edge&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span>req<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> authorization <span class="token operator">=</span> req<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;authorization&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://backend-api.com/api/protected&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    method<span class="token operator">:</span> req<span class="token punctuation">.</span>method<span class="token punctuation">,</span>
    headers<span class="token operator">:</span> <span class="token punctuation">{</span>
      authorization<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">&#39;manual&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="differences-between-api-routes" tabindex="-1"><a class="header-anchor" href="#differences-between-api-routes" aria-hidden="true">#</a> Differences between API Routes</h2><p>Edge API Routes use the<a href="/docs/guide/api-reference/edge-runtime">Edge Runtime</a>, whereas API Routes use the<a href="/docs/guide/advanced-features/react-18/switchable-runtime">Node.js runtime</a>.</p>`,16),i=s("a",{href:"/docs/guide/api-reference/edge-runtime#web-stream-apis"},"stream responses",-1),k={href:"https://web.dev/ttfb/",target:"_blank",rel:"noopener noreferrer"},d=s("p",null,[n("View the"),s("a",{href:"/docs/guide/api-reference/edge-runtime"},"supported APIs"),n("and"),s("a",{href:"/docs/guide/api-reference/edge-runtime#unsupported-apis"},"unsupported APIs"),n("for the Edge Runtime.")],-1);function h(g,y){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,s("p",null,[n("Edge API Routes can"),i,n("from the server and runaftercached files (e.g. HTML, CSS, JavaScript) have been accessed. Server-side streaming can help improve performance with faster"),s("a",k,[n("Time To First Byte (TTFB)"),c(a)]),n(".")]),d])}const m=e(l,[["render",h],["__file","edge-api-routes.html.vue"]]);export{m as default};
