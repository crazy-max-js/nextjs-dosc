import{_ as o,r as p,o as c,c as l,b as n,d as a,e,a as s}from"./app.1ad2624e.js";const r={},i=s(`<h1 id="optimizing-fonts" tabindex="-1"><a class="header-anchor" href="#optimizing-fonts" aria-hidden="true">#</a> Optimizing Fonts</h1><p><a href="/docs/guide/api-reference/next/font"><strong><code>@next/font</code></strong></a>will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance.</p><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p><code>@next/font</code>includes<strong>built-in automatic self-hosting</strong>foranyfont file. This means you can optimally load web fonts with zero layout shift, thanks to the underlying CSS<code>size-adjust</code>property used.</p><p>This new font system also allows you to conveniently use all Google Fonts with performance and privacy in mind. CSS and font files are downloaded at build time and self-hosted with the rest of your static assets.<strong>No requests are sent to Google by the browser.</strong></p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>To get started, install<code>@next/font</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @next/font

</code></pre></div><h3 id="google-fonts" tabindex="-1"><a class="header-anchor" href="#google-fonts" aria-hidden="true">#</a> Google Fonts</h3><p>Automatically self-host any Google Font. Fonts are included in the deployment and served from the same domain as your deployment.<strong>No requests are sent to Google by the browser.</strong></p>`,10),u=n("code",null,"@next/font/google",-1),d={href:"https://fonts.google.com/variablefonts",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"variable fonts",-1),f=s(`<p>To use the font in all your pages, add it to<a href="/docs/guide/advanced-features/custom-app"><code>_app.js</code>file</a>under<code>/pages</code>as shown below:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/_app.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Inter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@next/font/google&#39;</span>

<span class="token comment">// If loading a variable font, you don&#39;t need to specify the font weight</span>
<span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main className<span class="token operator">=</span><span class="token punctuation">{</span>inter<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p>If you can&#39;t use a variable font, you will<strong>need to specify a weight</strong>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/_app.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Roboto <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@next/font/google&#39;</span>

<span class="token keyword">const</span> roboto <span class="token operator">=</span> <span class="token function">Roboto</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token string">&#39;400&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>main className<span class="token operator">=</span><span class="token punctuation">{</span>roboto<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h4 id="apply-the-font-in-head" tabindex="-1"><a class="header-anchor" href="#apply-the-font-in-head" aria-hidden="true">#</a> Apply the font in <code>&lt;head&gt;</code></h4><p>You can also use the font without a wrapper and<code>className</code>by injecting it inside the<code>&lt;head&gt;</code>as follows:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/_app.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Inter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@next/font/google&#39;</span>

<span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>style jsx global<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        html {
          font-family: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>inter<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontFamily<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
        }
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h4 id="single-page-usage" tabindex="-1"><a class="header-anchor" href="#single-page-usage" aria-hidden="true">#</a> Single page usage</h4><p>To use the font on a single page, add it to the specific page as shown below:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Inter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@next/font/google&#39;</span>

<span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>inter<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h4 id="specifying-a-subset" tabindex="-1"><a class="header-anchor" href="#specifying-a-subset" aria-hidden="true">#</a> Specifying a subset</h4>`,11),g={href:"https://fonts.google.com/knowledge/glossary/subsetting",target:"_blank",rel:"noopener noreferrer"},h=n("a",{href:"/docs/guide/api-reference/next/font#preload"},[n("code",null,"preload")],-1),m=s(`<p>This can be done in 2 ways:</p><ul><li>On a font per font basis by adding it to the function call\`\`\`js // pages/_app.js const inter = Inter({ subsets: [&#39;latin&#39;] })</li></ul><p>\`\`\`- Globally for all your fonts in your\`next.config.js\`\`\`\`js // next.config.js module.exports = { experimental: { fontLoaders: [ { loader: &#39;@next/font/google&#39;, options: { subsets: [&#39;latin&#39;] } }, ], }, }</p><div class="language--" data-ext="-"><pre class="language--"><code>
View the[Font API Reference](/docs/api-reference/next/font#nextfontgoogle)for more information.

### Local Fonts

Import\`@next/font/local\`and specify the\`src\`of your local font file. We recommend using[**variable fonts**](https://fonts.google.com/variablefonts)for the best performance and flexibility.

\`\`\`js
// pages/_app.js
import localFont from &#39;@next/font/local&#39;

// Font files can be colocated inside of \`pages\`
const myFont = localFont({ src: &#39;./my-font.woff2&#39; })

export default function MyApp({ Component, pageProps }) {
  return (
    &lt;main className={myFont.className}&gt;
      &lt;Component {...pageProps} /&gt;
    &lt;/main&gt;
  )
}

</code></pre></div><p>View the<a href="/docs/guide/api-reference/next/font#nextfontlocal">Font API Reference</a>for more information.</p><h2 id="preloading" tabindex="-1"><a class="header-anchor" href="#preloading" aria-hidden="true">#</a> Preloading</h2><p>When a font function is called on a page of your site, it is not globally available and preloaded on all routes. Rather, the font is only preloaded on the related route/s based on the type of file where it is used:</p><ul><li>if it&#39;s a<a href="/docs/guide/basic-features/pages">unique page</a>, it is preloaded on the unique route for that page- if it&#39;s in the<a href="/docs/guide/advanced-features/custom-app">custom App</a>, it is preloaded on all the routes of the site under<code>/pages</code></li></ul><h2 id="reusing-fonts" tabindex="-1"><a class="header-anchor" href="#reusing-fonts" aria-hidden="true">#</a> Reusing fonts</h2><p>Every time you call the<code>localFont</code>or Google font function, that font is hosted as one instance in your application. Therefore, if you load the same font function in multiple files, multiple instances of the same font are hosted. In this situation, it is recommended to do the following:</p><ul><li>Call the font loader function in one shared file- Export it as a constant- Import the constant in each file where you would like to use this font</li></ul>`,11);function y(w,b){const t=p("ExternalLinkIcon");return c(),l("div",null,[i,n("p",null,[a("Import the font you would like to use from"),u,a("as a function. We recommend using"),n("a",d,[k,e(t)]),a("for the best performance and flexibility.")]),f,n("p",null,[a("Google Fonts are automatically"),n("a",g,[a("subset"),e(t)]),a(". This reduces the size of the font file and improves performance. You'll need to define which of these subsets you want to preload. Failing to specify any subsets while"),h,a("is true will result in a warning.")]),m])}const v=o(r,[["render",y],["__file","font-optimization.html.vue"]]);export{v as default};
