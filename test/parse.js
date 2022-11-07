const fs = require("fs")
const file = fs.readFileSync('./file.html').toString().trim()

let fileMD = file.replaceAll(/<code class="inline">(.+?)<\/code>/ig,'`$1`')
fileMD = fileMD.replaceAll(/<li[\s\S]*?>([\s\S]*?)<\/li>/ig,'- $1');
fileMD = fileMD.replaceAll(/<strong>(.+?)<\/strong>/ig,'**$1**')
fileMD = fileMD.replaceAll(/<h1[\s\S]*?>([\s\S]+?)<\/h1>/ig,'# $1')
fileMD = fileMD.replaceAll(/<h2[\s\S]*?>([\s\S]+?)<\/h2>/ig,'## $1')
fileMD = fileMD.replaceAll(/<h3[\s\S]*?>([\s\S]+?)<\/h3>/ig,'### $1')
fileMD = fileMD.replaceAll(/<h4[\s\S]*?>([\s\S]+?)<\/h4>/ig,'#### $1')
fileMD = fileMD.replaceAll(/<h5[\s\S]*?>([\s\S]+?)<\/h5>/ig,'##### $1')

fileMD = fileMD.replaceAll(/<a.+href="([\s\S]+?)">([\s\S]+?)<\/a>/ig,'[$2]($1)')
fileMD = fileMD.replaceAll('<p>','')
fileMD = fileMD.replaceAll('</p>','')
fileMD = fileMD.replaceAll('<ul>','')
fileMD = fileMD.replaceAll('</ul>','')
fileMD = fileMD.replaceAll(/<span[\s\S]+?>/ig,'')
fileMD = fileMD.replaceAll('</span>','')
fileMD = fileMD.replaceAll(/<svg[\s\S]+?<\/svg>/ig,'')
fileMD = fileMD.replaceAll(/<pre[\s\S]+?><code[\s\S]+?>([\s\S]+?)<\/code><\/pre>/ig,'```js\n$1```')
fileMD = fileMD.replaceAll('&lt;','<');
fileMD = fileMD.replaceAll('&gt;','>');
fileMD = fileMD.replaceAll(/\n(\s+)/ig,'')






fs.writeFileSync('./file.md',fileMD)

