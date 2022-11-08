import{_ as o,r as i,o as c,c as r,b as e,d as n,e as s,a}from"./app.1ad2624e.js";const p={},l=e("h1",{id:"eslint",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eslint","aria-hidden":"true"},"#"),n(" ESLint")],-1),u={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},d=e("code",null,"next lint",-1),h=e("code",null,"package.json",-1),g=a(`<div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;next lint&quot;</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Then run<code>npm run lint</code>or<code>yarn lint</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> lint

</code></pre></div><p>If you don&#39;t already have ESLint configured in your application, you will be guided through the installation and configuration process.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> lint

<span class="token comment"># You&#39;ll see a prompt like this:</span>
<span class="token comment">#</span>
<span class="token comment"># ? How would you like to configure ESLint?</span>
<span class="token comment">#</span>
<span class="token comment"># ❯   Base configuration + Core Web Vitals rule-set (recommended)</span>
<span class="token comment">#     Base configuration</span>
<span class="token comment">#     None</span>

</code></pre></div><p>One of the following three options can be selected:</p><ul><li><strong>Strict</strong>: Includes Next.js&#39; base ESLint configuration along with a stricter<a href="/docs/guide/basic-features/eslint#core-web-vitals">Core Web Vitals rule-set</a>. This is the recommended configuration for developers setting up ESLint for the first time.\`\`\`json { &quot;extends&quot;: &quot;next/core-web-vitals&quot; }</li></ul><p><code>- **Base**: Includes Next.js&#39; base ESLint configuration.</code>json { &quot;extends&quot;: &quot;next&quot; }</p><div class="language--" data-ext="-"><pre class="language--"><code>
If either of the two configuration options are selected, Next.js will automatically install\`eslint\`and\`eslint-config-next\`as development dependencies in your application and create an\`.eslintrc.json\`file in the root of your project that includes your selected configuration.

You can now run\`next lint\`every time you want to run ESLint to catch errors. Once ESLint has been set up, it will also automatically run during every build (\`next build\`). Errors will fail the build, while warnings will not.

&gt; If you do not want ESLint to run during\`next build\`, refer to the documentation for[Ignoring ESLint](/docs/api-reference/next.config.js/ignoring-eslint).

We recommend using an appropriate[integration](https://eslint.org/docs/user-guide/integrations#editors)to view warnings and errors directly in your code editor during development.

## ESLint Config

The default configuration (\`eslint-config-next\`) includes everything you need to have an optimal out-of-the-box linting experience in Next.js. If you do not have ESLint already configured in your application, we recommend using\`next lint\`to set up ESLint along with this configuration.

&gt; If you would like to use\`eslint-config-next\`along with other ESLint configurations, refer to the[Additional Configurations](/docs/basic-features/eslint#additional-configurations)section to learn how to do so without causing any conflicts.

Recommended rule-sets from the following ESLint plugins are all used within\`eslint-config-next\`:

- [\`eslint-plugin-react\`](https://www.npmjs.com/package/eslint-plugin-react)- [\`eslint-plugin-react-hooks\`](https://www.npmjs.com/package/eslint-plugin-react-hooks)- [\`eslint-plugin-next\`](https://www.npmjs.com/package/@next/eslint-plugin-next)

This will take precedence over the configuration from\`next.config.js\`.

## ESLint Plugin

Next.js provides an ESLint plugin,[\`eslint-plugin-next\`](https://www.npmjs.com/package/@next/eslint-plugin-next), already bundled within the base configuration that makes it possible to catch common issues and problems in a Next.js application. The full set of rules is as follows:

- ✔: Enabled in the recommended configuration



If you already have ESLint configured in your application, we recommend extending from this plugin directly instead of including\`eslint-config-next\`unless a few conditions are met. Refer to the[Recommended Plugin Ruleset](/docs/basic-features/eslint#recommended-plugin-ruleset)to learn more.

### Custom Settings

#### rootDir

If you&#39;re using\`eslint-plugin-next\`in a project where Next.js isn&#39;t installed in your root directory (such as a monorepo), you can tell\`eslint-plugin-next\`where to find your Next.js application using the\`settings\`property in your\`.eslintrc\`:

\`\`\`json
{
  &quot;extends&quot;: &quot;next&quot;,
  &quot;settings&quot;: {
    &quot;next&quot;: {
      &quot;rootDir&quot;: &quot;packages/my-app/&quot;
    }
  }
}

</code></pre></div><p><code>rootDir</code>can be a path (relative or absolute), a glob (i.e.<code>&quot;packages/*/&quot;</code>), or an array of paths and/or globs.</p><h2 id="linting-custom-directories-and-files" tabindex="-1"><a class="header-anchor" href="#linting-custom-directories-and-files" aria-hidden="true">#</a> Linting Custom Directories and Files</h2><p>By default, Next.js will run ESLint for all files in the<code>pages/</code>,<code>components/</code>,<code>lib/</code>, and<code>src/</code>directories. However, you can specify which directories using the<code>dirs</code>option in the<code>eslint</code>config in<code>next.config.js</code>for production builds:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">eslint</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dirs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;pages&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utils&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Only run ESLint on the &#39;pages&#39; and &#39;utils&#39; directories during production builds (next build)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>Similarly, the<code>--dir</code>and<code>--file</code>flags can be used for<code>next lint</code>to lint specific directories and files:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>next lint <span class="token parameter variable">--dir</span> pages <span class="token parameter variable">--dir</span> utils <span class="token parameter variable">--file</span> bar.js

</code></pre></div><h2 id="caching" tabindex="-1"><a class="header-anchor" href="#caching" aria-hidden="true">#</a> Caching</h2><p>To improve performance, information of files processed by ESLint are cached by default. This is stored in<code>.next/cache</code>or in your defined<a href="/docs/guide/api-reference/next.config.js/setting-a-custom-build-directory">build directory</a>. If you include any ESLint rules that depend on more than the contents of a single source file and need to disable the cache, use the<code>--no-cache</code>flag with<code>next lint</code>.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>next lint --no-cache

</code></pre></div><h2 id="disabling-rules" tabindex="-1"><a class="header-anchor" href="#disabling-rules" aria-hidden="true">#</a> Disabling Rules</h2><p>If you would like to modify or disable any rules provided by the supported plugins (<code>react</code>,<code>react-hooks</code>,<code>next</code>), you can directly change them using the<code>rules</code>property in your<code>.eslintrc</code>:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;next&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;react/no-unescaped-entities&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@next/next/no-page-custom-font&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="core-web-vitals" tabindex="-1"><a class="header-anchor" href="#core-web-vitals" aria-hidden="true">#</a> Core Web Vitals</h3><p>The<code>next/core-web-vitals</code>rule set is enabled when<code>next lint</code>is run for the first time and the<strong>strict</strong>option is selected.</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;next/core-web-vitals&quot;</span>
<span class="token punctuation">}</span>

</code></pre></div>`,24),f=e("code",null,"next/core-web-vitals",-1),k=e("code",null,"eslint-plugin-next",-1),m={href:"https://web.dev/vitals/",target:"_blank",rel:"noopener noreferrer"},x=a('<blockquote><p>The<code>next/core-web-vitals</code>entry point is automatically included for new applications built with<a href="/docs/guide/api-reference/create-next-app">Create Next App</a>.</p></blockquote><h2 id="usage-with-other-tools" tabindex="-1"><a class="header-anchor" href="#usage-with-other-tools" aria-hidden="true">#</a> Usage With Other Tools</h2><h3 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> Prettier</h3>',3),y={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/prettier/eslint-config-prettier",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>First, install the dependency:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint-config-prettier
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">--dev</span> eslint-config-prettier

</code></pre></div><p>Then, add<code>prettier</code>to your existing ESLint config:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;next&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="lint-staged" tabindex="-1"><a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a> lint-staged</h3>`,5),w=e("code",null,"next lint",-1),_={href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,".lintstagedrc.js",-1),j=e("code",null,"--file",-1),E=a(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">buildEslintCommand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">filenames</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">next lint --fix --file </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>filenames
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; --file &#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;*.{js,jsx,ts,tsx}&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>buildEslintCommand<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="migrating-existing-config" tabindex="-1"><a class="header-anchor" href="#migrating-existing-config" aria-hidden="true">#</a> Migrating Existing Config</h2><h3 id="recommended-plugin-ruleset" tabindex="-1"><a class="header-anchor" href="#recommended-plugin-ruleset" aria-hidden="true">#</a> Recommended Plugin Ruleset</h3><p>If you already have ESLint configured in your application and any of the following conditions are true:</p>`,4),S=e("code",null,"airbnb",-1),L=e("code",null,"react-app",-1),N=e("code",null,"react",-1),I=e("code",null,"react-hooks",-1),T=e("code",null,"jsx-a11y",-1),C=e("code",null,"import",-1),B=e("code",null,"parserOptions",-1),V=e("a",{href:"/docs/guide/advanced-features/customizing-babel-config"},"customized your Babel configuration",-1),R=e("code",null,"eslint-plugin-import",-1),W={href:"https://github.com/benmosher/eslint-plugin-import#resolvers",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/index.js",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"eslint-config-next",-1),D=a(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//...</span>
    <span class="token string">&#39;plugin:@next/next/recommended&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><p>The plugin can be installed normally in your project without needing to run<code>next lint</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @next/eslint-plugin-next
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">--dev</span> @next/eslint-plugin-next

</code></pre></div><p>This eliminates the risk of collisions or errors that can occur due to importing the same plugin or parser across multiple configurations.</p><h3 id="additional-configurations" tabindex="-1"><a class="header-anchor" href="#additional-configurations" aria-hidden="true">#</a> Additional Configurations</h3><p>If you already use a separate ESLint configuration and want to include<code>eslint-config-next</code>, ensure that it is extended last after other configurations. For example:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>{
  &quot;extends&quot;: [&quot;eslint:recommended&quot;, &quot;next&quot;]
}

</code></pre></div><p>The<code>next</code>configuration already handles setting default values for the<code>parser</code>,<code>plugins</code>and<code>settings</code>properties. There is no need to manually re-declare any of these properties unless you need a different configuration for your use case. If you include any other shareable configurations,<strong>you will need to make sure that these properties are not overwritten or modified</strong>. Otherwise, we recommend removing any configurations that share behavior with the<code>next</code>configuration or extending directly from the Next.js ESLint plugin as mentioned above.</p>`,8);function Y(A,F){const t=i("ExternalLinkIcon");return c(),r("div",null,[l,e("p",null,[n("Next.js provides an integrated"),e("a",u,[n("ESLint"),s(t)]),n("experience out of the box. Add"),d,n("as a script to"),h,n(":")]),g,e("p",null,[f,n("updates"),k,n("to error on a number of rules that are warnings by default if they affect"),e("a",m,[n("Core Web Vitals"),s(t)]),n(".")]),x,e("p",null,[n("ESLint also contains code formatting rules, which can conflict with your existing"),e("a",y,[n("Prettier"),s(t)]),n("setup. We recommend including"),e("a",b,[n("eslint-config-prettier"),s(t)]),n("in your ESLint config to make ESLint and Prettier work together.")]),v,e("p",null,[n("If you would like to use"),w,n("with"),e("a",_,[n("lint-staged"),s(t)]),n("to run the linter on staged git files, you'll have to add the following to the"),q,n("file in the root of your project in order to specify usage of the"),j,n("flag.")]),E,e("ul",null,[e("li",null,[n("You have one or more of the following plugins already installed (either separately or through a different config such as"),S,n("or"),L,n("):- "),N,n("- "),I,n("- "),T,n("- "),C,n("- You've defined specific"),B,n("that are different from how Babel is configured within Next.js (this is not recommended unless you have"),V,n(")- You have"),R,n("installed with Node.js and/or TypeScript"),e("a",W,[n("resolvers"),s(t)]),n("defined to handle imports")])]),e("p",null,[n("Then we recommend either removing these settings if you prefer how these properties have been configured within"),e("a",O,[P,s(t)]),n("or extending directly from the Next.js ESLint plugin instead:")]),D])}const H=o(p,[["render",Y],["__file","eslint.html.vue"]]);export{H as default};
