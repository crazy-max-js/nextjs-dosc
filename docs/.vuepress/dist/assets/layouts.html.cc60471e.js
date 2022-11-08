import{_ as p,r as t,o,c as e,b as c,d as n,e as l,a}from"./app.1ad2624e.js";const r={},k=a(`<h1 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h1><blockquote><p>注意：Next.js 13 引入了app/目录（beta）。这个新目录支持布局、嵌套路由，并默认使用服务器组件。在内部app/，您可以在布局中为整个应用程序获取数据，包括支持更精细的嵌套布局（使用并置数据获取）。</p><p>了解有关逐步采用app/的更多信息。</p></blockquote><p>React 模型允许我们将一个页面解构为一系列组件。许多这些组件经常在页面之间重用。例如，您可能在每个页面上都有相同的导航栏和页脚。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// components/layout.js</span>

<span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">&#39;./navbar&#39;</span>
<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">&#39;./footer&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Layout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Navbar <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Footer <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><h3 id="使用自定义应用程序的单一共享布局" tabindex="-1"><a class="header-anchor" href="#使用自定义应用程序的单一共享布局" aria-hidden="true">#</a> 使用自定义应用程序的单一共享布局</h3>`,6),u=a(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/_app.js</span>

<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;../components/layout&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Layout<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="每页布局" tabindex="-1"><a class="header-anchor" href="#每页布局" aria-hidden="true">#</a> 每页布局</h3><p>如果您需要多个布局，您可以getLayout向页面添加一个属性，允许您为布局返回一个 React 组件。这允许您在每页的基础上定义布局。由于我们要返回一个函数，如果需要，我们可以有复杂的嵌套布局。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/index.js</span>

<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;../components/layout&#39;</span>
<span class="token keyword">import</span> NestedLayout <span class="token keyword">from</span> <span class="token string">&#39;../components/nested-layout&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** Your content */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Page<span class="token punctuation">.</span><span class="token function-variable function">getLayout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">getLayout</span><span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Layout<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>NestedLayout<span class="token operator">&gt;</span><span class="token punctuation">{</span>page<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>NestedLayout<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Layout<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/_app.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Use the layout defined at the page level, if available</span>
  <span class="token keyword">const</span> getLayout <span class="token operator">=</span> Component<span class="token punctuation">.</span>getLayout <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token function">getLayout</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在页面之间导航时，我们希望保持页面状态（输入值、滚动位置等）以获得单页应用程序 (SPA) 体验。</p><p>这种布局模式支持状态持久化，因为 React 组件树在页面转换之间维护。通过组件树，React 可以了解哪些元素已更改以保留状态。</p><blockquote><p>注意：这个过程称为和解，这是 React 了解哪些元素已更改的方式。</p></blockquote><h2 id="使用typescript" tabindex="-1"><a class="header-anchor" href="#使用typescript" aria-hidden="true">#</a> 使用TypeScript</h2><p>使用 TypeScript 时，您必须首先为您的页面创建一个包含getLayout函数的新类型。然后，您必须为您创建一个新类型，AppProps它会覆盖该Component属性以使用先前创建的类型。</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// pages/index.tsx</span>

<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ReactElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;../components/layout&#39;</span>
<span class="token keyword">import</span> NestedLayout <span class="token keyword">from</span> <span class="token string">&#39;../components/nested-layout&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextPageWithLayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./_app&#39;</span>

<span class="token keyword">const</span> Page<span class="token operator">:</span> <span class="token function-variable function">NextPageWithLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">hello world</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>

Page<span class="token punctuation">.</span><span class="token function-variable function">getLayout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">getLayout</span><span class="token punctuation">(</span>page<span class="token operator">:</span> ReactElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Layout</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NestedLayout</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>page<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NestedLayout</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Layout</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Page
</code></pre></div><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// pages/_app.tsx</span>

<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ReactElement<span class="token punctuation">,</span> ReactNode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> NextPage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/app&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">NextPageWithLayout<span class="token operator">&lt;</span><span class="token constant">P</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token constant">IP</span> <span class="token operator">=</span> <span class="token constant">P</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> NextPage<span class="token operator">&lt;</span><span class="token constant">P</span><span class="token punctuation">,</span> <span class="token constant">IP</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  getLayout<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>page<span class="token operator">:</span> ReactElement<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ReactNode
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">AppPropsWithLayout</span> <span class="token operator">=</span> AppProps <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  Component<span class="token operator">:</span> NextPageWithLayout
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span><span class="token operator">:</span> AppPropsWithLayout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Use the layout defined at the page level, if available</span>
  <span class="token keyword">const</span> getLayout <span class="token operator">=</span> Component<span class="token punctuation">.</span>getLayout <span class="token operator">??</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> page<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token function">getLayout</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Component</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="数据获取" tabindex="-1"><a class="header-anchor" href="#数据获取" aria-hidden="true">#</a> 数据获取</h2><p>在您的布局中，您可以使用SWRuseEffect之类的库在客户端获取数据。因为这个文件不是Page，所以你不能使用or当前。getStaticPropsgetServerSideProps</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// components/layout.js</span>

<span class="token keyword">import</span> useSWR <span class="token keyword">from</span> <span class="token string">&#39;swr&#39;</span>
<span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">&#39;./navbar&#39;</span>
<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">&#39;./footer&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Layout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token string">&#39;/api/navigation&#39;</span><span class="token punctuation">,</span> fetcher<span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Failed to load<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Navbar links<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>links<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Footer <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,15);function i(d,g){const s=t("Layout");return o(),e("div",null,[k,c("p",null,[n("如果您的整个应用程序只有一个布局，您可以创建一个自定义应用程序并使用该布局包装您的应用程序。由于"),l(s),n("组件在更改页面时被重用，其组件状态将被保留（例如输入值）。")]),u])}const m=p(r,[["render",i],["__file","layouts.html.vue"]]);export{m as default};
