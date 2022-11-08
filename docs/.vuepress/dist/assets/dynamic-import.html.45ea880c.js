import{_ as p,r as o,o as c,c as l,b as n,d as s,e as t,a as e}from"./app.1ad2624e.js";const i={},u=n("h1",{id:"dynamic-import",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dynamic-import","aria-hidden":"true"},"#"),s(" Dynamic Import")],-1),r={class:"custom-container details"},k=n("summary",null,"示例",-1),d={href:"https://github.com/vercel/next.js/tree/canary/examples/with-dynamic-import",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,[s("Next.js supports lazy loading external libraries with"),n("code",null,"import()"),s("and React components with"),n("code",null,"next/dynamic"),s(". Deferred loading helps improve the initial loading performance by decreasing the amount of JavaScript necessary to render the page. Components or libraries are only imported and included in the JavaScript bundle when they're used.")],-1),h=n("code",null,"next/dynamic",-1),g={href:"https://reactjs.org/docs/code-splitting.html#reactlazy",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"React.lazy",-1),f={href:"https://reactjs.org/docs/react-api.html#reactsuspense",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"Suspense",-1),w=e(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>By using<code>next/dynamic</code>, the header component will not be included in the page&#39;s initial JavaScript bundle. The page will render the Suspense<code>fallback</code>first, followed by the<code>Header</code>component when the<code>Suspense</code>boundary is resolved.</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> dynamic <span class="token keyword">from</span> <span class="token string">&#39;next/dynamic&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">const</span> DynamicHeader <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/header&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">suspense</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Loading...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DynamicHeader</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><blockquote><p><strong>Note</strong>: In<code>import(&#39;path/to/component&#39;)</code>, the path must be explicitly written. It can&#39;t be a template string nor a variable. Furthermore the<code>import()</code>has to be inside the<code>dynamic()</code>call for Next.js to be able to match webpack bundles / module ids to the specific<code>dynamic()</code>call and preload them before rendering.<code>dynamic()</code>can&#39;t be used inside of React rendering as it needs to be marked in the top level of the module for preloading to work, similar to<code>React.lazy</code>.</p></blockquote><h2 id="with-named-exports" tabindex="-1"><a class="header-anchor" href="#with-named-exports" aria-hidden="true">#</a> With named exports</h2>`,5),b={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/tc39/proposal-dynamic-import#example",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"import()",-1),j=e(`<div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// components/hello.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Hello!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// pages/index.js</span>
<span class="token keyword">import</span> dynamic <span class="token keyword">from</span> <span class="token string">&#39;next/dynamic&#39;</span>

<span class="token keyword">const</span> DynamicComponent <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mod</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> mod<span class="token punctuation">.</span>Hello<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

</code></pre></div><h2 id="with-no-ssr" tabindex="-1"><a class="header-anchor" href="#with-no-ssr" aria-hidden="true">#</a> With no SSR</h2><p>To dynamically load a component on the client side, you can use the<code>ssr</code>option to disable server-rendering. This is useful if an external dependency or component relies on browser APIs like<code>window</code>.</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> dynamic <span class="token keyword">from</span> <span class="token string">&#39;next/dynamic&#39;</span>

<span class="token keyword">const</span> DynamicHeader <span class="token operator">=</span> <span class="token function">dynamic</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../components/header&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">ssr</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="with-external-libraries" tabindex="-1"><a class="header-anchor" href="#with-external-libraries" aria-hidden="true">#</a> With external libraries</h2><p>This example uses the external library<code>fuse.js</code>for fuzzy search. The module is only loaded in the browser after the user types in the search input.</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">const</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Tim&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Joe&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Bel&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Lee&#39;</span><span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>results<span class="token punctuation">,</span> setResults<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Search<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget
          <span class="token comment">// Dynamically load fuse.js</span>
          <span class="token keyword">const</span> Fuse <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;fuse.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default
          <span class="token keyword">const</span> fuse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fuse</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span>

          <span class="token function">setResults</span><span class="token punctuation">(</span>fuse<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Results: </span><span class="token punctuation">{</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>results<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div>`,7);function S(R,T){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("details",r,[k,n("ul",null,[n("li",null,[n("a",d,[s("Dynamic Import"),t(a)])])])]),m,n("p",null,[h,s("is an extension of"),n("a",g,[y,t(a)]),s(". When used in combination with"),n("a",f,[x,t(a)]),s(", components can delay hydration until the Suspense boundary is resolved.")]),w,n("p",null,[s("To dynamically import a named export, you can return it from the"),n("a",b,[s("Promise"),t(a)]),s("returned by"),n("a",_,[v,t(a)]),s(":")]),j])}const D=p(i,[["render",S],["__file","dynamic-import.html.vue"]]);export{D as default};
