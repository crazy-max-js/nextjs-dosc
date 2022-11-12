const fs = require("fs")
const request = require('superagent');
const cheerio = require('cheerio');
const path = require("path")
let $;
const filenameArr = [
  'api-reference/next.config.js/rewrites'
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
          temp = ' `'+temp+'` '
        }else if(element.attribs.class){
          let className = element.attribs.class
          let classTemp = className.split('-')
          let language = classTemp[1]
          temp = '```'+language+'\n'+$(element).text()+'```'
        }else{
          temp = '```\n'+$(element).text()+'```'
        }
        break;
      case 'blockquote':
        temp = '> '+ temp.trim();
        break;
      case 'strong':
        temp = ' **'+ temp+'** ';
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
        temp = '- '+temp+'\n'
    }
    return temp;


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
