import{_ as n,o as e,c as a,a as s}from"./app.1ad2624e.js";const t={},o=s(`<h1 id="configuring-ondemandentries" tabindex="-1"><a class="header-anchor" href="#configuring-ondemandentries" aria-hidden="true">#</a> Configuring onDemandEntries</h1><p>Next.js exposes some options that give you some control over how the server will dispose or keep in memory built pages in development.</p><p>To change the defaults, open<code>next.config.js</code>and add the<code>onDemandEntries</code>config:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">onDemandEntries</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// period (in ms) where the server will keep pages in the buffer</span>
    <span class="token literal-property property">maxInactiveAge</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token comment">// number of pages that should be kept simultaneously without being disposed</span>
    <span class="token literal-property property">pagesBufferLength</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2>`,5),p=[o];function r(c,i){return e(),a("div",null,p)}const d=n(t,[["render",r],["__file","configuring-onDemandEntries.html.vue"]]);export{d as default};
