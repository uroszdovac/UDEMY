var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hi there!');
})

app.get('/bye', function(req, res){
    res.send('Goodbye!!');
})

app.get('/dog', function(req, res){
    console.log('SOMEONE TRIGGERS /DOG PAGE !!!');
    res.send('MEOW!!')
})

app.get('/r/:subredditName', function(req, res){
    var subreddit = req.params.subredditName;
    res.send('WELCOME TO ' + subreddit.toUpperCase() + ' SUBREDDIT!!!');
})

app.get('/r/:subredditName/comments/:id/:title/', function(req, res){
    console.log(req.params);
    res.send('YOU ARE ON THE COMMENTS PAGE!!!');
})

app.get('*', function(req,res){
    res.send('You are a star !!!');
})




// Tell Express to listen for requests ( start server)

app.listen(3000, function(){
    console.log('Server has started!!!');
})