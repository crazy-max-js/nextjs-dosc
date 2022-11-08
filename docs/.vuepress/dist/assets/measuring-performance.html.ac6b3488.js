import{_ as o,r as p,o as c,c as r,b as n,d as s,e,a as t}from"./app.1ad2624e.js";const l={},i=n("h1",{id:"measuring-performance",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#measuring-performance","aria-hidden":"true"},"#"),s(" Measuring performance")],-1),u=n("p",null,[n("a",{href:"/analytics"},"Next.js Analytics"),s("allows you to analyze and measure the performance of pages using different metrics.")],-1),d={href:"https://vercel.com/docs/concepts/analytics/web-vitals?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",target:"_blank",rel:"noopener noreferrer"},k={href:"https://vercel.com/docs/analytics?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",target:"_blank",rel:"noopener noreferrer"},h={href:"https://vercel.com/docs/concepts/analytics#self-hosted?utm_source=next-site&utm_medium=docs&utm_campaign=next-website",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>The rest of this documentation describes the built-in relayer Next.js Analytics uses.</p><h2 id="build-your-own" tabindex="-1"><a class="header-anchor" href="#build-your-own" aria-hidden="true">#</a> Build Your Own</h2><p>First, you will need to create a<a href="/docs/guide/advanced-features/custom-app">custom App</a>component and define a<code>reportWebVitals</code>function:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/_app.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reportWebVitals</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>metric<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyApp

</code></pre></div><p>This function is fired when the final values for any of the metrics have finished calculating on the page. You can use to log any of the results to the console or send to a particular endpoint.</p><p>The<code>metric</code>object returned to the function consists of a number of properties:</p>`,6),f=n("code",null,"id",-1),g=n("code",null,"name",-1),b=n("code",null,"startTime",-1),y={href:"https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"value",-1),w={href:"https://developer.mozilla.org/en-US/docs/Web/API/DOMHighResTimeStamp",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"label",-1),x=n("code",null,"web-vital",-1),j=n("code",null,"custom",-1),P=n("p",null,"There are two types of metrics that are tracked:",-1),T=n("ul",null,[n("li",null,"Web Vitals- Custom metrics")],-1),C=n("h2",{id:"web-vitals",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#web-vitals","aria-hidden":"true"},"#"),s(" Web Vitals")],-1),V={href:"https://web.dev/vitals/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte",target:"_blank",rel:"noopener noreferrer"},W={href:"https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint",target:"_blank",rel:"noopener noreferrer"},S={href:"https://web.dev/lcp/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://web.dev/fid/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://web.dev/cls/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://web.dev/inp/",target:"_blank",rel:"noopener noreferrer"},F=t(`<p>You can handle all the results of these metrics using the<code>web-vital</code>label:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reportWebVitals</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>metric<span class="token punctuation">.</span>label <span class="token operator">===</span> <span class="token string">&#39;web-vital&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>metric<span class="token punctuation">)</span> <span class="token comment">// The metric object ({ id, name, startTime, value, label }) is logged to the console</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>There&#39;s also the option of handling each of the metrics separately:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reportWebVitals</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>metric<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;FCP&#39;</span><span class="token operator">:</span>
      <span class="token comment">// handle FCP results</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;LCP&#39;</span><span class="token operator">:</span>
      <span class="token comment">// handle LCP results</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;CLS&#39;</span><span class="token operator">:</span>
      <span class="token comment">// handle CLS results</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;FID&#39;</span><span class="token operator">:</span>
      <span class="token comment">// handle FID results</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;TTFB&#39;</span><span class="token operator">:</span>
      <span class="token comment">// handle TTFB results</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;INP&#39;</span><span class="token operator">:</span>
      <span class="token comment">// handle INP results (note: INP is still an experimental metric)</span>
      <span class="token keyword">break</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,4),M={href:"https://github.com/GoogleChrome/web-vitals",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/GoogleChrome/web-vitals#browser-support",target:"_blank",rel:"noopener noreferrer"},U=t(`<h2 id="custom-metrics" tabindex="-1"><a class="header-anchor" href="#custom-metrics" aria-hidden="true">#</a> Custom metrics</h2><p>In addition to the core metrics listed above, there are some additional custom metrics that measure the time it takes for the page to hydrate and render:</p><ul><li><code>Next.js-hydration</code>: Length of time it takes for the page to start and finish hydrating (in ms)- <code>Next.js-route-change-to-render</code>: Length of time it takes for a page to start rendering after a route change (in ms)- <code>Next.js-render</code>: Length of time it takes for a page to finish render after a route change (in ms)</li></ul><p>You can handle all the results of these metrics using the<code>custom</code>label:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reportWebVitals</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>metric<span class="token punctuation">.</span>label <span class="token operator">===</span> <span class="token string">&#39;custom&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>metric<span class="token punctuation">)</span> <span class="token comment">// The metric object ({ id, name, startTime, value, label }) is logged to the console</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><p>There&#39;s also the option of handling each of the metrics separately:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reportWebVitals</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>metric<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;Next.js-hydration&#39;</span><span class="token operator">:</span>
      <span class="token comment">// handle hydration results</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;Next.js-route-change-to-render&#39;</span><span class="token operator">:</span>
      <span class="token comment">// handle route-change to render results</span>
      <span class="token keyword">break</span>
    <span class="token keyword">case</span> <span class="token string">&#39;Next.js-render&#39;</span><span class="token operator">:</span>
      <span class="token comment">// handle render results</span>
      <span class="token keyword">break</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,7),z={href:"https://caniuse.com/#feat=user-timing",target:"_blank",rel:"noopener noreferrer"},R=t(`<h2 id="sending-results-to-analytics" tabindex="-1"><a class="header-anchor" href="#sending-results-to-analytics" aria-hidden="true">#</a> Sending results to analytics</h2><p>With the relay function, you can send any of results to an analytics endpoint to measure and track real user performance on your site. For example:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reportWebVitals</span><span class="token punctuation">(</span><span class="token parameter">metric</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>metric<span class="token punctuation">)</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&#39;https://example.com/analytics&#39;</span>

  <span class="token comment">// Use \`navigator.sendBeacon()\` if available, falling back to \`fetch()\`.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>sendBeacon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    navigator<span class="token punctuation">.</span><span class="token function">sendBeacon</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> body<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span> body<span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">keepalive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,3),E=n("strong",null,"Note",-1),D={href:"https://analytics.google.com/analytics/web/",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"id",-1),O=n("code",null,"window.gtag",-1),Y=n("div",{class:"language-Read","data-ext":"Read"},[n("pre",{class:"language-Read"},[n("code",null,`
## Web Vitals Attribution

When debugging issues related to Web Vitals, it is often helpful if we can pinpoint the source of the problem.
For example, in the case of Cumulative Layout Shift (CLS), we might want to know the first element that shifted when the single largest layout shift occurred.
Or, in the case of Largest Contentful Paint (LCP), we might want to identify the element corresponding to the LCP for the page.
If the LCP element is an image, knowing the URL of the image resource can help us locate the asset we need to optimize.

Pinpointing the biggest contributor to the Web Vitals score, aka[attribution](https://github.com/GoogleChrome/web-vitals/blob/4ca38ae64b8d1e899028c692f94d4c56acfc996c/README.md#attribution),
allows us to obtain more in-depth information like entries for[PerformanceEventTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEventTiming),[PerformanceNavigationTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming)and[PerformanceResourceTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming).

Attribution is disabled by default in Next.js but can be enabled**per metric**by specifying the following in\`next.config.js\`.

\`\`\`js
// next.config.js
experimental: {
  webVitalsAttribution: ['CLS', 'LCP']
}

`)])],-1),q=n("code",null,"web-vitals",-1),H={href:"https://github.com/vercel/next.js/blob/442378d21dd56d6e769863eb8c2cb521a463a2e0/packages/next/shared/lib/utils.ts#L43",target:"_blank",rel:"noopener noreferrer"},J=n("code",null,"NextWebVitalsMetric",-1),K=t(`<h2 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h2><p>If you are using TypeScript, you can use the built-in type<code>NextWebVitalsMetric</code>:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// pages/_app.tsx</span>

<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppProps<span class="token punctuation">,</span> NextWebVitalsMetric <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/app&#39;</span>

<span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span><span class="token operator">:</span> AppProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">reportWebVitals</span><span class="token punctuation">(</span>metric<span class="token operator">:</span> NextWebVitalsMetric<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>metric<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyApp

</code></pre></div>`,3);function Q(X,Z){const a=p("ExternalLinkIcon");return c(),r("div",null,[i,u,n("p",null,[s("You can start collecting your"),n("a",d,[s("Real Experience Score"),e(a)]),s("with zero-configuration on"),n("a",k,[s("Vercel deployments"),e(a)]),s(". There's also support for Analytics if you're"),n("a",h,[s("self-hosting"),e(a)]),s(".")]),m,n("ul",null,[n("li",null,[f,s(": Unique identifier for the metric in the context of the current page load- "),g,s(": Metric name- "),b,s(": First recorded timestamp of the performance entry in"),n("a",y,[s("milliseconds"),e(a)]),s("(if applicable)- "),_,s(": Value, or duration in"),n("a",w,[s("milliseconds"),e(a)]),s(", of the performance entry- "),v,s(": Type of metric ("),x,s("or"),j,s(")")])]),P,T,C,n("p",null,[n("a",V,[s("Web Vitals"),e(a)]),s("are a set of useful metrics that aim to capture the user experience of a web page. The following web vitals are all included:")]),n("ul",null,[n("li",null,[n("a",N,[s("Time to First Byte"),e(a)]),s("(TTFB)- "),n("a",W,[s("First Contentful Paint"),e(a)]),s("(FCP)- "),n("a",S,[s("Largest Contentful Paint"),e(a)]),s("(LCP)- "),n("a",L,[s("First Input Delay"),e(a)]),s("(FID)- "),n("a",A,[s("Cumulative Layout Shift"),e(a)]),s("(CLS)- "),n("a",I,[s("Interaction to Next Paint"),e(a)]),s("(INP)(experimental)")])]),F,n("p",null,[s("A third-party library,"),n("a",M,[s("web-vitals"),e(a)]),s(", is used to measure these metrics. Browser compatibility depends on the particular metric, so refer to the"),n("a",B,[s("Browser Support"),e(a)]),s("section to find out which browsers are supported.")]),U,n("p",null,[s("These metrics work in all browsers that support the"),n("a",z,[s("User Timing API"),e(a)]),s(".")]),R,n("blockquote",null,[n("p",null,[E,s(": If you use"),n("a",D,[s("Google Analytics"),e(a)]),s(", using the"),G,s("value can allow you to construct metric distributions manually (to calculate percentiles, etc.)```js export function reportWebVitals({ id, name, label, value }) { // Use "),O,s(" if you initialized Google Analytics as this example: // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_app.js window.gtag('event', name, { event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric', value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers event_label: id, // id unique to current page load non_interaction: true, // avoids affecting bounce rate. }) }")])]),Y,n("p",null,[s("Valid attribution values are all"),q,s("metrics specified in the"),n("a",H,[J,e(a)]),s("type.")]),K])}const nn=o(l,[["render",Q],["__file","measuring-performance.html.vue"]]);export{nn as default};
