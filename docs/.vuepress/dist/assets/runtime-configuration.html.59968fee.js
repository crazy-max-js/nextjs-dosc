import{_ as n,o as a,c as s,a as t}from"./app.1ad2624e.js";const e={},o=t(`<h1 id="runtime-configuration" tabindex="-1"><a class="header-anchor" href="#runtime-configuration" aria-hidden="true">#</a> Runtime Configuration</h1><blockquote><p>Generally you&#39;ll want to use<a href="/docs/guide/basic-features/environment-variables">build-time environment variables</a>to provide your configuration. The reason for this is that runtime configuration adds rendering / initialization overhead and is incompatible with<a href="/docs/guide/advanced-features/automatic-static-optimization">Automatic Static Optimization</a>.</p></blockquote><p>To add runtime configuration to your app open<code>next.config.js</code>and add the<code>publicRuntimeConfig</code>and<code>serverRuntimeConfig</code>configs:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">serverRuntimeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Will only be available on the server side</span>
    <span class="token literal-property property">mySecret</span><span class="token operator">:</span> <span class="token string">&#39;secret&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">secondSecret</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">SECOND_SECRET</span><span class="token punctuation">,</span> <span class="token comment">// Pass through env variables</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">publicRuntimeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Will be available on both server and client</span>
    <span class="token literal-property property">staticFolder</span><span class="token operator">:</span> <span class="token string">&#39;/static&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Place any server-only runtime config under<code>serverRuntimeConfig</code>.</p><p>Anything accessible to both client and server-side code should be under<code>publicRuntimeConfig</code>.</p><blockquote><p>A page that relies on<code>publicRuntimeConfig</code><strong>must</strong>use<code>getInitialProps</code>or<code>getServerSideProps</code>or your application must have a<a href="/docs/guide/advanced-features/custom-app">Custom App</a>with<code>getInitialProps</code>to opt-out of<a href="/docs/guide/advanced-features/automatic-static-optimization">Automatic Static Optimization</a>. Runtime configuration won&#39;t be available to any page (or component in a page) without being server-side rendered.</p></blockquote><p>To get access to the runtime configs in your app use<code>next/config</code>, like so:</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> getConfig <span class="token keyword">from</span> <span class="token string">&#39;next/config&#39;</span>
<span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">&#39;next/image&#39;</span>

<span class="token comment">// Only holds serverRuntimeConfig and publicRuntimeConfig</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> serverRuntimeConfig<span class="token punctuation">,</span> publicRuntimeConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// Will only be available on the server-side</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>serverRuntimeConfig<span class="token punctuation">.</span>mySecret<span class="token punctuation">)</span>
<span class="token comment">// Will be available on both server-side and client-side</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>publicRuntimeConfig<span class="token punctuation">.</span>staticFolder<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">MyImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span>
        <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>publicRuntimeConfig<span class="token punctuation">.</span>staticFolder<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/logo.png</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span></span>
        <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fill<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyImage

</code></pre></div><h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2>`,10),p=[o];function c(i,l){return a(),s("div",null,p)}const r=n(e,[["render",c],["__file","runtime-configuration.html.vue"]]);export{r as default};
