import{_ as t,r as s,o,c as p,b as a,d as e,e as r,a as c}from"./app.1ad2624e.js";const i={},l=a("h1",{id:"create-next-app",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#create-next-app","aria-hidden":"true"},"#"),e(" Create Next App")],-1),u=a("code",null,"create-next-app",-1),h={href:"https://github.com/vercel/next.js/tree/canary/examples",target:"_blank",rel:"noopener noreferrer"},d=c(`<h3 id="interactive" tabindex="-1"><a class="header-anchor" href="#interactive" aria-hidden="true">#</a> Interactive</h3><p>You can create a new project interactively by running:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>npx create-next-app@latest
<span class="token comment"># or</span>
<span class="token function">yarn</span> create next-app
<span class="token comment"># or</span>
<span class="token function">pnpm</span> create next-app

</code></pre></div><p>You will be asked for the name of your project, and then whether you want to create a TypeScript project:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>✔ Would you like to use TypeScript with this project? … No / Yes

</code></pre></div><p>Select<strong>Yes</strong>to install the necessary types/dependencies and create a new TS project.</p><h3 id="non-interactive" tabindex="-1"><a class="header-anchor" href="#non-interactive" aria-hidden="true">#</a> Non-interactive</h3><p>You can also pass command line arguments to set up a new project non-interactively. See<code>create-next-app --help</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>create-next-app <span class="token operator">&lt;</span>project-directory<span class="token operator">&gt;</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>

Options:
  -V, <span class="token parameter variable">--version</span>                      output the version number
  --ts, <span class="token parameter variable">--typescript</span>

    Initialize as a TypeScript project. <span class="token punctuation">(</span>default<span class="token punctuation">)</span>

  --js, <span class="token parameter variable">--javascript</span>

    Initialize as a JavaScript project.

  <span class="token parameter variable">--eslint</span>

    Initialize with eslint config.

  --no-eslint

    Initialize without eslint config.

  --experimental-app

    Initialize as a <span class="token variable"><span class="token variable">\`</span>app/<span class="token variable">\`</span></span> directory project.

  --use-npm

    Explicitly tell the CLI to bootstrap the app using <span class="token function">npm</span>

  --use-pnpm

    Explicitly tell the CLI to bootstrap the app using <span class="token function">pnpm</span>

  -e, <span class="token parameter variable">--example</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">|</span><span class="token punctuation">[</span>github-url<span class="token punctuation">]</span>

    An example to bootstrap the app with. You can use an example name
    from the official Next.js repo or a GitHub URL. The URL can use
    any branch and/or subdirectory

  --example-path <span class="token operator">&lt;</span>path-to-example<span class="token operator">&gt;</span>

    In a rare case, your GitHub URL might contain a branch name with
    a slash <span class="token punctuation">(</span>e.g. bug/fix-1<span class="token punctuation">)</span> and the path to the example <span class="token punctuation">(</span>e.g. foo/bar<span class="token punctuation">)</span>.
    In this case, you must specify the path to the example separately:
    --example-path foo/bar

</code></pre></div><h3 id="why-use-create-next-app" tabindex="-1"><a class="header-anchor" href="#why-use-create-next-app" aria-hidden="true">#</a> Why use Create Next App?</h3><p><code>create-next-app</code>allows you to create a new Next.js app within seconds. It is officially maintained by the creators of Next.js, and includes a number of benefits:</p><ul><li><strong>Interactive Experience</strong>: Running<code>npx create-next-app@latest</code>(with no arguments) launches an interactive experience that guides you through setting up a project.- <strong>Zero Dependencies</strong>: Initializing a project is as quick as one second. Create Next App has zero dependencies.- <strong>Offline Support</strong>: Create Next App will automatically detect if you&#39;re offline and bootstrap your project using your local package cache.- <strong>Support for Examples</strong>: Create Next App can bootstrap your application using an example from the Next.js examples collection (e.g.<code>npx create-next-app --example api-routes</code>).- <strong>Tested</strong>: The package is part of the Next.js monorepo and tested using the same integration test suite as Next.js itself, ensuring it works as expected with every release.</li></ul><h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2><p>For more information on what to do next, we recommend the following sections:</p>`,14);function x(m,g){const n=s("ExternalLinkIcon");return o(),p("div",null,[l,a("p",null,[e("The easiest way to get started with Next.js is by using"),u,e(". This CLI tool enables you to quickly start building a new Next.js application, with everything set up for you. You can create a new app using the default Next.js template, or by using one of the"),a("a",h,[e("official Next.js examples"),r(n)]),e(". To get started, use the following command:")]),d])}const b=t(i,[["render",x],["__file","create-next-app.html.vue"]]);export{b as default};
