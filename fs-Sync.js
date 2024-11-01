const {readFileSync, writeFileSync} = require('fs')
/* const fs = require ('fs')
fs.readFileSync */
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first,second)
writeFileSync('./content/first.txt',`hi hi hi :${first},${second}` )