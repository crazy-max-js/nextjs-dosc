import{_ as p,r as o,o as c,c as l,b as n,d as a,e as t,a as e}from"./app.1ad2624e.js";const i={},u=n("h1",{id:"next-link",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#next-link","aria-hidden":"true"},"#"),a(" next/link")],-1),r={class:"custom-container details"},k=n("summary",null,"示例",-1),d={href:"https://github.com/vercel/next.js/tree/canary/examples/hello-world",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/vercel/next.js/tree/canary/examples/active-class-name",target:"_blank",rel:"noopener noreferrer"},g=e(`<blockquote><p>Before moving forward, we recommend you to read<a href="/docs/guide/routing/introduction">Routing Introduction</a>first.</p></blockquote><p>Client-side transitions between routes can be enabled via the<code>Link</code>component exported by<code>next/link</code>.</p><p>For an example, consider a<code>pages</code>directory with the following files:</p><ul><li><code>pages/index.js</code>- <code>pages/about.js</code>- <code>pages/blog/[slug].js</code></li></ul><p>We can have a link to each of these pages like so:</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&#39;next/link&#39;</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Home</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">About Us</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/blog/hello-world<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Blog Post</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home

</code></pre></div><p><code>Link</code>accepts the following props:</p><ul><li><code>href</code>- The path or URL to navigate to. This is the only required prop. It can also be an object, see<a href="/docs/guide/api-reference/next/link#with-url-object">example here</a>- <code>as</code>- Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our<a href="/docs/tag/v9.5.2/api-reference/next/link#dynamic-routes">previous docs</a>to see how it worked. Note: when this path differs from the one provided in<code>href</code>the previous<code>href</code>/<code>as</code>behavior is used as shown in the<a href="/docs/tag/v9.5.2/api-reference/next/link#dynamic-routes">previous docs</a>.- <a href="#if-the-child-is-a-tag"><code>legacyBehavior</code></a>- Changes behavior so that child must be<code>&lt;a&gt;</code>. Defaults to<code>false</code>.- <a href="#if-the-child-is-a-custom-component-that-wraps-an-a-tag"><code>passHref</code></a>- Forces<code>Link</code>to send the<code>href</code>property to its child. Defaults to<code>false</code>- <code>prefetch</code>- Prefetch the page in the background. Defaults to<code>true</code>. Any<code>&lt;Link /&gt;</code>that is in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing<code>prefetch={false}</code>. When<code>prefetch</code>is set to<code>false</code>, prefetching will still occur on hover. Pages using<a href="/docs/guide/basic-features/data-fetching/get-static-props">Static Generation</a>will preload<code>JSON</code>files with the data for faster page transitions. Prefetching is only enabled in production.- <a href="#replace-the-url-instead-of-push"><code>replace</code></a>- Replace the current<code>history</code>state instead of adding a new url into the stack. Defaults to<code>false</code>- <a href="#disable-scrolling-to-the-top-of-the-page"><code>scroll</code></a>- Scroll to the top of the page after a navigation. Defaults to<code>true</code>- <a href="/docs/guide/routing/shallow-routing"><code>shallow</code></a>- Update the path of the current page without rerunning<a href="/docs/guide/basic-features/data-fetching/get-static-props"><code>getStaticProps</code></a>,<a href="/docs/guide/basic-features/data-fetching/get-server-side-props"><code>getServerSideProps</code></a>or<a href="/docs/guide/api-reference/data-fetching/get-initial-props"><code>getInitialProps</code></a>. Defaults to<code>false</code>- <code>locale</code>- The active locale is automatically prepended.<code>locale</code>allows for providing a different locale. When<code>false\`\`href</code>has to include the locale as the default behavior is disabled.</li></ul><h2 id="if-the-route-has-dynamic-segments" tabindex="-1"><a class="header-anchor" href="#if-the-route-has-dynamic-segments" aria-hidden="true">#</a> If the route has dynamic segments</h2><p>There is nothing to do when linking to a<a href="/docs/guide/routing/dynamic-routes">dynamic route</a>, including<a href="/docs/guide/routing/dynamic-routes#catch-all-routes">catch all routes</a>, since Next.js 9.5.3 (for older versions check our<a href="/docs/tag/v9.5.2/api-reference/next/link#dynamic-routes">previous docs</a>). However, it can become quite common and handy to use<a href="/docs/guide/routing/introduction#linking-to-dynamic-paths">interpolation</a>or an<a href="#with-url-object">URL Object</a>to generate the link.</p><p>For example, the dynamic route<code>pages/blog/[slug].js</code>will match the following link:</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&#39;next/link&#39;</span>

<span class="token keyword">function</span> <span class="token function">Posts</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> posts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/blog/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>slug<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Posts

</code></pre></div><h2 id="if-the-child-is-a-tag" tabindex="-1"><a class="header-anchor" href="#if-the-child-is-a-tag" aria-hidden="true">#</a> If the child is <code>&lt;a&gt;</code> tag</h2><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&#39;next/link&#39;</span>

<span class="token keyword">function</span> <span class="token function">Legacy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span> <span class="token attr-name">legacyBehavior</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">About Us</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Legacy

</code></pre></div><h2 id="if-the-child-is-a-custom-component-that-wraps-an-a-tag" tabindex="-1"><a class="header-anchor" href="#if-the-child-is-a-custom-component-that-wraps-an-a-tag" aria-hidden="true">#</a> If the child is a custom component that wraps an <code>&lt;a&gt;</code> tag</h2>`,15),f=n("code",null,"Link",-1),m=n("code",null,"<a>",-1),y=n("code",null,"passHref",-1),w=n("code",null,"Link",-1),x={href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"<a>",-1),v=n("code",null,"href",-1),_=n("a",{href:"/docs/guide/basic-features/eslint#eslint-plugin"},"ESLint",-1),L=n("code",null,"next/link-passhref",-1),j=n("code",null,"passHref",-1),q=e(`<div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&#39;next/link&#39;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&#39;styled-components&#39;</span>

<span class="token comment">// This creates a custom component that wraps an &lt;a&gt; tag</span>
<span class="token keyword">const</span> RedLink <span class="token operator">=</span> styled<span class="token punctuation">.</span>a<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  color: red;
</span><span class="token template-punctuation string">\`</span></span>

<span class="token keyword">function</span> <span class="token function">NavLink</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> href<span class="token punctuation">,</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>href<span class="token punctuation">}</span></span> <span class="token attr-name">passHref</span> <span class="token attr-name">legacyBehavior</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RedLink</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RedLink</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> NavLink

</code></pre></div>`,1),R={href:"https://emotion.sh/",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"@jsx jsx",-1),U=n("code",null,"passHref",-1),H=n("code",null,"<a>",-1),N=n("code",null,"onClick",-1),B=n("h2",{id:"if-the-child-is-a-functional-component",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#if-the-child-is-a-functional-component","aria-hidden":"true"},"#"),a(" If the child is a functional component")],-1),T=n("code",null,"Link",-1),A=n("code",null,"passHref",-1),P=n("code",null,"legacyBehavior",-1),D={href:"https://reactjs.org/docs/react-api.html#reactforwardref",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"React.forwardRef",-1),S=e(`<div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&#39;next/link&#39;</span>

<span class="token comment">// \`onClick\`, \`href\`, and \`ref\` need to be passed to the DOM element</span>
<span class="token comment">// for proper handling</span>
<span class="token keyword">const</span> MyButton <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> onClick<span class="token punctuation">,</span> href <span class="token punctuation">}</span><span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>href<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Click Me
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span> <span class="token attr-name">passHref</span> <span class="token attr-name">legacyBehavior</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyButton</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home

</code></pre></div><h2 id="with-url-object" tabindex="-1"><a class="header-anchor" href="#with-url-object" aria-hidden="true">#</a> With URL Object</h2><p><code>Link</code>can also receive a URL object and it will automatically format it to create the URL string. Here&#39;s how to do it:</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&#39;next/link&#39;</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span>
          <span class="token attr-name">href</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;test&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">&gt;</span></span><span class="token plain-text">
          About us
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span>
          <span class="token attr-name">href</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&#39;/blog/[slug]&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">slug</span><span class="token operator">:</span> <span class="token string">&#39;my-post&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">&gt;</span></span><span class="token plain-text">
          Blog Post
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home

</code></pre></div><p>The above example has a link to:</p><ul><li>A predefined route:<code>/about?name=test</code>- A<a href="/docs/guide/routing/dynamic-routes">dynamic route</a>:<code>/blog/my-post</code></li></ul>`,6),M={href:"https://nodejs.org/api/url.html#url_url_strings_and_url_objects",target:"_blank",rel:"noopener noreferrer"},W=e(`<h2 id="replace-the-url-instead-of-push" tabindex="-1"><a class="header-anchor" href="#replace-the-url-instead-of-push" aria-hidden="true">#</a> Replace the URL instead of push</h2><p>The default behavior of the<code>Link</code>component is to<code>push</code>a new URL into the<code>history</code>stack. You can use the<code>replace</code>prop to prevent adding a new entry, as in the following example:</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span> <span class="token attr-name">replace</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  About us
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="disable-scrolling-to-the-top-of-the-page" tabindex="-1"><a class="header-anchor" href="#disable-scrolling-to-the-top-of-the-page" aria-hidden="true">#</a> Disable scrolling to the top of the page</h2><p>The default behavior of<code>Link</code>is to scroll to the top of the page. When there is a hash defined it will scroll to the specific id, like a normal<code>&lt;a&gt;</code>tag. To prevent scrolling to the top / hash<code>scroll={false}</code>can be added to<code>Link</code>:</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/#hashid<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scroll</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  Disables scrolling to the top
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="with-next-js-13-middleware" tabindex="-1"><a class="header-anchor" href="#with-next-js-13-middleware" aria-hidden="true">#</a> With Next.js 13 Middleware</h2><p>It&#39;s common to use<a href="/docs/guide/advanced-features/middleware">Middleware</a>for authentication or other purposes that involve rewriting the user to a different page. In order for the<code>&lt;Link /&gt;</code>component to properly prefetch links with rewrites via Middleware, you need to tell Next.js both the URL to display and the URL to prefetch. This is required to avoid un-necessary fetches to middleware to know the correct route to prefetch.</p><p>For example, if you have want to serve a<code>/dashboard</code>route that has authenticated and visitor views, you may add something similar to the following in your Middleware to redirect the user to the correct page:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// middleware.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nextUrl <span class="token operator">=</span> req<span class="token punctuation">.</span>nextUrl
  <span class="token keyword">if</span> <span class="token punctuation">(</span>nextUrl<span class="token punctuation">.</span>pathname <span class="token operator">===</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span>authToken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">rewrite</span><span class="token punctuation">(</span><span class="token string">&#39;/auth/dashboard&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">rewrite</span><span class="token punctuation">(</span><span class="token string">&#39;/public/dashboard&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>In this case, you would want to use the following code in your<code>&lt;Link /&gt;</code>component (inside<code>pages/</code>):</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/index.js</span>
<span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&#39;next/link&#39;</span>
<span class="token keyword">import</span> useIsAuthed <span class="token keyword">from</span> <span class="token string">&#39;./hooks/useIsAuthed&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isAuthed <span class="token operator">=</span> <span class="token function">useIsAuthed</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> path <span class="token operator">=</span> isAuthed <span class="token operator">?</span> <span class="token string">&#39;/auth/dashboard&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Link <span class="token keyword">as</span><span class="token operator">=</span><span class="token string">&quot;/dashboard&quot;</span> href<span class="token operator">=</span><span class="token punctuation">{</span>path<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      Dashboard
    <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><blockquote><p>**Note:**If you&#39;re using<a href="/docs/guide/routing/dynamic-routes">Dynamic Routes</a>, you&#39;ll need to adapt your<code>as</code>and<code>href</code>props. For example, if you have a Dynamic Route like<code>/dashboard/[user]</code>that you want to present differently via middleware, you would write:<code>&lt;Link href={{ pathname: &#39;/dashboard/authed/[user]&#39;, query: { user: username } }} as=&quot;/dashboard/[user]&quot;&gt;Profile&lt;/Link&gt;</code>.</p></blockquote>`,13);function O(E,F){const s=o("ExternalLinkIcon");return c(),l("div",null,[u,n("details",r,[k,n("ul",null,[n("li",null,[n("a",d,[a("Hello World"),t(s)]),a("- "),n("a",h,[a("Active className on Link"),t(s)])])])]),g,n("p",null,[a("If the child of"),f,a("is a custom component that wraps an"),m,a("tag, you must add"),y,a("to"),w,a(". This is necessary if you’re using libraries like"),n("a",x,[a("styled-components"),t(s)]),a(". Without this, the"),b,a("tag will not have the"),v,a("attribute, which hurts your site's accessibility and might affect SEO. If you're using"),_,a(", there is a built-in rule"),L,a("to ensure correct usage of"),j,a(".")]),q,n("ul",null,[n("li",null,[a("If you’re using"),n("a",R,[a("emotion"),t(s)]),a("’s JSX pragma feature ("),I,a("), you must use"),U,a("even if you use an"),H,a("tag directly.- The component should support"),N,a("property to trigger navigation correctly")])]),B,n("p",null,[a("If the child of"),T,a("is a functional component, in addition to using"),A,a("and"),P,a(", you must wrap the component in"),n("a",D,[C,t(s)]),a(":")]),S,n("p",null,[a("You can use every property as defined in the"),n("a",M,[a("Node.js URL module documentation"),t(s)]),a(".")]),W])}const J=p(i,[["render",O],["__file","link.html.vue"]]);export{J as default};
