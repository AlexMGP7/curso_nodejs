require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const port = process.env.PORT;
const app = express()


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estatico

app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Alexander Gonzalez',
        titulo: 'Curso de node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Alexander Gonzalez',
        titulo: 'Curso de node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Alexander Gonzalez',
        titulo: 'Curso de node'
    });
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})