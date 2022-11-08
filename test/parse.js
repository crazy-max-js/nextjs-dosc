const fs = require("fs")
const request = require('superagent');
const cheerio = require('cheerio');
const path = require("path")
let $;
const filenameArr = [
  'basic-features/static-file-serving',
  'basic-features/fast-refresh',
  'basic-features/eslint',
  'basic-features/typescript',
  'basic-features/environment-variables',
  'basic-features/supported-browsers-features',
  'basic-features/script',
  'routing/introduction',
  'routing/dynamic-routes',
  'routing/imperatively',
  'routing/shallow-routing',
  'api-routes/introduction',
  'api-routes/dynamic-api-routes',
  'api-routes/request-helpers',
  'api-routes/response-helpers',
  'api-routes/edge-api-routes',
  'going-to-production',
  'deployment',
  'authentication',
  'testing',
  'accessibility',
  'guides/building-forms',
  'advanced-features/compiler',
  'advanced-features/turbopack',
  'advanced-features/preview-mode',
  'advanced-features/dynamic-import',
  'advanced-features/automatic-static-optimization',
  'advanced-features/static-html-export',
  'advanced-features/module-path-aliases',
  'advanced-features/using-mdx',
  'advanced-features/amp-support/introduction',
  'advanced-features/amp-support/adding-amp-components',
  'advanced-features/amp-support/amp-validation',
  'advanced-features/amp-support/amp-in-static-html-export',
  'advanced-features/amp-support/typescript',
  'advanced-features/customizing-babel-config',
  'advanced-features/customizing-postcss-config',
  'advanced-features/custom-server',
  'advanced-features/custom-app',
  'advanced-features/custom-document',
  'advanced-features/custom-error-page',
  'advanced-features/src-directory',
  'advanced-features/ci-build-caching',
  'advanced-features/multi-zones',
  'advanced-features/measuring-performance',
  'advanced-features/middleware',
  'advanced-features/debugging',
  'advanced-features/error-handling',
  'advanced-features/source-maps',
  'advanced-features/codemods',
  'advanced-features/i18n-routing',
  'advanced-features/output-file-tracing',
  'advanced-features/security-headers',
  'advanced-features/react-18/overview',
  'advanced-features/react-18/streaming',
  'advanced-features/react-18/server-components',
  'advanced-features/react-18/switchable-runtime',
  'upgrading',
  'migrating/incremental-adoption',
  'migrating/from-gatsby',
  'migrating/from-create-react-app',
  'migrating/from-react-router',
  'faq',
  'api-reference/cli',
  'api-reference/create-next-app',
  'api-reference/next/router',
  'api-reference/next/link',
  'api-reference/next/image',
  'api-reference/next/script',
  'api-reference/next/head',
  'api-reference/next/amp',
  'api-reference/next/server',
  'api-reference/next/font',
  'api-reference/next/legacy/image',
  'api-reference/edge-runtime',
  'api-reference/data-fetching/get-initial-props',
  'api-reference/data-fetching/get-server-side-props',
  'api-reference/data-fetching/get-static-paths',
  'api-reference/data-fetching/get-static-props',
  'api-reference/next.config.js/static-optimization-indicator',
  'api-reference/next.config.js/introduction',
  'api-reference/next.config.js/environment-variables',
  'api-reference/next.config.js/basepath',
  'api-reference/next.config.js/rewrites',
  'api-reference/next.config.js/redirects',
  'api-reference/next.config.js/headers',
  'api-reference/next.config.js/custom-page-extensions',
  'api-reference/next.config.js/cdn-support-with-asset-prefix',
  'api-reference/next.config.js/custom-webpack-config',
  'api-reference/next.config.js/compression',
  'api-reference/next.config.js/runtime-configuration',
  'api-reference/next.config.js/disabling-x-powered-by',
  'api-reference/next.config.js/disabling-etag-generation',
  'api-reference/next.config.js/disabling-http-keep-alive',
  'api-reference/next.config.js/setting-a-custom-build-directory',
  'api-reference/next.config.js/configuring-the-build-id',
  'api-reference/next.config.js/configuring-onDemandEntries',
  'api-reference/next.config.js/ignoring-eslint',
  'api-reference/next.config.js/ignoring-typescript-errors',
  'api-reference/next.config.js/exportPathMap',
  'api-reference/next.config.js/trailing-slash',
  'api-reference/next.config.js/react-strict-mode',
  'api-reference/next.config.js/url-imports',
  'api-reference/next.config.js/build-indicator'
];
filenameArr.forEach(item=>{
  parse(item)
})
// const filename = 'basic-features/font-optimization'

function parse(filename){
  const url = 'https://nextjs.org/docs/'+filename
  const savePath = path.join(__dirname,'../docs',filename+'.md')
  if(!fs.existsSync(path.dirname(savePath))){
    mkdirs(path.dirname(savePath))
  }
  request.get(url).end((error,res)=>{
    // cheerio需要先load html
    $ = cheerio.load(res.text);
    const docsContent = $('.docs-content')[0];
    let md = ''
    docsContent.children.forEach((item)=>{
      md += (formatTag(item)+'\n');
    })
    fs.writeFileSync(savePath,md)
  })
}




function formatTag(element){
  if(element.type==='tag'){
    let temp = '';
    if(element.children.length>0){
      element.children.forEach(item=>{
        temp += formatTag(item)
      })
    }
    switch(element.name){
      case 'h1':
        temp = '# ' + $(element).text()
        break;
      case 'h2':
        temp = '## '+ $(element).text();
        break;
      case 'h3':
        temp = '### '+ $(element).text()
        break;
      case 'h4':
        temp = '#### '+ $(element).text();
        break;
      case 'h5':
        temp = '##### '+ $(element).text();
        break;
      case 'code':
        if(element.attribs.class==='inline'){
          temp = '`'+temp+'`'
        }else if(element.attribs.class){
          let className = element.attribs.class
          let classTemp = className.split('-')
          let language = classTemp[1]
          temp = '```'+language+'\n'+$(element).text()+'\n```'
        }else{
          temp = '```\n'+$(element).text()+'\n```'
        }
        break;
      case 'blockquote':
        temp = '> '+ temp.trim();
        break;
      case 'strong':
        temp = '**'+ temp+'**';
        break;
      case 'a':
        temp = `[${temp}](${element.attribs.href})`;
        break;
      case 'p':

        break;
      case 'div':
        temp = ''
        break;
      case 'details':
        temp = ':::details 示例\n'+temp.replace('Examples','')+'\n:::'
        break;
      case 'li':
        temp = '- '+temp
    }
    return temp.trim();


  }else if(element.type==='text'){
    return element.data.trim()
  }
}

function mkdirs(dir){
  if(!fs.existsSync(path.dirname(dir))){
    mkdirs(path.dirname(dir))

  }
  fs.mkdirSync(dir)
}
