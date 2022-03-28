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

app.get('/read', (req, res) => {
    var hero = new hero(req.query)
    hero.read()
    res.send(hero)
});

app.get('/update', (req, res) => {
    var hero = new hero(req.query)
    hero.read()
    res.send(hero)
});

app.get('/delete', (req, res) => {
    var hero = new hero(req.query)
    hero.delete()
    res.send(hero)
});



app.listen(80)  