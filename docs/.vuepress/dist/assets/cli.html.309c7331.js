import{_ as r,r as o,o as l,c as d,b as a,d as e,e as t,w as p,a as n}from"./app.1ad2624e.js";const c={},h=n(`<h1 id="next-js-cli" tabindex="-1"><a class="header-anchor" href="#next-js-cli" aria-hidden="true">#</a> Next.js CLI</h1><p>The Next.js CLI allows you to start, build, and export your application.</p><p>To get a list of the available CLI commands, run the following command inside your project directory:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx next <span class="token parameter variable">-h</span>

</code></pre></div>`,4),u={href:"https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b",target:"_blank",rel:"noopener noreferrer"},m=n(`<p>The output should look like this:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Usage
  $ next <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>

Available commands
  build, start, export, dev, lint, telemetry, info

Options
  --version, <span class="token parameter variable">-v</span>   Version number
  --help, <span class="token parameter variable">-h</span>      Displays this message

For <span class="token function">more</span> information run a <span class="token builtin class-name">command</span> with the <span class="token parameter variable">--help</span> flag
  $ next build <span class="token parameter variable">--help</span>

</code></pre></div>`,2),b={href:"https://nodejs.org/api/cli.html#cli_node_options_options",target:"_blank",rel:"noopener noreferrer"},g=a("code",null,"next",-1),v=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">NODE_OPTIONS</span><span class="token operator">=</span><span class="token string">&#39;--throw-deprecation&#39;</span> next
<span class="token assign-left variable">NODE_OPTIONS</span><span class="token operator">=</span><span class="token string">&#39;-r esm&#39;</span> next
<span class="token assign-left variable">NODE_OPTIONS</span><span class="token operator">=</span><span class="token string">&#39;--inspect&#39;</span> next

</code></pre></div><blockquote><p>Note: Running<code>next</code>without a command is the same as running<code>next dev</code></p></blockquote><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> Build</h2><p><code>next build</code>creates an optimized production build of your application. The output displays information about each route.</p><ul><li><strong>Size</strong>– The number of assets downloaded when navigating to the page client-side. The size for each route only includes its dependencies.- <strong>First Load JS</strong>– The number of assets downloaded when visiting the page from the server. The amount of JS shared by all is shown as a separate metric.</li></ul><p>Both of these values are<strong>compressed with gzip</strong>. The first load is indicated by green, yellow, or red. Aim for green for performant applications.</p><p>You can enable production profiling for React with the<code>--profile</code>flag in<code>next build</code>. This requires<a href="/blog/next-9-5">Next.js 9.5</a>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>next build <span class="token parameter variable">--profile</span>

</code></pre></div><p>After that, you can use the profiler in the same way as you would in development.</p><p>You can enable more verbose build output with the<code>--debug</code>flag in<code>next build</code>. This requires Next.js 9.5.3:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>next build <span class="token parameter variable">--debug</span>

</code></pre></div><p>With this flag enabled additional build output like rewrites, redirects, and headers will be shown.</p><h2 id="development" tabindex="-1"><a class="header-anchor" href="#development" aria-hidden="true">#</a> Development</h2><p><code>next dev</code>starts the application in development mode with hot-code reloading, error reporting, and more:</p><p>The application will start at<code>http://localhost:3000</code>by default. The default port can be changed with<code>-p</code>, like so:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx next dev <span class="token parameter variable">-p</span> <span class="token number">4000</span>

</code></pre></div><p>Or using the<code>PORT</code>environment variable:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">PORT</span><span class="token operator">=</span><span class="token number">4000</span> npx next dev

</code></pre></div><blockquote><p>Note:<code>PORT</code>can not be set in<code>.env</code>as booting up the HTTP server happens before any other code is initialized.</p></blockquote><p>You can also set the hostname to be different from the default of<code>0.0.0.0</code>, this can be useful for making the application available for other devices on the network. The default hostname can be changed with<code>-H</code>, like so:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx next dev <span class="token parameter variable">-H</span> <span class="token number">192.168</span>.1.2

</code></pre></div><h2 id="production" tabindex="-1"><a class="header-anchor" href="#production" aria-hidden="true">#</a> Production</h2><p><code>next start</code>starts the application in production mode. The application should be compiled with<a href="#build"><code>next build</code></a>first.</p><p>The application will start at<code>http://localhost:3000</code>by default. The default port can be changed with<code>-p</code>, like so:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx next start <span class="token parameter variable">-p</span> <span class="token number">4000</span>

