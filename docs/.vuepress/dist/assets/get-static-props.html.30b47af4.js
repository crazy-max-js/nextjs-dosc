import{_ as p,r as o,o as c,c as l,b as n,d as s,e as t,a as e}from"./app.1ad2624e.js";const r={},i=n("h1",{id:"getstaticprops",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getstaticprops","aria-hidden":"true"},"#"),s(" getStaticProps")],-1),u=n("details",{class:"custom-container details"},[n("summary",null,"示例"),n("p",null,"Version History")],-1),k=n("strong",null,"Note",-1),d=n("code",null,"app/",-1),g={href:"https://beta.nextjs.org/docs/data-fetching/fundamentals",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"use",-1),y=n("code",null,"fetch",-1),f={href:"https://beta.nextjs.org/docs/upgrade-guide",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"app/",-1),m=e(`<p>Exporting a function called<code>getStaticProps</code>will pre-render a page at build time using the props returned from the function:</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// will be passed to the page component as props</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>You can import modules in top-level scope for use in<code>getStaticProps</code>. Imports used will<strong>not be bundled for the client-side</strong>. This means you can write<strong>server-side code directly in<code>getStaticProps</code></strong>, including fetching data from your database.</p><h2 id="context-parameter" tabindex="-1"><a class="header-anchor" href="#context-parameter" aria-hidden="true">#</a> Context parameter</h2><p>The<code>context</code>parameter is an object containing the following keys:</p><ul><li><code>params</code>contains the route parameters for pages using<a href="/docs/guide/routing/dynamic-routes">dynamic routes</a>. For example, if the page name is<code>[id].js</code>, then<code>params</code>will look like<code>{ id: ... }</code>. You should use this together with<code>getStaticPaths</code>, which we’ll explain later.- <code>preview</code>is<code>true</code>if the page is in the<a href="/docs/guide/advanced-features/preview-mode">Preview Mode</a>and<code>undefined</code>otherwise.- <code>previewData</code>contains the<a href="/docs/guide/advanced-features/preview-mode">preview</a>data set by<code>setPreviewData</code>.- <code>locale</code>contains the active locale (if enabled).- <code>locales</code>contains all supported locales (if enabled).- <code>defaultLocale</code>contains the configured default locale (if enabled).</li></ul><h2 id="getstaticprops-return-values" tabindex="-1"><a class="header-anchor" href="#getstaticprops-return-values" aria-hidden="true">#</a> getStaticProps return values</h2><p>The<code>getStaticProps</code>function should return an object containing either<code>props</code>,<code>redirect</code>, or<code>notFound</code>followed by an<strong>optional</strong><code>revalidate</code>property.</p><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3>`,9),b=n("code",null,"props",-1),x={href:"https://developer.mozilla.org/en-US/docs/Glossary/Serialization",target:"_blank",rel:"noopener noreferrer"},v={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"JSON.stringify",-1),_=e(`<div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Next.js is awesome</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// will be passed to the page component as props</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="revalidate" tabindex="-1"><a class="header-anchor" href="#revalidate" aria-hidden="true">#</a> revalidate</h3><p>The<code>revalidate</code>property is the amount in seconds after which a page re-generation can occur (defaults to<code>false</code>or no revalidation).</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// This function gets called at build time on server-side.</span>
<span class="token comment">// It may be called again, on a serverless function, if</span>
<span class="token comment">// revalidation is enabled and a new request comes in</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://.../posts&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      posts<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// Next.js will attempt to re-generate the page:</span>
    <span class="token comment">// - When a request comes in</span>
    <span class="token comment">// - At most once every 10 seconds</span>
    <span class="token literal-property property">revalidate</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// In seconds</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Learn more about<a href="/docs/guide/basic-features/data-fetching/incremental-static-regeneration">Incremental Static Regeneration</a>.</p><p>The cache status of a page leveraging ISR can be determined by reading the value of the<code>x-nextjs-cache</code>response header. The possible values are the following:</p><ul><li><code>MISS</code>- the path is not in the cache (occurs at most once, on the first visit)- <code>STALE</code>- the path is in the cache but exceeded the revalidate time so it will be updated in the background- <code>HIT</code>- the path is in the cache and has not exceeded the revalidate time</li></ul><h3 id="notfound" tabindex="-1"><a class="header-anchor" href="#notfound" aria-hidden="true">#</a> notFound</h3><p>The<code>notFound</code>boolean allows the page to return a<code>404</code>status and<a href="/docs/guide/advanced-features/custom-error-page#404-page">404 Page</a>. With<code>notFound: true</code>, the page will return a<code>404</code>even if there was a successfully generated page before. This is meant to support use cases like user-generated content getting removed by its author. Note,<code>notFound</code>follows the same<code>revalidate</code>behavior<a href="/docs/guide/api-reference/data-fetching/get-static-props#revalidate">described here</a>.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://.../data</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">notFound</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// will be passed to the page component as props</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><blockquote><p><strong>Note</strong>:<code>notFound</code>is not needed for<a href="/docs/guide/api-reference/data-fetching/get-static-paths#fallback-false"><code>fallback: false</code></a>mode as only paths returned from<code>getStaticPaths</code>will be pre-rendered.</p></blockquote><h3 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> redirect</h3><p>The<code>redirect</code>object allows redirecting to internal or external resources. It should match the shape of<code>{ destination: string, permanent: boolean }</code>.</p><p>In some rare cases, you might need to assign a custom status code for older<code>HTTP</code>clients to properly redirect. In these cases, you can use the<code>statusCode</code>property instead of the<code>permanent</code>property,<strong>but not both</strong>. You can also set<code>basePath: false</code>similar to redirects in<code>next.config.js</code>.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">permanent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// statusCode: 301</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// will be passed to the page component as props</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>If the redirects are known at build-time, they should be added in<a href="/docs/guide/api-reference/next.config.js/redirects"><code>next.config.js</code></a>instead.</p><h2 id="reading-files-use-process-cwd" tabindex="-1"><a class="header-anchor" href="#reading-files-use-process-cwd" aria-hidden="true">#</a> Reading files: Use process.cwd()</h2><p>Files can be read directly from the filesystem in<code>getStaticProps</code>.</p><p>In order to do so you have to get the full path to a file.</p><p>Since Next.js compiles your code into a separate directory you can&#39;t use<code>__dirname</code>as the path it returns will be different from the pages directory.</p><p>Instead you can use<code>process.cwd()</code>which gives you the directory where Next.js is being executed.</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> promises <span class="token keyword">as</span> fs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>

<span class="token comment">// posts will be populated at build time by getStaticProps()</span>
<span class="token keyword">function</span> <span class="token function">Blog</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> posts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>filename<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>content<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// This function gets called at build time on server-side.</span>
<span class="token comment">// It won&#39;t be called on client-side, so you can even do</span>
<span class="token comment">// direct database queries.</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> postsDirectory <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;posts&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> filenames <span class="token operator">=</span> <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span>postsDirectory<span class="token punctuation">)</span>

  <span class="token keyword">const</span> posts <span class="token operator">=</span> filenames<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>postsDirectory<span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
    <span class="token keyword">const</span> fileContents <span class="token operator">=</span> <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// Generally you would parse/transform the contents</span>
    <span class="token comment">// For example you can transform markdown to HTML here</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      filename<span class="token punctuation">,</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> fileContents<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// By returning { props: { posts } }, the Blog component</span>
  <span class="token comment">// will receive \`posts\` as a prop at build time</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">posts</span><span class="token operator">:</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Blog

</code></pre></div><h2 id="getstaticprops-with-typescript" tabindex="-1"><a class="header-anchor" href="#getstaticprops-with-typescript" aria-hidden="true">#</a> getStaticProps with TypeScript</h2><p>The type of<code>getStaticProps</code>can be specified using<code>GetStaticProps</code>from<code>next</code>:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> GetStaticProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">Post</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  author<span class="token operator">:</span> <span class="token builtin">string</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getStaticProps<span class="token operator">:</span> GetStaticProps<span class="token operator">&lt;</span><span class="token punctuation">{</span> posts<span class="token operator">:</span> Post<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>
  context
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://.../posts&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> posts<span class="token operator">:</span> Post<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
      posts<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>If you want to get inferred typings for your props, you can use<code>InferGetStaticPropsType&lt;typeof getStaticProps&gt;</code>:</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> InferGetStaticPropsType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> GetStaticProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">Post</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  author<span class="token operator">:</span> <span class="token builtin">string</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getStaticProps<span class="token operator">:</span> GetStaticProps<span class="token operator">&lt;</span><span class="token punctuation">{</span> posts<span class="token operator">:</span> Post<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://.../posts&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> posts<span class="token operator">:</span> Post<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
      posts<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Blog</span><span class="token punctuation">(</span><span class="token punctuation">{</span> posts <span class="token punctuation">}</span><span class="token operator">:</span> InferGetStaticPropsType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> getStaticProps<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// will resolve posts to type Post[]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Blog

</code></pre></div><p>Implicit typing for<code>getStaticProps</code>will also work properly:</p><div class="language-tsx" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> InferGetStaticPropsType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next&#39;</span>

<span class="token keyword">type</span> <span class="token class-name">Post</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  author<span class="token operator">:</span> <span class="token builtin">string</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getStaticProps</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://.../posts&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> posts<span class="token operator">:</span> Post<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
      posts<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Blog</span><span class="token punctuation">(</span><span class="token punctuation">{</span> posts <span class="token punctuation">}</span><span class="token operator">:</span> InferGetStaticPropsType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> getStaticProps<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// will resolve posts to type Post[]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Blog

</code></pre></div><h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2><p>For more information on what to do next, we recommend the following sections:</p>`,31);function S(j,T){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,u,n("blockquote",null,[n("p",null,[k,s(": Next.js 13 introduces the"),d,s("directory (beta). This new directory has support for"),n("a",g,[s("colocated data fetching"),t(a)]),s("at the component level, using the new React"),h,s("hook and an extended"),y,s("Web API."),n("a",f,[s("Learn more about incrementally adopting"),w,t(a)]),s(".")])]),m,n("p",null,[s("The"),b,s("object is a key-value pair, where each value is received by the page component. It should be a"),n("a",x,[s("serializable object"),t(a)]),s("so that any props passed, could be serialized with"),n("a",v,[P,t(a)]),s(".")]),_])}const N=p(r,[["render",S],["__file","get-static-props.html.vue"]]);export{N as default};
