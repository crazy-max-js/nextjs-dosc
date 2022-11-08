import{_ as o,r as e,o as c,c as l,b as n,d as a,e as t,a as p}from"./app.1ad2624e.js";const u={},k=n("h1",{id:"添加amp组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#添加amp组件","aria-hidden":"true"},"#"),a(" 添加AMP组件")],-1),i={href:"https://amp.dev/documentation/components/",target:"_blank",rel:"noopener noreferrer"},r=p(`<div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">amp</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">MyAmpPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Some time: </span><span class="token punctuation">{</span>date<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-timeago</span>
        <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>15<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">datetime</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>date<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>responsive<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        .
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-timeago</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyAmpPage

</code></pre></div>`,1),d={href:"https://amp.dev/documentation/components/amp-timeago/?format=websites",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"amp-timeago",-1),m=p(`<p>默认情况下，总是导入组件的最新版本。如果你想自定义版本，你可以使用<code>next/head</code>，如下例所示:</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> Head <span class="token keyword">from</span> <span class="token string">&#39;next/head&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">amp</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">MyAmpPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Head</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
          <span class="token attr-name">async</span>
          <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>amp-timeago<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">custom-element</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>amp-timeago<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.ampproject.org/v0/amp-timeago-0.1.js<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Head</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Some time: </span><span class="token punctuation">{</span>date<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>amp-timeago</span>
        <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>15<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">datetime</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>date<span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>responsive<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        .
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>amp-timeago</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyAmpPage

</code></pre></div>`,2);function x(y,_){const s=e("ExternalLinkIcon");return c(),l("div",null,[k,n("p",null,[a("AMP社区提供了"),n("a",i,[a("多种组件"),t(s)]),a("使AMP页面更具互动性。Next.js会自动导入页面上使用的所有组件，不需要手动导入AMP组件脚本:")]),r,n("p",null,[a("上面的例子使用了"),n("a",d,[g,t(s)]),a("组件。")]),m])}const q=o(u,[["render",x],["__file","adding-amp-components.html.vue"]]);export{q as default};
