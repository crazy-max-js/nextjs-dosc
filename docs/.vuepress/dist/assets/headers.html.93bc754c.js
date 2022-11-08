import{_ as p,r as t,o as e,c as o,b as n,d as a,e as c,a as l}from"./app.1ad2624e.js";const r={},u=n("h1",{id:"headers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#headers","aria-hidden":"true"},"#"),a(" Headers")],-1),i={class:"custom-container details"},k=n("summary",null,"示例",-1),d={href:"https://github.com/vercel/next.js/tree/canary/examples/headers",target:"_blank",rel:"noopener noreferrer"},h=l(`<details class="custom-container details"><summary>示例</summary><p>Version History</p></details><p>Headers allow you to set custom HTTP headers on the response to an incoming request on a given path.</p><p>To set custom HTTP headers you can use the<code>headers</code>key in<code>next.config.js</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-custom-header&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;my custom header value&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-another-custom-header&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;my other custom header value&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p><code>headers</code>is an async function that expects an array to be returned holding objects with<code>source</code>and<code>headers</code>properties:</p><ul><li><code>source</code>is the incoming request path pattern.- <code>headers</code>is an array of response header objects, with<code>key</code>and<code>value</code>properties.- <code>basePath</code>:<code>false</code>or<code>undefined</code>- if false the basePath won&#39;t be included when matching, can be used for external rewrites only.- <code>locale</code>:<code>false</code>or<code>undefined</code>- whether the locale should not be included when matching.- <code>has</code>is an array of<a href="#header-cookie-and-query-matching">has objects</a>with the<code>type</code>,<code>key</code>and<code>value</code>properties.</li></ul><p>Headers are checked before the filesystem which includes pages and<code>/public</code>files.</p><h2 id="header-overriding-behavior" tabindex="-1"><a class="header-anchor" href="#header-overriding-behavior" aria-hidden="true">#</a> Header Overriding Behavior</h2><p>If two headers match the same path and set the same header key, the last header key will override the first. Using the below headers, the path<code>/hello</code>will result in the header<code>x-hello</code>being<code>world</code>due to the last header value set being<code>world</code>.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:path*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-hello&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;there&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/hello&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-hello&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="path-matching" tabindex="-1"><a class="header-anchor" href="#path-matching" aria-hidden="true">#</a> Path Matching</h2><p>Path matches are allowed, for example<code>/blog/:slug</code>will match<code>/blog/hello-world</code>(no nested paths):</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/blog/:slug&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-slug&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;:slug&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Matched parameters can be used in the value</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-slug-:slug&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Matched parameters can be used in the key</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;my other custom header value&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="wildcard-path-matching" tabindex="-1"><a class="header-anchor" href="#wildcard-path-matching" aria-hidden="true">#</a> Wildcard Path Matching</h3><p>To match a wildcard path you can use<code>*</code>after a parameter, for example<code>/blog/:slug*</code>will match<code>/blog/a/b/c/d/hello-world</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/blog/:slug*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-slug&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;:slug*&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Matched parameters can be used in the value</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-slug-:slug*&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Matched parameters can be used in the key</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;my other custom header value&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="regex-path-matching" tabindex="-1"><a class="header-anchor" href="#regex-path-matching" aria-hidden="true">#</a> Regex Path Matching</h3><p>To match a regex path you can wrap the regex in parenthesis after a parameter, for example<code>/blog/:slug(\\\\d{1,})</code>will match<code>/blog/123</code>but not<code>/blog/abc</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/blog/:post(\\\\d{1,})&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-post&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;:post&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>The following characters<code>(</code>,<code>)</code>,<code>{</code>,<code>}</code>,<code>:</code>,<code>*</code>,<code>+</code>,<code>?</code>are used for regex path matching, so when used in the<code>source</code>as non-special values they must be escaped by adding<code>\\\\</code>before them:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// this will match \`/english(default)/something\` being requested</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/english\\\\(default\\\\)/:slug&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-header&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="header-cookie-and-query-matching" tabindex="-1"><a class="header-anchor" href="#header-cookie-and-query-matching" aria-hidden="true">#</a> Header, Cookie, and Query Matching</h2><p>To only apply a header when either header, cookie, or query values also match the<code>has</code>field can be used. Both the<code>source</code>and all<code>has</code>items must match for the header to be applied.</p><p><code>has</code>items have the following fields:</p><ul><li><code>type</code>:<code>String</code>- must be either<code>header</code>,<code>cookie</code>,<code>host</code>, or<code>query</code>.- <code>key</code>:<code>String</code>- the key from the selected type to match against.- <code>value</code>:<code>String</code>or<code>undefined</code>- the value to check for, if undefined any value will match. A regex like string can be used to capture a specific part of the value, e.g. if the value<code>first-(?&lt;paramName&gt;.*)</code>is used for<code>first-second</code>then<code>second</code>will be usable in the destination with<code>:paramName</code>.</li></ul><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token comment">// if the header \`x-add-header\` is present,</span>
      <span class="token comment">// the \`x-another-header\` header will be applied</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:path*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;header&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-add-header&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-another-header&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// if the source, query, and cookie are matched,</span>
      <span class="token comment">// the \`x-authorized\` header will be applied</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/specific/:path*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;query&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// the page value will not be available in the</span>
            <span class="token comment">// header key/values since value is provided and</span>
            <span class="token comment">// doesn&#39;t use a named capture group e.g. (?&lt;page&gt;home)</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;cookie&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;authorized&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-authorized&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;:authorized&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// if the header \`x-authorized\` is present and</span>
      <span class="token comment">// contains a matching value, the \`x-another-header\` will be applied</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:path*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;header&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-authorized&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;(?&lt;authorized&gt;yes|true)&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-another-header&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;:authorized&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// if the host is \`example.com\`,</span>
      <span class="token comment">// this header will be applied</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/:path*&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">has</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;host&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;example.com&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-another-header&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;:authorized&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="headers-with-basepath-support" tabindex="-1"><a class="header-anchor" href="#headers-with-basepath-support" aria-hidden="true">#</a> Headers with basePath support</h3><p>When leveraging<a href="/docs/guide/api-reference/next.config.js/basepath"><code>basePath</code>support</a>with headers each<code>source</code>is automatically prefixed with the<code>basePath</code>unless you add<code>basePath: false</code>to the header:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token string">&#39;/docs&#39;</span><span class="token punctuation">,</span>

  <span class="token keyword">async</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/with-basePath&#39;</span><span class="token punctuation">,</span> <span class="token comment">// becomes /docs/with-basePath</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-hello&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/without-basePath&#39;</span><span class="token punctuation">,</span> <span class="token comment">// is not modified since basePath: false is set</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-hello&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="headers-with-i18n-support" tabindex="-1"><a class="header-anchor" href="#headers-with-i18n-support" aria-hidden="true">#</a> Headers with i18n support</h3><p>When leveraging<a href="/docs/guide/advanced-features/i18n-routing"><code>i18n</code>support</a>with headers each<code>source</code>is automatically prefixed to handle the configured<code>locales</code>unless you add<code>locale: false</code>to the header. If<code>locale: false</code>is used you must prefix the<code>source</code>with a locale for it to be matched correctly.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">i18n</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fr&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;de&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">defaultLocale</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token keyword">async</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/with-locale&#39;</span><span class="token punctuation">,</span> <span class="token comment">// automatically handles all locales</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-hello&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// does not handle locales automatically since locale: false is set</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/nl/with-locale-manual&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-hello&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// this matches &#39;/&#39; since \`en\` is the defaultLocale</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/en&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-hello&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// this gets converted to /(en|fr|de)/(.*) so will not match the top-level</span>
        <span class="token comment">// \`/\` or \`/fr\` routes like /:path* would</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">&#39;/(.*)&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;x-hello&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="cache-control" tabindex="-1"><a class="header-anchor" href="#cache-control" aria-hidden="true">#</a> Cache-Control</h3><p>You can set the<code>Cache-Control</code>header in your<a href="/docs/guide/api-routes/introduction">Next.js API Routes</a>by using the<code>res.setHeader</code>method:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/api/user.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Cache-Control&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;s-maxage=86400&#39;</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John Doe&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p>You cannot set<code>Cache-Control</code>headers in<code>next.config.js</code>file as these will be overwritten in production to ensure that API Routes and static assets are cached effectively.</p><p>If you need to revalidate the cache of a page that has been<a href="/docs/guide/basic-features/pages#static-generation-recommended">statically generated</a>, you can do so by setting the<code>revalidate</code>prop in the page&#39;s<a href="/docs/guide/basic-features/data-fetching/get-static-props"><code>getStaticProps</code></a>function.</p><h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2><p>For more information, we recommend the following sections:</p>`,39);function y(g,m){const s=t("ExternalLinkIcon");return e(),o("div",null,[u,n("details",i,[k,n("ul",null,[n("li",null,[n("a",d,[a("Headers"),c(s)])])])]),h])}const v=p(r,[["render",y],["__file","headers.html.vue"]]);export{v as default};