</code></pre></div><p>Or using the<code>PORT</code>environment variable:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">PORT</span><span class="token operator">=</span><span class="token number">4000</span> npx next start

</code></pre></div><blockquote><p>Note:<code>PORT</code>can not be set in<code>.env</code>as booting up the HTTP server happens before any other code is initialized.</p></blockquote><h3 id="keep-alive-timeout" tabindex="-1"><a class="header-anchor" href="#keep-alive-timeout" aria-hidden="true">#</a> Keep Alive Timeout</h3>`,29),f={href:"https://nodejs.org/api/http.html#http_server_keepalivetimeout",target:"_blank",rel:"noopener noreferrer"},x=n(`<p>To configure the timeout values for the production Next.js server, pass<code>--keepAliveTimeout</code>(in milliseconds) to<code>next start</code>, like so:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx next start <span class="token parameter variable">--keepAliveTimeout</span> <span class="token number">70000</span>

</code></pre></div><h2 id="lint" tabindex="-1"><a class="header-anchor" href="#lint" aria-hidden="true">#</a> Lint</h2><p><code>next lint</code>runs ESLint for all files in the<code>pages</code>,<code>components</code>, and<code>lib</code>directories. It also provides a guided setup to install any required dependencies if ESLint is not already configured in your application.</p><p>If you have other directories that you would like to lint, you can specify them using the<code>--dir</code>flag:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>next lint <span class="token parameter variable">--dir</span> utils

</code></pre></div><h2 id="telemetry" tabindex="-1"><a class="header-anchor" href="#telemetry" aria-hidden="true">#</a> Telemetry</h2><p>Next.js collects<strong>completely anonymous</strong>telemetry data about general usage. Participation in this anonymous program is optional, and you may opt-out if you&#39;d not like to share any information.</p>`,8),k=n(`<h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> Info</h2><p><code>next info</code>prints relevant details about the current system which can be used to report Next.js bugs. This information includes Operating System platform/arch/version, Binaries (Node.js, npm, Yarn, pnpm) and npm package versions (<code>next</code>,<code>react</code>,<code>react-dom</code>).</p><p>Running the following in your project&#39;s root directory:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>next info

</code></pre></div><p>will give you information like this example:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>
    Operating System:
      Platform: linux
      Arch: x64
      Version: <span class="token comment">#22-Ubuntu SMP Fri Nov 5 13:21:36 UTC 2021</span>
    Binaries:
      Node: <span class="token number">16.13</span>.0
      npm: <span class="token number">8.1</span>.0
      Yarn: <span class="token number">1.22</span>.17
      pnpm: <span class="token number">6.24</span>.2
    Relevant packages:
      next: <span class="token number">12.0</span>.8
      react: <span class="token number">17.0</span>.2
      react-dom: <span class="token number">17.0</span>.2


</code></pre></div><p>This information should then be pasted into GitHub Issues.</p>`,7);function y(_,T){const s=o("ExternalLinkIcon"),i=o("RouterLink");return l(),d("div",null,[h,a("p",null,[e("("),a("a",u,[e("npx"),t(s)]),e("comes with npm 5.2+ and higher)")]),m,a("p",null,[e("You can pass any"),a("a",b,[e("node arguments"),t(s)]),e("to"),g,e("commands:")]),v,a("p",null,[e("When deploying Next.js behind a downstream proxy (e.g. a load-balancer like AWS ELB/ALB) it's important to configure Next's underlying HTTP server with"),a("a",f,[e("keep-alive timeouts"),t(s)]),e("that arelargerthan the downstream proxy's timeouts. Otherwise, once a keep-alive timeout is reached for a given TCP connection, Node.js will immediately terminate that connection without notifying the downstream proxy. This results in a proxy error whenever it attempts to reuse a connection that Node.js has already terminated.")]),x,a("p",null,[e("To learn more about Telemetry,"),t(i,{to:"/telemetry/"},{default:p(()=>[e("please read this document")]),_:1}),e(".")]),k])}const N=r(c,[["render",y],["__file","cli.html.vue"]]);export{N as default};
