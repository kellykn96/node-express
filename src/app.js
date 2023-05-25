import express from "express";

const app = express();
app.use(express.json()) //post interpretar json para adicionar atributos

const frutas = [
    {id: 1, "fruta": "maçã"},
    {id: 2, "fruta": "banana"}
]

function buscaFruta(id) {
    return frutas.findIndex(fruta => fruta.id == id)
}

app.get('/', (req,res) => {
    res.status(200).send('ok');
})

app.get('/frutas', (req, res) => {
    res.status(200).json(frutas)
})
//ir em postman fazer um get de http://localhost:3000/frutas e um post dele também.
//o post precisa ter um body - raw - json (app.use)
/*no body de post, add um objeto {
    "id": 3,
    "fruta": "laranja"
} */

app.post('/frutas', (req,res) =>{
    frutas.push(req.body);
    res.status(201).send('Fruta cadastrada')
})

app.put('/frutas/:id', (req, res) => {
    let index = buscaFruta(req.params.id);
    frutas[index].fruta = req.body.fruta;
    res.json(frutas)
})
/* ir no potman fazer put http://localhost:3000/frutas/3 ou outro id , e escrever no body raw json apenas o objeto com fruta e a nova fruta: {
    "fruta":"abacaxi"
}
Ao fazer o get /frutas perceberá que alterou a fruta do id 3
*/


export default app