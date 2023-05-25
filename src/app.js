import express from "express";

const app = express();

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

export default app