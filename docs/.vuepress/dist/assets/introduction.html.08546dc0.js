import{_ as o,r as p,o as c,c as l,b as s,d as n,e as t,a as e}from"./app.1ad2624e.js";const i={},u=e(`<h1 id="next-config-js" tabindex="-1"><a class="header-anchor" href="#next-config-js" aria-hidden="true">#</a> next.config.js</h1><p>For custom advanced configuration of Next.js, you can create a<code>next.config.js</code>or<code>next.config.mjs</code>file in the root of your project directory (next to<code>package.json</code>).</p><p><code>next.config.js</code>is a regular Node.js module, not a JSON file. It gets used by the Next.js server and build phases, and it&#39;s not included in the browser build.</p><p>Take a look at the following<code>next.config.js</code>example:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;next&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* config options here */</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> nextConfig

</code></pre></div>`,5),r={href:"https://nodejs.org/api/esm.html",target:"_blank",rel:"noopener noreferrer"},k=s("code",null,"next.config.mjs",-1),d=e(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;next&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">/* config options here */</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> nextConfig

</code></pre></div><p>You can also use a function:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">phase<span class="token punctuation">,</span> <span class="token punctuation">{</span> defaultConfig <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;next&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span>
   */</span>
  <span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">/* config options here */</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nextConfig
<span class="token punctuation">}</span>

</code></pre></div><p>Since Next.js 12.1.0, you can use an async function:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">phase<span class="token punctuation">,</span> <span class="token punctuation">{</span> defaultConfig <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;next&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span>
   */</span>
  <span class="token keyword">const</span> nextConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">/* config options here */</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> nextConfig
<span class="token punctuation">}</span>

</code></pre></div>`,5),f=s("code",null,"phase",-1),g={href:"https://github.com/vercel/next.js/blob/5e6b008b561caf2710ab7be63320a3d549474a5b/packages/next/shared/lib/constants.ts#L19-L23",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,"next/constants",-1),m=e(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">PHASE_DEVELOPMENT_SERVER</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;next/constants&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">phase<span class="token punctuation">,</span> <span class="token punctuation">{</span> defaultConfig <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>phase <span class="token operator">===</span> <span class="token constant">PHASE_DEVELOPMENT_SERVER</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">/* development only config options here */</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">/* config options for all phases except development here */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,1),x=s("code",null,"next.config.js",-1),y={href:"https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L158",target:"_blank",rel:"noopener noreferrer"},_=s("p",null,"However, none of the configs are required, and it's not necessary to understand what each config does. Instead, search for the features you need to enable or modify in this section and they will show you what to do.",-1),v=s("blockquote",null,[s("p",null,[n("Avoid using new JavaScript features not available in your target Node.js version."),s("code",null,"next.config.js"),n("will not be parsed by Webpack, Babel or TypeScript.")])],-1);function j(b,w){const a=p("ExternalLinkIcon");return c(),l("div",null,[u,s("p",null,[n("If you need"),s("a",r,[n("ECMAScript modules"),t(a)]),n(", you can use"),k,n(":")]),d,s("p",null,[f,n("is the current context in which the configuration is loaded. You can see the"),s("a",g,[n("available phases"),t(a)]),n(". Phases can be imported from"),h,n(":")]),m,s("p",null,[n("The commented lines are the place where you can put the configs allowed by"),x,n(", which are"),s("a",y,[n("defined in this file"),t(a)]),n(".")]),_,v])}const E=o(i,[["render",j],["__file","introduction.html.vue"]]);export{E as default};
