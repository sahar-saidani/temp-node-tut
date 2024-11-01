const http = require('http')
const server = http.createServer((req,res) =>{
    if (req.url === '/'){
        res.end("welcome to our home page ")
    }
    if (req.url === '/about'){
        res.end('welcome to our short history')
    }
    res.end(`
    <h1> Oops!!! </h1>
    <p>we can't seem to find this page </p>
    <a href='/'>back to home </a>`)
})

server.listen(5000)
/* quand tu ecrit sur le browser localhost:5000 yo5rojlik le message "welcome sahroura" */