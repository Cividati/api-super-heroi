import { hero } from './classes/hero.js'
import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/create', (req, res) => {
    var hero = new hero(req.query)
    hero.create()
    res.send(hero)
});

app.listen(80)  