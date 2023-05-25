import app from "./src/app.js";

const port = 3000;


app.listen(port,() =>{
    console.log(`Servidor em http://localhost:${port}`)
})

//para atualizar automatico sem ctrl + c, npm i nodemon -D , em scripts add "dev": "nodemon server.js" e npm run dev