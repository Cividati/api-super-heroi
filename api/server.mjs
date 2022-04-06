import { Hero } from './classes/hero.mjs'
import express from 'express';
import fs from 'fs'
import Showdown from 'showdown';
const app = express()
const PORT = 80

app.get('/', (req, res) => {
    const Fs = fs
    var data;
    try {
      data = Fs.readFileSync('../../README.md', 'utf8')
    } catch (err) {
      console.error(err)
    }
  
    // convert markdown to html
    var showdown  = Showdown,
      converter = new showdown.Converter(),
      html      = converter.makeHtml(data);
  
    res.send(html)
});

app.get('/create', (req, res) => {
    var hero = new Hero(req.query)
    hero.create()
    res.send(hero)
});

app.get('/read', (req, res) => {
    // NOT WORKING
    var hero = new Hero(req.query)
    hero.read()
    res.send(hero)
});

app.get('/update', (req, res) => {

    var hero = new Hero(req.query)
    hero.update()
    res.send(hero)
});

app.get('/delete', (req, res) => {
    var hero = new Hero(req.query)
    hero.delete()
    let ret = {
        name: hero.name,
        status: 'deleted'
    }
    res.send(ret)
});

app.listen(PORT)  