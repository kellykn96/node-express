import express from "express";

const app = express();
app.use(express.json()) //post interpretar json para adicionar atributos

const frutas = [
    {id: 1, "fruta": "maçã"},
    {id: 2, "fruta": "banana"}
]

app.get('/', (req,res) => {
    res.status(200).send('ok');
})

app.get('/frutas', (req, res) => {
    res.status(200).json(frutas)
})

app.post('/frutas', (req,res) =>{
    frutas.push(req.body);
    res.status(201).send('Fruta cadastrada')
}) //ir em postman fazer um get de http://localhost:3000/frutas e um post dele também.
//o post precisa ter um body - raw - json (app.use)
/*no body de post, add um objeto {
    "id": 3,
    "fruta": "laranja"
} */

export default app