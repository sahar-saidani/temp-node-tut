const {readFile, writeFile} = require('fs')

 readFile ('./content/first.txt','utf8',(err,result) =>{
    if (err) {
        console.log(err)
        return
    }
    const first = result
    writeFile(`./content/second.txt`,`here hhh : ${first}`,(err,result) =>{
        if (err) {
            console.log(err)
            return
        }
        
        })
 })
