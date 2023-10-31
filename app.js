const express = require('express');
const app = express();
const port = 3000;
const data = [{
    'name': 'schools',
    'descriptions':'vfdvbjfdvbjkfdvjkdfnvjkfdnvjdfnvjdf'
}]
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));

app.set('views', './views')
app.set('view engine', 'ejs')

data.map((el) => {
    app.get('', (req, res) => {
        res.render('src/about', {text: `${el.name}`})
    })
})


app.listen(port, () => console.log(`Listen port ${port}`));