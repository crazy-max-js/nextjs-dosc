import{_ as p,r as e,o,c,b as n,d as s,e as t,a as l}from"./app.1ad2624e.js";const r={},u=n("h1",{id:"isr-incremental-static-regeneration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#isr-incremental-static-regeneration","aria-hidden":"true"},"#"),s(" ISR (Incremental Static Regeneration)")],-1),i={class:"custom-container details"},k=n("summary",null,"例子",-1),d={href:"https://nextjs.org/commerce",target:"_blank",rel:"noopener noreferrer"},h={href:"https://reactions-demo.vercel.app/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://static-tweet.vercel.app/",target:"_blank",rel:"noopener noreferrer"},g=l(`<details class="custom-container details"><summary>版本历史</summary><table><thead><tr><th>版本</th><th>变化</th></tr></thead><tbody><tr><td><code>v12.2.0</code></td><td>按需 ISR 稳定</td></tr><tr><td><code>v12.1.0</code></td><td>添加了按需 ISR（测试版）。</td></tr><tr><td><code>v12.0.0</code></td><td>添加了机器人感知 ISR 后备。</td></tr><tr><td><code>v9.5.0</code></td><td>添加了基本路径。</td></tr></tbody></table></details><p>Next.js 允许您在构建站点后创建或更新静态页面。增量静态重新生成 (ISR) 使您能够在每页的基础上使用静态生成，<strong>而无需重建整个站点</strong>。使用 ISR，您可以在扩展到数百万页的同时保留静态的优势。</p><p>要使用 ISR，请将 <code>revalidate</code> prop 添加到 <code>getStaticProps</code> ：</p><div class="language-jsx" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Blog</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> posts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// This function gets called at build time on server-side.</span>
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

<span class="token comment">// This function gets called at build time on server-side.</span>
<span class="token comment">// It may be called again, on a serverless function, if</span>
<span class="token comment">// the path has not been generated.</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticPaths</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://.../posts&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// Get the paths we want to pre-render based on posts</span>
  <span class="token keyword">const</span> paths <span class="token operator">=</span> posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> post<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// We&#39;ll pre-render only these paths at build time.</span>
  <span class="token comment">// { fallback: blocking } will server-render pages</span>
  <span class="token comment">// on-demand if the path doesn&#39;t exist.</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> paths<span class="token punctuation">,</span> <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token string">&#39;blocking&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Blog
</code></pre></div><p>当对在构建时预渲染的页面发出请求时，它将最初显示缓存的页面。</p><ul><li>在初始请求之后和 10 秒之前对页面的任何请求也会被缓存并且是瞬时的。</li><li>在 10 秒窗口之后，下一个请求仍将显示缓存（陈旧）页面</li><li>Next.js 在后台触发页面的重新生成。</li><li>页面生成成功后，Next.js 将使缓存失效并显示更新的页面。如果后台重新生成失败，旧页面仍将保持不变。</li></ul><p>当对尚未生成的路径发出请求时，Next.js 将在第一个请求时服务器渲染页面。未来的请求将从缓存中提供静态文件。Vercel 上的 ISR全局持久化缓存并处理回滚。</p><blockquote><p>注意：检查您的上游数据提供者是否默认启用了缓存。您可能需要禁用（例如useCdn: false），否则重新验证将无法提取新数据来更新 ISR 缓存。当 CDN 返回标头时，缓存可以发生在 CDN（对于被请求的端点）Cache-Control。</p></blockquote><h2 id="按需重新验证" tabindex="-1"><a class="header-anchor" href="#按需重新验证" aria-hidden="true">#</a> 按需重新验证</h2><p>如果您将revalidate时间设置为60，所有访问者将在一分钟内看到您网站的相同生成版本。使缓存无效的唯一方法是在一分钟后访问该页面的人。</p><p>从 开始v12.2.0，Next.js 支持按需增量静态重新生成以手动清除特定页面的 Next.js 缓存。这使得在以下情况下更容易更新您的网站：</p><ul><li>来自无头 CMS 的内容已创建或更新</li><li>电子商务元数据更改（价格、描述、类别、评论等） 在内部<code>getStaticProps</code>，您无需指定revalidate使用按需重新验证。如果revalidate省略，Next.js 将使用默认值(no revalidation) 并且仅在调用false时按需重新验证页面。revalidate()</li></ul><blockquote><p>注意： 不会为按需 ISR 请求执行中间件。相反，调用您想要重新验证revalidate()的确切路径。例如，如果您有pages/blog/[slug].js并从/post-1-&gt;重写/blog/post-1，则需要调用res.revalidate(&#39;/blog/post-1&#39;).</p></blockquote><h3 id="使用按需重新验证" tabindex="-1"><a class="header-anchor" href="#使用按需重新验证" aria-hidden="true">#</a> 使用按需重新验证</h3><p>首先，创建一个只有 Next.js 应用程序知道的秘密令牌。此密钥将用于防止未经授权访问重新验证 API 路由。您可以使用以下 URL 结构访问路由（手动或使用 webhook）：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>https://&lt;your-site.com&gt;/api/revalidate?secret=&lt;token&gt;
</code></pre></div><p>接下来，将密钥作为环境变量添加到您的应用程序中。最后，创建重新验证 API 路由：</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/api/revalidate.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Check for secret to confirm this is a valid request</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>secret <span class="token operator">!==</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MY_SECRET_TOKEN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Invalid token&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// this should be the actual path not a rewritten path</span>
    <span class="token comment">// e.g. for &quot;/blog/[slug]&quot; this should be &quot;/blog/post-1&quot;</span>
    <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">revalidate</span><span class="token punctuation">(</span><span class="token string">&#39;/path-to-revalidate&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">revalidated</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// If there was an error, Next.js will continue</span>
    <span class="token comment">// to show the last successfully generated page</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Error revalidating&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>查看我们的演示，了解按需重新验证的实际效果并提供反馈。</p><h3 id="在开发过程中测试按需-isr" tabindex="-1"><a class="header-anchor" href="#在开发过程中测试按需-isr" aria-hidden="true">#</a> 在开发过程中测试按需 ISR</h3><p>当使用 , 在本地运行时next dev，<code>getStaticProps</code>每个请求都会调用。要验证您的按需 ISR 配置是否正确，您需要创建生产版本并启动生产服务器：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ next build
$ next start
</code></pre></div><p>然后，您可以确认静态页面已成功重新验证。</p><h2 id="错误处理和重新验证" tabindex="-1"><a class="header-anchor" href="#错误处理和重新验证" aria-hidden="true">#</a> 错误处理和重新验证</h2><p>如果在处理后台重新生成时内部出现错误<code>getStaticProps</code>，或者您手动抛出错误，则最后成功生成的页面将继续显示。在下一个后续请求中，Next.js 将重试调用<code>getStaticProps</code>.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// If this request throws an uncaught error, Next.js will</span>
  <span class="token comment">// not invalidate the currently shown page and</span>
  <span class="token comment">// retry getStaticProps on the next request.</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://.../posts&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// If there is a server error, you might want to</span>
    <span class="token comment">// throw an error instead of returning so that the cache is not updated</span>
    <span class="token comment">// until the next successful request.</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Failed to fetch posts, received status </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>res<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// If the request was successful, return the posts</span>
  <span class="token comment">// and revalidate every 10 seconds.</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      posts<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">revalidate</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="自托管-isr" tabindex="-1"><a class="header-anchor" href="#自托管-isr" aria-hidden="true">#</a> 自托管 ISR</h2><p>当您使用next start.</p><p>在部署到Kubernetes或HashiCorp Nomad等容器编排器时，您可以使用这种方法。默认情况下，生成的资产将存储在每个 pod 的内存中。这意味着每个 pod 都有自己的静态文件副本。可能会显示陈旧数据，直到该特定 pod 被请求击中。</p><p>为确保所有 pod 的一致性，您可以禁用内存缓存。这将通知 Next.js 服务器仅利用文件系统中 ISR 生成的资产。</p><p>您可以在 Kubernetes pod（或类似设置）中使用共享网络挂载，以便在不同容器之间重用相同的文件系统缓存。通过共享同一个挂载，.next包含next/image缓存的文件夹也将被共享和重用。</p><p>要禁用内存缓存，请在文件中设置isrMemoryCacheSize为：0next.config.js</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Defaults to 50MB</span>
    <span class="token literal-property property">isrMemoryCacheSize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><blockquote><p>注意：您可能需要考虑尝试同时更新缓存的多个 pod 之间的竞争条件，具体取决于共享挂载的配置方式。</p></blockquote>`,34);function y(f,w){const a=e("ExternalLinkIcon");return o(),c("div",null,[u,n("details",i,[k,n("ul",null,[n("li",null,[n("a",d,[s("Next.js 商务"),t(a)])]),n("li",null,[n("a",h,[s("GitHub 反应演示"),t(a)])]),n("li",null,[n("a",m,[s("静态推文演示"),t(a)])])])]),g])}const x=p(r,[["render",y],["__file","incremental-static-regeneration.html.vue"]]);export{x as default};
