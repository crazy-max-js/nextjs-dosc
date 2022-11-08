import{_ as t,r as o,o as p,c as e,b as n,d as s,e as c,a as l}from"./app.1ad2624e.js";const u={},i=n("h1",{id:"absolute-imports-and-module-path-aliases",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#absolute-imports-and-module-path-aliases","aria-hidden":"true"},"#"),s(" Absolute Imports and Module path aliases")],-1),k={class:"custom-container details"},r=n("summary",null,"示例",-1),d={href:"https://github.com/vercel/next.js/tree/canary/examples/with-absolute-imports",target:"_blank",rel:"noopener noreferrer"},g=l(`<p>Next.js automatically supports the<code>tsconfig.json</code>and<code>jsconfig.json\`\`&quot;paths&quot;</code>and<code>&quot;baseUrl&quot;</code>options since<a href="/blog/next-9-4">Next.js 9.4</a>.</p><blockquote><p>Note:<code>jsconfig.json</code>can be used when you don&#39;t use TypeScript</p></blockquote><blockquote><p>Note: you need to restart dev server to reflect modifications done in<code>tsconfig.json</code>/<code>jsconfig.json</code></p></blockquote><p>These options allow you to configure module aliases, for example a common pattern is aliasing certain directories to use absolute paths.</p><p>One useful feature of these options is that they integrate automatically into certain editors, for example vscode.</p><p>The<code>baseUrl</code>configuration option allows you to import directly from the root of the project.</p><p>An example of this configuration:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token comment">// tsconfig.json or jsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// components/button.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Click me</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>

</code></pre></div><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// pages/index.js</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&#39;components/button&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p>While<code>baseUrl</code>is useful you might want to add other aliases that don&#39;t match 1 on 1. For this TypeScript has the<code>&quot;paths&quot;</code>option.</p><p>Using<code>&quot;paths&quot;</code>allows you to configure module aliases. For example<code>@/components/*</code>to<code>components/*</code>.</p><p>An example of this configuration:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token comment">// tsconfig.json or jsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/components/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;components/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// components/button.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Click me</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>

</code></pre></div><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// pages/index.js</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&#39;@/components/button&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello World</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div>`,16);function m(f,h){const a=o("ExternalLinkIcon");return p(),e("div",null,[i,n("details",k,[r,n("ul",null,[n("li",null,[n("a",d,[s("Absolute Imports and Aliases"),c(a)])])])]),g])}const j=t(u,[["render",m],["__file","module-path-aliases.html.vue"]]);export{j as default};
