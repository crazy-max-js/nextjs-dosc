import{_ as n,o as s,c as a,a as t}from"./app.1ad2624e.js";const p={},o=t(`<h1 id="get-static-props" tabindex="-1"><a class="header-anchor" href="#get-static-props" aria-hidden="true">#</a> get-static-props</h1><p>如果您从页面导出名为 <code>getStaticProps</code>（静态站点生成）的函数，Next.js 将使用 <code>getStaticProps</code> 返回的道具在构建时预渲染此页面。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// will be passed to the page component as props</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>请注意，无论呈现类型如何，任何 <code>props</code> 都将传递给页面组件，并且可以在初始 HTML 中在客户端查看。 这是为了让页面正确补水。 确保您没有在 <code>props</code> 中传递任何不应在客户端上可用的敏感信息。</p></blockquote><h2 id="什么时候应该使用-getstaticprops" tabindex="-1"><a class="header-anchor" href="#什么时候应该使用-getstaticprops" aria-hidden="true">#</a> 什么时候应该使用 getStaticProps？</h2><p>在以下情况下，您应该使用 getStaticProps：</p><ul><li>呈现页面所需的数据在用户请求之前的构建时可用</li><li>数据来自无头 CMS</li><li>页面必须预先渲染（用于 SEO）并且速度非常快——getStaticProps生成HTML和JSON文件，这两者都可以被 CDN 缓存以提高性能</li><li>数据可以公开缓存（不是特定于用户的）。在某些特定情况下，可以通过使用中间件重写路径来绕过这种情况。</li></ul><h2 id="getstaticprops-什么时候运行" tabindex="-1"><a class="header-anchor" href="#getstaticprops-什么时候运行" aria-hidden="true">#</a> getStaticProps 什么时候运行</h2><p>getStaticProps始终在服务器上运行，从不在客户端上运行。您可以使用此工具验证内部编写的代码getStaticProps是否已从客户端捆绑包中删除。</p><ul><li>getStaticProps总是在运行<code>next build</code></li><li>getStaticProps使用时在后台运行fallback: true</li><li>getStaticProps使用时在初始渲染之前调用fallback: blocking</li><li>getStaticProps使用时在后台运行revalidate</li><li>getStaticProps使用时在后台按需运行revalidate()</li></ul><p>当与Incremental Static Regeneration结合使用时，getStaticProps将在后台运行，同时对陈旧的页面进行重新验证，并将新页面提供给浏览器。</p><p>getStaticProps无法访问传入请求（例如查询参数或 HTTP 标头），因为它生成静态 HTML。如果您需要访问页面请求，请考虑使用中间件以及getStaticProps.</p><h2 id="使用-getstaticprops-从-cms-获取数据" tabindex="-1"><a class="header-anchor" href="#使用-getstaticprops-从-cms-获取数据" aria-hidden="true">#</a> 使用 getStaticProps 从 CMS 获取数据</h2><p>以下示例显示了如何从 CMS 获取博客文章列表。</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// posts will be populated at build time by getStaticProps()</span>
<span class="token keyword">function</span> <span class="token function">Blog</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> posts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// This function gets called at build time on server-side.</span>
<span class="token comment">// It won&#39;t be called on client-side, so you can even do</span>
<span class="token comment">// direct database queries.</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Call an external API endpoint to get posts.</span>
  <span class="token comment">// You can use any data fetching library</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://.../posts&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// By returning { props: { posts } }, the Blog component</span>
  <span class="token comment">// will receive \`posts\` as a prop at build time</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      posts<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Blog
</code></pre></div><p>getStaticPropsAPI 参考涵盖了所有可以与getStaticProps.</p><h2 id="直接写服务端代码" tabindex="-1"><a class="header-anchor" href="#直接写服务端代码" aria-hidden="true">#</a> 直接写服务端代码</h2><p>由于getStaticProps只在服务器端运行，它永远不会在客户端运行。它甚至不会包含在浏览器的 JS 包中，因此您可以编写直接数据库查询，而无需将它们发送到浏览器。</p><p>这意味着您可以直接在.getStaticPropsgetStaticProps</p><p>举个例子。API 路由用于从 CMS 获取一些数据。然后直接从 调用该 API 路由getStaticProps。这会产生额外的调用，从而降低性能。相反，从 CMS 获取数据的逻辑可以通过使用lib/目录来共享。然后它可以与 共享getStaticProps。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// lib/load-posts.js</span>

<span class="token comment">// The following function is shared</span>
<span class="token comment">// with getStaticProps and API routes</span>
<span class="token comment">// from a \`lib/\` directory</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">loadPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Call an external API endpoint to get posts</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://.../posts/&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> data
<span class="token punctuation">}</span>

<span class="token comment">// pages/blog.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> loadPosts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../lib/load-posts&#39;</span>

<span class="token comment">// This function runs only on the server side</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Instead of fetching your \`/api\` route you can call the same</span>
  <span class="token comment">// function directly in \`getStaticProps\`</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// Props returned will be passed to the page component</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> posts <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>或者，如果您不使用 API 路由来获取数据，则可以直接使用fetch()API来获取数据。getStaticProps</p><p>要验证 Next.js 从客户端包中消除了什么，您可以使用next-code-elimination tool。</p><h2 id="静态生成-html-和-json" tabindex="-1"><a class="header-anchor" href="#静态生成-html-和-json" aria-hidden="true">#</a> 静态生成 HTML 和 JSON</h2><p>当getStaticProps在构建时预渲染页面时，除了页面 HTML 文件之外，Next.js 还会生成一个 JSON 文件，其中包含 running 的结果getStaticProps。</p><p>此 JSON 文件将用于通过next/link或的客户端路由next/router。当您导航到使用 预渲染的页面时getStaticProps，Next.js 会获取此 JSON 文件（在构建时预先计算）并将其用作页面组件的道具。这意味着客户端页面转换不会调用getStaticProps，因为仅使用导出的 JSON。</p><p>使用增量静态生成时，getStaticProps将在后台执行以生成客户端导航所需的 JSON。您可能会以针对同一页面发出多个请求的形式看到这一点，但是，这是有意为之，对最终用户的性能没有影响。</p><h2 id="我在哪里可以使用-getstaticprops" tabindex="-1"><a class="header-anchor" href="#我在哪里可以使用-getstaticprops" aria-hidden="true">#</a> 我在哪里可以使用 getStaticProps</h2><p>getStaticProps只能从页面导出。您不能从非页面文件、_app、_document或_error.</p><p>这种限制的原因之一是 React 需要在呈现页面之前拥有所有必需的数据。</p><p>此外，您必须将 export作为独立功能使用——如果您将其添加为页面组件的属性，getStaticProps它将不起作用。getStaticProps</p><blockquote><p>注意：如果您创建了自定义应用程序，请确保将 传递pageProps给页面组件，如链接文档中所示，否则道具将为空。</p></blockquote><h2 id="在开发中的每个请求上运行" tabindex="-1"><a class="header-anchor" href="#在开发中的每个请求上运行" aria-hidden="true">#</a> 在开发中的每个请求上运行</h2><p>在开发中 ( next dev)，getStaticProps将在每个请求上调用。</p><h2 id="预览模式" tabindex="-1"><a class="header-anchor" href="#预览模式" aria-hidden="true">#</a> 预览模式</h2><p>您可以使用Preview Mode暂时绕过静态生成并在请求时而不是构建时呈现页面。例如，您可能正在使用无头 CMS，并希望在草稿发布之前对其进行预览。</p>`,36),e=[o];function c(l,i){return s(),a("div",null,e)}const u=n(p,[["render",c],["__file","get-static-props.html.vue"]]);export{u as default};
