import{_ as p,r as o,o as c,c as r,b as n,d as a,e as t,a as e}from"./app.1ad2624e.js";const l={},i=n("h1",{id:"rewrites",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rewrites","aria-hidden":"true"},"#"),a(" Rewrites")],-1),u={class:"custom-container details"},k=n("summary",null,"示例",-1),d={href:"https://github.com/vercel/next.js/tree/canary/examples/rewrites",target:"_blank",rel:"noopener noreferrer"},h=e(`<details class="custom-container details"><summary>示例</summary><p>Version History</p></details><p>Rewrites allow you to map an incoming request path to a different destination path.</p><p>Rewrites act as a URL proxy and mask the destination path, making it appear the user hasn&#39;t changed their location on the site. In contrast,<a href="/docs/guide/api-reference/next.config.js/redirects">redirects</a>will reroute to a new page and show the URL changes.</p><p>To use rewrites you can use the<code>rewrites</code>key in<code>next.config.js</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Rewrites are applied to client-side routing, a<code>&lt;Link href=&quot;/about&quot;&gt;</code>will have the rewrite applied in the above example.</p><p><code>rewrites</code>is an async function that expects to return either an array or an object of arrays (see below) holding objects with<code>source</code>and<code>destination</code>properties:</p><ul><li><code>source</code>:<code>String</code>- is the incoming request path pattern.- <code>destination</code>:<code>String</code>is the path you want to route to.- <code>basePath</code>:<code>false</code>or<code>undefined</code>- if false the basePath won&#39;t be included when matching, can be used for external rewrites only.- <code>locale</code>:<code>false</code>or<code>undefined</code>- whether the locale should not be included when matching.- <code>has</code>is an array of<a href="#header-cookie-and-query-matching">has objects</a>with the<code>type</code>,<code>key</code>and<code>value</code>properties.</li></ul><p>When the<code>rewrites</code>function returns an array, rewrites are applied after checking the filesystem (pages and<code>/public</code>files) and before dynamic routes. When the<code>rewrites</code>function returns an object of arrays with a specific shape, this behavior can be changed and more finely controlled, as of<code>v10.1</code>of Next.js:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">beforeFiles</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// These rewrites are checked after headers/redirects</span>
        <span class="token comment">// and before all files including _next/public files which</span>
        <span class="token comment">// allows overriding page files</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/some-page&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/somewhere-else&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;query&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;overrideMe&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">afterFiles</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// These rewrites are checked after pages/public files</span>
        <span class="token comment">// are checked but before dynamic routes</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/non-existent&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/somewhere-else&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">// These rewrites are checked after both pages/public files</span>
        <span class="token comment">// and dynamic routes are checked</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:path*&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://my-old-site.com/:path*</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Note: rewrites in<code>beforeFiles</code>do not check the filesystem/dynamic routes immediately after matching a source, they continue until all<code>beforeFiles</code>have been checked.</p><p>The order Next.js routes are checked is:</p><ul><li><a href="/docs/guide/api-reference/next.config.js/headers">headers</a>are checked/applied- <a href="/docs/guide/api-reference/next.config.js/redirects">redirects</a>are checked/applied- <code>beforeFiles</code>rewrites are checked/applied- static files from the<a href="/docs/guide/basic-features/static-file-serving">public directory</a>,<code>_next/static</code>files, and non-dynamic pages are checked/served- <code>afterFiles</code>rewrites are checked/applied, if one of these rewrites is matched we check dynamic routes/static files after each match- <code>fallback</code>rewrites are checked/applied, these are applied before rendering the 404 page and after dynamic routes/all static assets have been checked. If you use<a href="/docs/guide/api-reference/data-fetching/get-static-paths#fallback-true">fallback: true/&#39;blocking&#39;</a>in<code>getStaticPaths</code>, the fallback<code>rewrites</code>defined in your<code>next.config.js</code>willnotbe run.</li></ul><h2 id="rewrite-parameters" tabindex="-1"><a class="header-anchor" href="#rewrite-parameters" aria-hidden="true">#</a> Rewrite parameters</h2><p>When using parameters in a rewrite the parameters will be passed in the query by default when none of the parameters are used in the<code>destination</code>.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/old-about/:path*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token comment">// The :path parameter isn&#39;t used here so will be automatically passed in the query</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>If a parameter is used in the destination none of the parameters will be automatically passed in the query.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/docs/:path*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/:path*&#39;</span><span class="token punctuation">,</span> <span class="token comment">// The :path parameter is used here so will not be automatically passed in the query</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>You can still pass the parameters manually in the query if one is already used in the destination by specifying the query in the<code>destination</code>.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:first/:second&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/:first?second=:second&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// Since the :first parameter is used in the destination the :second parameter</span>
        <span class="token comment">// will not automatically be added in the query although we can manually add it</span>
        <span class="token comment">// as shown above</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Note: for static pages from the<a href="/docs/guide/advanced-features/automatic-static-optimization">Automatic Static Optimization</a>or<a href="/docs/guide/basic-features/data-fetching/get-static-props">prerendering</a>params from rewrites will be parsed on the client after hydration and provided in the query.</p><h2 id="path-matching" tabindex="-1"><a class="header-anchor" href="#path-matching" aria-hidden="true">#</a> Path Matching</h2><p>Path matches are allowed, for example<code>/blog/:slug</code>will match<code>/blog/hello-world</code>(no nested paths):</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/blog/:slug&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/news/:slug&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Matched parameters can be used in the destination</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="wildcard-path-matching" tabindex="-1"><a class="header-anchor" href="#wildcard-path-matching" aria-hidden="true">#</a> Wildcard Path Matching</h3><p>To match a wildcard path you can use<code>*</code>after a parameter, for example<code>/blog/:slug*</code>will match<code>/blog/a/b/c/d/hello-world</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/blog/:slug*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/news/:slug*&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Matched parameters can be used in the destination</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="regex-path-matching" tabindex="-1"><a class="header-anchor" href="#regex-path-matching" aria-hidden="true">#</a> Regex Path Matching</h3><p>To match a regex path you can wrap the regex in parenthesis after a parameter, for example<code>/blog/:slug(\\\\d{1,})</code>will match<code>/blog/123</code>but not<code>/blog/abc</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/old-blog/:post(\\\\d{1,})&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/blog/:post&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Matched parameters can be used in the destination</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>The following characters<code>(</code>,<code>)</code>,<code>{</code>,<code>}</code>,<code>:</code>,<code>*</code>,<code>+</code>,<code>?</code>are used for regex path matching, so when used in the<code>source</code>as non-special values they must be escaped by adding<code>\\\\</code>before them:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// this will match \`/english(default)/something\` being requested</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/english\\\\(default\\\\)/:slug&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/en-us/:slug&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="header-cookie-and-query-matching" tabindex="-1"><a class="header-anchor" href="#header-cookie-and-query-matching" aria-hidden="true">#</a> Header, Cookie, and Query Matching</h2><p>To only match a rewrite when header, cookie, or query values also match the<code>has</code>field can be used. Both the<code>source</code>and all<code>has</code>items must match for the rewrite to be applied.</p><p><code>has</code>items have the following fields:</p><ul><li><code>type</code>:<code>String</code>- must be either<code>header</code>,<code>cookie</code>,<code>host</code>, or<code>query</code>.- <code>key</code>:<code>String</code>- the key from the selected type to match against.- <code>value</code>:<code>String</code>or<code>undefined</code>- the value to check for, if undefined any value will match. A regex like string can be used to capture a specific part of the value, e.g. if the value<code>first-(?&lt;paramName&gt;.*)</code>is used for<code>first-second</code>then<code>second</code>will be usable in the destination with<code>:paramName</code>.</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token comment">// if the header \`x-rewrite-me\` is present,</span>
      <span class="token comment">// this rewrite will be applied</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:path*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;header&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-rewrite-me&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/another-page&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// if the source, query, and cookie are matched,</span>
      <span class="token comment">// this rewrite will be applied</span>
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
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/:path*/home&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// if the header \`x-authorized\` is present and</span>
      <span class="token comment">// contains a matching value, this rewrite will be applied</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:path*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;header&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-authorized&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;(?&lt;authorized&gt;yes|true)&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/home?authorized=:authorized&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// if the host is \`example.com\`,</span>
      <span class="token comment">// this rewrite will be applied</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:path*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;host&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;example.com&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/another-page&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="rewriting-to-an-external-url" tabindex="-1"><a class="header-anchor" href="#rewriting-to-an-external-url" aria-hidden="true">#</a> Rewriting to an external URL</h2>`,38),y={class:"custom-container details"},g=n("summary",null,"示例",-1),m={href:"https://github.com/vercel/next.js/tree/canary/examples/custom-routes-proxying",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/vercel/next.js/tree/canary/examples/with-zones",target:"_blank",rel:"noopener noreferrer"},w=e(`<p>Rewrites allow you to rewrite to an external url. This is especially useful for incrementally adopting Next.js. The following is an example rewrite for redirecting the<code>/blog</code>route of your main app to an external site.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/blog&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;https://example.com/blog&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/blog/:slug&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;https://example.com/blog/:slug&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Matched parameters can be used in the destination</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>If you&#39;re using<code>trailingSlash: true</code>, you also need to insert a trailing slash in the<code>source</code>parameter. If the destination server is also expecting a trailing slash it should be included in the<code>destination</code>parameter as well.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">trailingSlash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/blog/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;https://example.com/blog/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/blog/:path*/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;https://example.com/blog/:path*/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="incremental-adoption-of-next-js" tabindex="-1"><a class="header-anchor" href="#incremental-adoption-of-next-js" aria-hidden="true">#</a> Incremental adoption of Next.js</h3><p>You can also have Next.js fall back to proxying to an existing website after checking all Next.js routes.</p><p>This way you don&#39;t have to change the rewrites configuration when migrating more pages to Next.js</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:path*&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://custom-routes-proxying-endpoint.vercel.app/:path*</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>See additional information on incremental adoption<a href="/docs/guide/migrating/incremental-adoption">in the docs here</a>.</p><h3 id="rewrites-with-basepath-support" tabindex="-1"><a class="header-anchor" href="#rewrites-with-basepath-support" aria-hidden="true">#</a> Rewrites with basePath support</h3><p>When leveraging<a href="/docs/guide/api-reference/next.config.js/basepath"><code>basePath</code>support</a>with rewrites each<code>source</code>and<code>destination</code>is automatically prefixed with the<code>basePath</code>unless you add<code>basePath: false</code>to the rewrite:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token string">&#39;/docs&#39;</span><span class="token punctuation">,</span>

  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/with-basePath&#39;</span><span class="token punctuation">,</span> <span class="token comment">// automatically becomes /docs/with-basePath</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/another&#39;</span><span class="token punctuation">,</span> <span class="token comment">// automatically becomes /docs/another</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// does not add /docs to /without-basePath since basePath: false is set</span>
        <span class="token comment">// Note: this can not be used for internal rewrites e.g. \`destination: &#39;/another&#39;\`</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/without-basePath&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;https://example.com&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="rewrites-with-i18n-support" tabindex="-1"><a class="header-anchor" href="#rewrites-with-i18n-support" aria-hidden="true">#</a> Rewrites with i18n support</h3><p>When leveraging<a href="/docs/guide/advanced-features/i18n-routing"><code>i18n</code>support</a>with rewrites each<code>source</code>and<code>destination</code>is automatically prefixed to handle the configured<code>locales</code>unless you add<code>locale: false</code>to the rewrite. If<code>locale: false</code>is used you must prefix the<code>source</code>and<code>destination</code>with a locale for it to be matched correctly.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">i18n</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fr&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;de&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defaultLocale</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token keyword">async</span> <span class="token function">rewrites</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/with-locale&#39;</span><span class="token punctuation">,</span> <span class="token comment">// automatically handles all locales</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/another&#39;</span><span class="token punctuation">,</span> <span class="token comment">// automatically passes the locale on</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// does not handle locales automatically since locale: false is set</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/nl/with-locale-manual&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/nl/another&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// this matches &#39;/&#39; since \`en\` is the defaultLocale</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/en&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/en/another&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// it&#39;s possible to match all locales even when locale: false is set</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:locale/api-alias/:path*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/api/:path*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// this gets converted to /(en|fr|de)/(.*) so will not match the top-level</span>
        <span class="token comment">// \`/\` or \`/fr\` routes like /:path* would</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/(.*)&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/another&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div>`,15);function b(x,v){const s=o("ExternalLinkIcon");return c(),r("div",null,[i,n("details",u,[k,n("ul",null,[n("li",null,[n("a",d,[a("Rewrites"),t(s)])])])]),h,n("details",y,[g,n("ul",null,[n("li",null,[n("a",m,[a("Incremental adoption of Next.js"),t(s)]),a("- "),n("a",f,[a("Using Multiple Zones"),t(s)])])])]),w])}const _=p(l,[["render",b],["__file","rewrites.html.vue"]]);export{_ as default};
