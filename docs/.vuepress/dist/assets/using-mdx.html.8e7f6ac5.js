import{_ as o,r as p,o as c,c as l,b as a,d as n,e as t,a as e}from"./app.1ad2624e.js";const i={},r=e('<h1 id="using-mdx-with-next-js" tabindex="-1"><a class="header-anchor" href="#using-mdx-with-next-js" aria-hidden="true">#</a> Using MDX with Next.js</h1><p>MDX is a superset of markdown that lets you write JSX directly in your markdown files. It is a powerful way to add dynamic interactivity, and embed components within your content, helping you to bring your pages to life.</p><p>Next.js supports MDX through a number of different means, this page will outline some of the ways you can begin integrating MDX into your Next.js project.</p><h2 id="why-use-mdx" tabindex="-1"><a class="header-anchor" href="#why-use-mdx" aria-hidden="true">#</a> Why use MDX?</h2><p>Authoring in markdown is an intuitive way to write content, its terse syntax, once adopted, can enable you to write content that is both readable and maintainable. Because you can use<code>HTML</code>elements in your markdown, you can also get creative when styling your markdown pages.</p><p>However, because markdown is essentially static content, you can&#39;t createdynamiccontent based on user interactivity. Where MDX shines is in its ability to let you create and use your React components directly in the markup. This opens up a wide range of possibilities when composing your sites pages with interactivity in mind.</p><h2 id="mdx-plugins" tabindex="-1"><a class="header-anchor" href="#mdx-plugins" aria-hidden="true">#</a> MDX Plugins</h2>',7),u=a("code",null,"HTML",-1),d={href:"https://mdxjs.com/guides/gfm/",target:"_blank",rel:"noopener noreferrer"},k=e(`<p>Rehype is an<code>HTML</code>processor, also powered by a plugin ecosystem. Similar to remark, these plugins let you manipulate, sanitize, compile and configure all types of data, elements and content.</p><p>To use a plugin from either remark or rehype, you will need to add it to the MDX packages config.</p><h2 id="next-mdx" tabindex="-1"><a class="header-anchor" href="#next-mdx" aria-hidden="true">#</a> @next/mdx</h2><p>The<code>@next/mdx</code>package is configured in the<code>next.config.js</code>file at your projects root.<strong>It sources data from local files</strong>, allowing you to create pages with a<code>.mdx</code>extension, directly in your<code>/pages</code>directory.</p><h3 id="setup-next-mdx-in-next-js" tabindex="-1"><a class="header-anchor" href="#setup-next-mdx-in-next-js" aria-hidden="true">#</a> Setup @next/mdx in Next.js</h3><p>The following steps outline how to setup<code>@next/mdx</code>in your Next.js project:</p><ul><li>Install the required packages:\`\`\`bash npm install @next/mdx @mdx-js/loader @mdx-js/react</li></ul><p><code>- Require the package and configure to support top level\`.mdx\`pages. The following adds the\`options\`object key allowing you to pass in any plugins:</code>js // next.config.js</p><p>const withMDX = require(&#39;@next/mdx&#39;)({ extension: /.mdx?$/, options: { // If you use remark-gfm, you&#39;ll need to use next.config.mjs // as the package is ESM only // https://github.com/remarkjs/remark-gfm#install remarkPlugins: [], rehypePlugins: [], // If you use <code>MDXProvider</code>, uncomment the following line. // providerImportSource: &quot;@mdx-js/react&quot;, }, }) module.exports = withMDX({ // Append the default value with md extensions pageExtensions: [&#39;ts&#39;, &#39;tsx&#39;, &#39;js&#39;, &#39;jsx&#39;, &#39;md&#39;, &#39;mdx&#39;], })</p><p><code>- Create a new MDX page within the\`/pages\`directory:</code>bash</p><ul><li>/pages <ul><li>my-mdx-page.mdx</li></ul></li><li>package.json</li></ul><div class="language-text" data-ext="text"><pre class="language-text"><code>
## Using Components, Layouts and Custom Elements

You can now import a React component directly inside your MDX page:

\`\`\`md
import { MyComponent } from &#39;my-components&#39;

# My MDX page

This is a list in markdown:

- One
- Two
- Three

Checkout my React component:

&lt;MyComponent/&gt;

</code></pre></div><h3 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h3>`,13),m=a("code",null,"@next/mdx",-1),g=a("strong",null,"not",-1),h={href:"https://github.com/jonschlinkert/gray-matter",target:"_blank",rel:"noopener noreferrer"},y=e(`<p>To access page metadata with<code>@next/mdx</code>, you can export a meta object from within the<code>.mdx</code>file:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>export const meta = {
author: &#39;Rich Haines&#39;
}

<span class="token title important"><span class="token punctuation">#</span> My MDX page</span>

</code></pre></div><h3 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> Layouts</h3><p>To add a layout to your MDX page, create a new component and import it into the MDX page. Then you can wrap the MDX page with your layout component:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code>import { MyComponent, MyLayoutComponent } from &#39;my-components&#39;

export const meta = {
author: &#39;Rich Haines&#39;
}

<span class="token title important"><span class="token punctuation">#</span> My MDX Page with a Layout</span>

This is a list in markdown:

<span class="token list punctuation">-</span> One
<span class="token list punctuation">-</span> Two
<span class="token list punctuation">-</span> Three

Checkout my React component:

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span><span class="token punctuation">/&gt;</span></span>

export default ({ children }) =&gt; <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyLayoutComponent</span> <span class="token attr-name">meta</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{meta}</span><span class="token punctuation">&gt;</span></span>{children}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MyLayoutComponent</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="custom-elements" tabindex="-1"><a class="header-anchor" href="#custom-elements" aria-hidden="true">#</a> Custom Elements</h3><p>One of the pleasant aspects of using markdown, is that it maps to native<code>HTML</code>elements, making writing fast, and intuitive:</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> H1 heading</span>

<span class="token title important"><span class="token punctuation">##</span> H2 heading</span>

This is a list in markdown:

<span class="token list punctuation">-</span> One
<span class="token list punctuation">-</span> Two
<span class="token list punctuation">-</span> Three

</code></pre></div><p>The above generates the following<code>HTML</code>:</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>H1 heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>H2 heading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>This is a list in markdown:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p>When you want to style your own elements to give a custom feel to your website or application, you can pass in shortcodes. These are your own custom components that map to<code>HTML</code>elements. To do this you use the<code>MDXProvider</code>and pass a components object as a prop. Each object key in the components object maps to a<code>HTML</code>element name.</p><p>To enable you need to specify<code>providerImportSource: &quot;@mdx-js/react&quot;</code>in<code>next.config.js</code>.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>

<span class="token keyword">const</span> withMDX <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@next/mdx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">providerImportSource</span><span class="token operator">:</span> <span class="token string">&#39;@mdx-js/react&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><p>Then setup the provider in your page</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// pages/index.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> MDXProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@mdx-js/react&#39;</span>
<span class="token keyword">import</span> Image <span class="token keyword">from</span> <span class="token string">&#39;next/image&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Heading<span class="token punctuation">,</span> InlineCode<span class="token punctuation">,</span> Pre<span class="token punctuation">,</span> Table<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my-components&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ResponsiveImage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Image</span></span> <span class="token attr-name">alt</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>alt<span class="token punctuation">}</span></span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>responsive<span class="token punctuation">&quot;</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">img</span><span class="token operator">:</span> ResponsiveImage<span class="token punctuation">,</span>
  <span class="token literal-property property">h1</span><span class="token operator">:</span> Heading<span class="token punctuation">.</span><span class="token constant">H1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">h2</span><span class="token operator">:</span> Heading<span class="token punctuation">.</span><span class="token constant">H2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">p</span><span class="token operator">:</span> Text<span class="token punctuation">,</span>
  <span class="token literal-property property">pre</span><span class="token operator">:</span> Pre<span class="token punctuation">,</span>
  <span class="token literal-property property">code</span><span class="token operator">:</span> InlineCode<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MDXProvider</span></span> <span class="token attr-name">components</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>components<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MDXProvider</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p>If you use it across the site you may want to add the provider to<code>_app.js</code>so all MDX pages pick up the custom element config.</p><h2 id="using-rust-based-mdx-compiler-experimental" tabindex="-1"><a class="header-anchor" href="#using-rust-based-mdx-compiler-experimental" aria-hidden="true">#</a> Using rust based MDX compiler (experimental)</h2><p>Next.js supports a new MDX compiler written in Rust. This compiler is still experimental and is not recommended for production use. To use the new compiler, you need to configure<code>next.config.js</code>when you pass it to<code>withMDX</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">withMDX</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mdxRs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="helpful-links" tabindex="-1"><a class="header-anchor" href="#helpful-links" aria-hidden="true">#</a> Helpful Links</h2>`,20),x={href:"https://mdxjs.com",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.npmjs.com/package/@next/mdx",target:"_blank",rel:"noopener noreferrer"},w=a("code",null,"@next/mdx",-1),b={href:"https://github.com/remarkjs/remark",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/rehypejs/rehype",target:"_blank",rel:"noopener noreferrer"};function v(M,_){const s=p("ExternalLinkIcon");return c(),l("div",null,[r,a("p",null,[n("Internally MDX uses remark and rehype. Remark is a markdown processor powered by a plugins ecosystem. This plugin ecosystem lets you parse code, transform"),u,n("elements, change syntax, extract frontmatter, and more. Using"),a("a",d,[n("remark-gfm to enable GitHub flavored markdown (GFM)"),t(s)]),n("is a popular option.")]),k,a("p",null,[n("Frontmatter is a YAML like key/value pairing that can be used to store data about a page."),m,n("does"),g,n("support frontmatter by default, though there are many solutions for adding frontmatter to your MDX content, such as"),a("a",h,[n("gray-matter"),t(s)]),n(".")]),y,a("ul",null,[a("li",null,[a("a",x,[n("MDX"),t(s)]),n("- "),a("a",f,[w,t(s)]),n("- "),a("a",b,[n("remark"),t(s)]),n("- "),a("a",j,[n("rehype"),t(s)])])])])}const X=o(i,[["render",v],["__file","using-mdx.html.vue"]]);export{X as default};
