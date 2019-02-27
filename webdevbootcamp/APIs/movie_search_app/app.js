var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render('search')
})

// app.get('/searchMovie', function(req, res){
//     var s = req.body.movieName;
//     app.get('/result', function(req, res){
//         request('http://www.omdbapi.com/:s/apikey=thewdb', function(error, response, body){
//             if(!error && response.statusCode == 200){
//                 var data = JSON.parse(body);
//                 res.render('results', {data: data});
//             }
//         })
//     })
    
// })

app.get('/results', function(req, res){
    var s = req.query.movieName;

    var url = "http://www.omdbapi.com/?s=" + s + "&apikey=thewdb";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render('results', {data: data});
        }
    })
})

app.listen(3000, function(){
    console.log('Movie app is started!!');
})