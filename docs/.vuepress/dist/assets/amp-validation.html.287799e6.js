import{_ as e,r as t,o as p,c as o,b as n,d as a,e as r,a as c}from"./app.1ad2624e.js";const l={},i=n("h1",{id:"amp验证",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#amp验证","aria-hidden":"true"},"#"),a(" AMP验证")],-1),d={href:"https://www.npmjs.com/package/amphtml-validator",target:"_blank",rel:"noopener noreferrer"},u=c(`<p>在<a href="/docs/advanced-features/static-html-export">静态HTML导出</a>过程中也会对页面进行验证，任何警告/错误都将打印到终端。任何AMP错误都将导致导出退出，状态码为<code>1</code>因为导出不是有效的AMP。</p><h3 id="定制验证器" tabindex="-1"><a class="header-anchor" href="#定制验证器" aria-hidden="true">#</a> 定制验证器</h3><p>你可以设置自定义AMP验证器<code>next.config.js</code>如下所示:</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">amp</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">validator</span><span class="token operator">:</span> <span class="token string">&#39;./custom_validator.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="跳过amp验证" tabindex="-1"><a class="header-anchor" href="#跳过amp验证" aria-hidden="true">#</a> 跳过AMP验证</h3><p>要关闭AMP验证，添加以下代码到<code>next.config.js</code></p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">amp</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">skipValidation</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,7);function k(h,m){const s=t("ExternalLinkIcon");return p(),o("div",null,[i,n("p",null,[a("AMP页面在开发过程中使用"),n("a",d,[a("amphtml-validator"),r(s)]),a("自动验证。错误和警告将出现在您启动Next.js的终端中。")]),u])}const _=e(l,[["render",k],["__file","amp-validation.html.vue"]]);export{_ as default};
