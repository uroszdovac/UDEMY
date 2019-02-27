var express = require('express');

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
})

app.get('/fallinlovewith/:thing', function(req, res){
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
})

app.get('/posts', function(req, res){
    var posts = [
        {title: 'Ja sam u Americi', author: 'Pera'},
        {title: 'Radim sa Jelenom', author: 'Zika'},
        {title: 'Ruzne su mi pesme', author: 'Mika'}
    ]

    res.render('posts', {posts: posts});
})

app.listen(3000, function(){
    console.log('Server has started!!!');
})