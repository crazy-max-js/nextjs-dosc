const fs = require("fs")
const request = require('superagent');
const cheerio = require('cheerio');
let $;
request.get('https://nextjs.org/docs/going-to-production').end((error,res)=>{
  // cheerio需要先load html
  $ = cheerio.load(res.text);
  const docsContent = $('.docs-content')[0];
  let md = ''
  docsContent.children.forEach((item)=>{
    md += (formatTag(item)+'\n');
  })
  fs.writeFileSync('./test.md',md)
})

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

// const file = fs.readFileSync('./file.html').toString().trim()
//
// let fileMD = file.replaceAll(/<code class="inline">(.+?)<\/code>/ig,'`$1`')
// fileMD = fileMD.replaceAll(/<li[\s\S]*?>([\s\S]*?)<\/li>/ig,'- $1');
// fileMD = fileMD.replaceAll(/<strong>(.+?)<\/strong>/ig,'**$1**')
// fileMD = fileMD.replaceAll(/<h1[\s\S]*?>([\s\S]+?)<\/h1>/ig,'# $1')
// fileMD = fileMD.replaceAll(/<h2[\s\S]*?>([\s\S]+?)<\/h2>/ig,'## $1')
// fileMD = fileMD.replaceAll(/<h3[\s\S]*?>([\s\S]+?)<\/h3>/ig,'### $1')
// fileMD = fileMD.replaceAll(/<h4[\s\S]*?>([\s\S]+?)<\/h4>/ig,'#### $1')
// fileMD = fileMD.replaceAll(/<h5[\s\S]*?>([\s\S]+?)<\/h5>/ig,'##### $1')
//
// fileMD = fileMD.replaceAll(/<a.+href="([\s\S]+?)">([\s\S]+?)<\/a>/ig,'[$2]($1)')
// fileMD = fileMD.replaceAll('<p>','')
// fileMD = fileMD.replaceAll('</p>','')
// fileMD = fileMD.replaceAll('<ul>','')
// fileMD = fileMD.replaceAll('</ul>','')
// fileMD = fileMD.replaceAll(/<span[\s\S]+?>/ig,'')
// fileMD = fileMD.replaceAll('</span>','')
// fileMD = fileMD.replaceAll(/<svg[\s\S]+?<\/svg>/ig,'')
// fileMD = fileMD.replaceAll(/<pre[\s\S]+?><code[\s\S]+?>([\s\S]+?)<\/code><\/pre>/ig,'```js\n$1```')
// fileMD = fileMD.replaceAll('&lt;','<');
// fileMD = fileMD.replaceAll('&gt;','>');
// fileMD = fileMD.replaceAll(/\n(\s+)/ig,'')
//
//
//
//
//
//
// fs.writeFileSync('./file.md',fileMD)

