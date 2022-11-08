import{_ as e,o as n,c as s,a}from"./app.1ad2624e.js";const o={},t=a(`<h1 id="ignoring-typescript-errors" tabindex="-1"><a class="header-anchor" href="#ignoring-typescript-errors" aria-hidden="true">#</a> Ignoring TypeScript Errors</h1><p>Next.js fails your<strong>production build</strong>(<code>next build</code>) when TypeScript errors are present in your project.</p><p>If you&#39;d like Next.js to dangerously produce production code even when your application has errors, you can disable the built-in type checking step.</p><p>If disabled, be sure you are running type checks as part of your build or deploy process, otherwise this can be very dangerous.</p><p>Open<code>next.config.js</code>and enable the<code>ignoreBuildErrors</code>option in the<code>typescript</code>config:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">typescript</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// !! WARN !!</span>
    <span class="token comment">// Dangerously allow production builds to successfully complete even if</span>
    <span class="token comment">// your project has type errors.</span>
    <span class="token comment">// !! WARN !!</span>
    <span class="token literal-property property">ignoreBuildErrors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2>`,7),r=[t];function p(c,i){return n(),s("div",null,r)}const d=e(o,[["render",p],["__file","ignoring-typescript-errors.html.vue"]]);export{d as default};
