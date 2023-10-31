const express = require('express');
const app = express();
const port = 3000;

app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {text: 'Привет это главная страница'})
})

app.get('/about', (req, res) => {
    res.render('src/about', {text: 'Привет это об нас страница'})
})



app.listen(port, () => console.log(`Listen port ${port}`));