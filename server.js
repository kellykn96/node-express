const http = require("http")
const port = 3000;

const rotas ={
    '/': 'página inicial',
    '/1': 'página 1',
    '/2': 'página 2',
    '/3': 'página 3',
    '/ola': 'olá',
    '/oi': 'oi'
}
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end(rotas[req.url])
})

server.listen(port,() =>{
    console.log(`Servidor em http://localhost:${port}`)
})

//para atualizar automatico sem ctrl + c, npm i nodemon -D , em scripts add "dev": "nodemon server.js" e npm run dev