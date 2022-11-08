import{_ as o,r as p,o as r,c,b as s,d as n,e,a as t}from"./app.1ad2624e.js";const l={},i=s("h1",{id:"next-js-compiler",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#next-js-compiler","aria-hidden":"true"},"#"),n(" Next.js Compiler")],-1),u=s("details",{class:"custom-container details"},[s("summary",null,"示例"),s("p",null,"Version History")],-1),d={href:"http://swc.rs/",target:"_blank",rel:"noopener noreferrer"},k=s("p",null,[n("Compilation using the Next.js Compiler is 17x faster than Babel and enabled by default since Next.js version 12. If you have an existing Babel configuration or are using"),s("a",{href:"#unsupported-features"},"unsupported features"),n(", your application will opt-out of the Next.js Compiler and continue using Babel.")],-1),m=s("h2",{id:"why-swc",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#why-swc","aria-hidden":"true"},"#"),n(" Why SWC?")],-1),h={href:"http://swc.rs/",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>SWC can be used for compilation, minification, bundling, and more – and is designed to be extended. It&#39;s something you can call to perform code transformations (either built-in or custom). Running those transformations happens through higher-level tools like Next.js.</p><p>We chose to build on SWC for a few reasons:</p><ul><li>**Extensibility:**SWC can be used as a Crate inside Next.js, without having to fork the library or workaround design constraints.- **Performance:**We were able to achieve ~3x faster Fast Refresh and ~5x faster builds in Next.js by switching to SWC, with more room for optimization still in progress.- **WebAssembly:**Rust&#39;s support for WASM is essential for supporting all possible platforms and taking Next.js development everywhere.- **Community:**The Rust community and ecosystem are amazing and still growing.</li></ul><h2 id="supported-features" tabindex="-1"><a class="header-anchor" href="#supported-features" aria-hidden="true">#</a> Supported Features</h2><h3 id="styled-components" tabindex="-1"><a class="header-anchor" href="#styled-components" aria-hidden="true">#</a> Styled Components</h3><p>We&#39;re working to port<code>babel-plugin-styled-components</code>to the Next.js Compiler.</p><p>First, update to the latest version of Next.js:<code>npm install next@latest</code>. Then, update your<code>next.config.js</code>file:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">compiler</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.</span>
    <span class="token literal-property property">styledComponents</span><span class="token operator">:</span> boolean <span class="token operator">|</span> <span class="token punctuation">{</span>
      <span class="token comment">// Enabled by default in development, disabled in production to reduce file size,</span>
      <span class="token comment">// setting this will override the default for all environments.</span>
      displayName<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
      <span class="token comment">// Enabled by default.</span>
      ssr<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
      <span class="token comment">// Enabled by default.</span>
      fileName<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
      <span class="token comment">// Empty by default.</span>
      topLevelImportPaths<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// Defaults to [&quot;index&quot;].</span>
      meaninglessFileNames<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// Enabled by default.</span>
      cssProp<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
      <span class="token comment">// Empty by default.</span>
      namespace<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
      <span class="token comment">// Not supported yet.</span>
      minify<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
      <span class="token comment">// Not supported yet.</span>
      transpileTemplateLiterals<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
      <span class="token comment">// Not supported yet.</span>
      pure<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div>`,8),f=s("code",null,"minify",-1),y=s("code",null,"transpileTemplateLiterals",-1),b=s("code",null,"pure",-1),v={href:"https://github.com/vercel/next.js/issues/30802",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"ssr",-1),j=s("code",null,"displayName",-1),w=s("code",null,"styled-components",-1),_=t(`<h3 id="jest" tabindex="-1"><a class="header-anchor" href="#jest" aria-hidden="true">#</a> Jest</h3><p>Jest support not only includes the transformation previously provided by Babel, but also simplifies configuring Jest together with Next.js including:</p><ul><li>Auto mocking of<code>.css</code>,<code>.module.css</code>(and their<code>.scss</code>variants), and image imports- Automatically sets up<code>transform</code>using SWC- Loading<code>.env</code>(and all variants) into<code>p<wbr>rocess.env</code>- Ignores<code>node_modules</code>from test resolving and transforms- Ignoring<code>.next</code>from test resolving- Loads<code>next.config.js</code>for flags that enable experimental SWC transforms</li></ul><p>First, update to the latest version of Next.js:<code>npm install next@latest</code>. Then, update your<code>jest.config.js</code>file:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// jest.config.js</span>
<span class="token keyword">const</span> nextJest <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;next/jest&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// Providing the path to your Next.js app which will enable loading next.config.js and .env files</span>
<span class="token keyword">const</span> createJestConfig <span class="token operator">=</span> <span class="token function">nextJest</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// Any custom config you want to pass to Jest</span>
<span class="token keyword">const</span> customJestConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">setupFilesAfterEnv</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;rootDir&gt;/jest.setup.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// createJestConfig is exported in this way to ensure that next/jest can load the Next.js configuration, which is async</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">createJestConfig</span><span class="token punctuation">(</span>customJestConfig<span class="token punctuation">)</span>

</code></pre></div><h3 id="relay" tabindex="-1"><a class="header-anchor" href="#relay" aria-hidden="true">#</a> Relay</h3>`,6),C={href:"https://relay.dev/",target:"_blank",rel:"noopener noreferrer"},N=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">compiler</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">relay</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// This should match relay.config.js</span>
      <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">artifactDirectory</span><span class="token operator">:</span> <span class="token string">&#39;./__generated__&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">language</span><span class="token operator">:</span> <span class="token string">&#39;typescript&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>NOTE: In Next.js all JavaScript files in<code>pages</code>directory are considered routes. So, for<code>relay-compiler</code>you&#39;ll need to specify<code>artifactDirectory</code>configuration settings outside of the<code>pages</code>, otherwise<code>relay-compiler</code>will generate files next to the source file in the<code>__generated__</code>directory, and this file will be considered a route, which will break production builds.</p><h3 id="remove-react-properties" tabindex="-1"><a class="header-anchor" href="#remove-react-properties" aria-hidden="true">#</a> Remove React Properties</h3><p>Allows to remove JSX properties. This is often used for testing. Similar to<code>babel-plugin-react-remove-properties</code>.</p><p>To remove properties matching the default regex<code>^data-test</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">compiler</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">reactRemoveProperties</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>To remove custom properties:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">compiler</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// The regexes defined here are processed in Rust so the syntax is different from</span>
    <span class="token comment">// JavaScript \`RegExp\`s. See https://docs.rs/regex.</span>
    <span class="token literal-property property">reactRemoveProperties</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;^data-custom$&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="remove-console" tabindex="-1"><a class="header-anchor" href="#remove-console" aria-hidden="true">#</a> Remove Console</h3><p>This transform allows for removing all<code>console.*</code>calls in application code (not<code>node_modules</code>). Similar to<code>babel-plugin-transform-remove-console</code>.</p><p>Remove all<code>console.*</code>calls:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">compiler</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">removeConsole</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Remove<code>console.*</code>output except<code>console.error</code>:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">compiler</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">removeConsole</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="legacy-decorators" tabindex="-1"><a class="header-anchor" href="#legacy-decorators" aria-hidden="true">#</a> Legacy Decorators</h3><p>Next.js will automatically detect<code>experimentalDecorators</code>in<code>jsconfig.json</code>or<code>tsconfig.json</code>. Legacy decorators are commonly used with older versions of libraries like<code>mobx</code>.</p><p>This flag is only supported for compatibility with existing applications. We do not recommend using legacy decorators in new applications.</p><p>First, update to the latest version of Next.js:<code>npm install next@latest</code>. Then, update your<code>jsconfig.json</code>or<code>tsconfig.json</code>file:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="importsource" tabindex="-1"><a class="header-anchor" href="#importsource" aria-hidden="true">#</a> importSource</h3>`,20),T=s("code",null,"jsxImportSource",-1),S=s("code",null,"jsconfig.json",-1),W=s("code",null,"tsconfig.json",-1),R={href:"https://theme-ui.com",target:"_blank",rel:"noopener noreferrer"},A=t(`<p>First, update to the latest version of Next.js:<code>npm install next@latest</code>. Then, update your<code>jsconfig.json</code>or<code>tsconfig.json</code>file:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;jsxImportSource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;theme-ui&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="emotion" tabindex="-1"><a class="header-anchor" href="#emotion" aria-hidden="true">#</a> Emotion</h3><p>We&#39;re working to port<code>@emotion/babel-plugin</code>to the Next.js Compiler.</p><p>First, update to the latest version of Next.js:<code>npm install next@latest</code>. Then, update your<code>next.config.js</code>file:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">compiler</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">emotion</span><span class="token operator">:</span> boolean <span class="token operator">|</span> <span class="token punctuation">{</span>
      <span class="token comment">// default is true. It will be disabled when build type is production.</span>
      sourceMap<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span>
      <span class="token comment">// default is &#39;dev-only&#39;.</span>
      autoLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;dev-only&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// default is &#39;[local]&#39;.</span>
      <span class="token comment">// Allowed values: \`[local]\` \`[filename]\` and \`[dirname]\`</span>
      <span class="token comment">// This option only works when autoLabel is set to &#39;dev-only&#39; or &#39;always&#39;.</span>
      <span class="token comment">// It allows you to define the format of the resulting label.</span>
      <span class="token comment">// The format is defined via string where variable parts are enclosed in square brackets [].</span>
      <span class="token comment">// For example labelFormat: &quot;my-classname--[local]&quot;, where [local] will be replaced with the name of the variable the result is assigned to.</span>
      labelFormat<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Only<code>importMap</code>in<code>@emotion/babel-plugin</code>is not supported for now.</p><h3 id="minification" tabindex="-1"><a class="header-anchor" href="#minification" aria-hidden="true">#</a> Minification</h3><p>Next.js&#39; swc compiler is used for minification by default since v13. This is 7x faster than Terser.</p><p>If Terser is still needed for any reason this can be configured.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">swcMinify</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="experimental-features" tabindex="-1"><a class="header-anchor" href="#experimental-features" aria-hidden="true">#</a> Experimental Features</h2><h3 id="minifier-debug-options" tabindex="-1"><a class="header-anchor" href="#minifier-debug-options" aria-hidden="true">#</a> Minifier debug options</h3><p>While the minifier is experimental, we are making the following options available for debugging purposes. They will not be available once the minifier is made stable.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">swcMinifyDebugOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">defaults</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">side_effects</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div>`,15),I=s("code",null,"side_effects",-1),F={href:"https://swc.rs/docs/configuration/minification#jscminifycompress",target:"_blank",rel:"noopener noreferrer"},q=s("h3",{id:"modularize-imports",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#modularize-imports","aria-hidden":"true"},"#"),n(" Modularize Imports")],-1),M={href:"https://www.npmjs.com/package/babel-plugin-transform-imports",target:"_blank",rel:"noopener noreferrer"},E=t(`<p>Transforms member style imports:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Row<span class="token punctuation">,</span> Grid <span class="token keyword">as</span> MyGrid <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-bootstrap&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> merge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lodash&#39;</span>

</code></pre></div><p>...into default style imports:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Row <span class="token keyword">from</span> <span class="token string">&#39;react-bootstrap/lib/Row&#39;</span>
<span class="token keyword">import</span> MyGrid <span class="token keyword">from</span> <span class="token string">&#39;react-bootstrap/lib/Grid&#39;</span>
<span class="token keyword">import</span> merge <span class="token keyword">from</span> <span class="token string">&#39;lodash/merge&#39;</span>

</code></pre></div><p>Config for the above transform:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modularizeImports</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;react-bootstrap&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&#39;react-bootstrap/lib/{{member}}&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lodash</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&#39;lodash/{{member}}&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Advanced transformations:</p><ul><li>Using regular expressions</li></ul>`,8),J=s("code",null,"babel-plugin-transform-imports",-1),B={href:"https://docs.rs/handlebars",target:"_blank",rel:"noopener noreferrer"},P={href:"https://docs.rs/regex/latest/regex/",target:"_blank",rel:"noopener noreferrer"},z=t(`<p>The config:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">modularizeImports</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;my-library/?(((\\\\w*)?/?)*)&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token string">&#39;my-library/{{ matches.[1] }}/{{member}}&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Cause this code:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MyModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my-library&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my-library/components&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Header<span class="token punctuation">,</span> Footer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my-library/components/App&#39;</span>

</code></pre></div><p>To become:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> MyModule <span class="token keyword">from</span> <span class="token string">&#39;my-library/MyModule&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;my-library/components/App&#39;</span>
<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">&#39;my-library/components/App/Header&#39;</span>
<span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">&#39;my-library/components/App/Footer&#39;</span>

</code></pre></div><ul><li>Handlebars templating</li></ul>`,7),L={href:"https://docs.rs/handlebars",target:"_blank",rel:"noopener noreferrer"},H=s("code",null,"transform",-1),O=t('<ul><li><code>matches</code>: Has type<code>string[]</code>. All groups matched by the regular expression.<code>matches.[0]</code>is the full match.- <code>member</code>: Has type<code>string</code>. The name of the member import.- <code>lowerCase</code>,<code>upperCase</code>,<code>camelCase</code>,<code>kebabCase</code>: Helper functions to convert a string to lower, upper, camel or kebab cases.</li></ul><h3 id="swc-trace-profiling" tabindex="-1"><a class="header-anchor" href="#swc-trace-profiling" aria-hidden="true">#</a> SWC Trace profiling</h3>',2),D={href:"https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU/preview?mode=html#%21=",target:"_blank",rel:"noopener noreferrer"},U=t(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">swcTraceProfiling</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div>`,1),V=s("code",null,"swc-trace-profile-${timestamp}.json",-1),Y=s("code",null,".next/",-1),G={href:"https://ui.perfetto.dev/",target:"_blank",rel:"noopener noreferrer"},$={href:"https://www.speedscope.app/",target:"_blank",rel:"noopener noreferrer"},K=t(`<h3 id="swc-plugins-experimental" tabindex="-1"><a class="header-anchor" href="#swc-plugins-experimental" aria-hidden="true">#</a> SWC Plugins (Experimental)</h3><p>You can configure swc&#39;s transform to use SWC&#39;s experimental plugin support written in wasm to customize transformation behavior.</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// next.config.js</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">swcPlugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token string">&#39;plugin&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token operator">...</span>pluginOptions<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p><code>swcPlugins</code>accepts an array of tuples for configuring plugins. A tuple for the plugin contains the path to the plugin and an object for plugin configuration. The path to the plugin can be an npm module package name or an absolute path to the<code>.wasm</code>binary itself.</p><h2 id="unsupported-features" tabindex="-1"><a class="header-anchor" href="#unsupported-features" aria-hidden="true">#</a> Unsupported Features</h2><p>When your application has a<code>.babelrc</code>file, Next.js will automatically fall back to using Babel for transforming individual files. This ensures backwards compatibility with existing applications that leverage custom Babel plugins.</p>`,6),Q={href:"https://github.com/vercel/next.js/discussions/30174",target:"_blank",rel:"noopener noreferrer"};function X(Z,nn){const a=p("ExternalLinkIcon");return r(),c("div",null,[i,u,s("p",null,[n("The Next.js Compiler, written in Rust using"),s("a",d,[n("SWC"),e(a)]),n(", allows Next.js to transform and minify your JavaScript code for production. This replaces Babel for individual files and Terser for minifying output bundles.")]),k,m,s("p",null,[s("a",h,[n("SWC"),e(a)]),n("is an extensible Rust-based platform for the next generation of fast developer tools.")]),g,s("p",null,[f,n(","),y,n("and"),b,n("are not yet implemented. You can follow the progress"),s("a",v,[n("here"),e(a)]),n("."),x,n("and"),j,n("transforms are the main requirement for using"),w,n("in Next.js.")]),_,s("p",null,[n("To enable"),s("a",C,[n("Relay"),e(a)]),n("support:")]),N,s("p",null,[n("Next.js will automatically detect"),T,n("in"),S,n("or"),W,n("and apply that. This is commonly used with libraries like"),s("a",R,[n("Theme UI"),e(a)]),n(".")]),A,s("p",null,[n("If your app works with the options above, it means"),I,n("is the problematic option. See"),s("a",F,[n("the SWC documentation"),e(a)]),n("for detailed options.")]),q,s("p",null,[n("Allows to modularize imports, similar to"),s("a",M,[n("babel-plugin-transform-imports"),e(a)]),n(".")]),E,s("p",null,[n("Similar to"),J,n(", but the transform is templated with"),s("a",B,[n("handlebars"),e(a)]),n("and regular expressions are in Rust"),s("a",P,[n("regex"),e(a)]),n("crate's syntax.")]),z,s("p",null,[n("This transform uses"),s("a",L,[n("handlebars"),e(a)]),n("to template the replacement import path in the"),H,n("field. These variables and helper functions are available:")]),O,s("p",null,[n("You can generate SWC's internal transform traces as chromium's"),s("a",D,[n("trace event format"),e(a)]),n(".")]),U,s("p",null,[n("Once enabled, swc will generate trace named as"),V,n("under"),Y,n(". Chromium's trace viewer (chrome://tracing/,"),s("a",G,[n("https://ui.perfetto.dev/"),e(a)]),n("), or compatible flamegraph viewer ("),s("a",$,[n("https://www.speedscope.app/"),e(a)]),n(") can load & visualize generated traces.")]),K,s("p",null,[n("If you're using a custom Babel setup,"),s("a",Q,[n("please share your configuration"),e(a)]),n(". We're working to port as many commonly used Babel transformations as possible, as well as supporting plugins in the future.")])])}const an=o(l,[["render",X],["__file","compiler.html.vue"]]);export{an as default};
