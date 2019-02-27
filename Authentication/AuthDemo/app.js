var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    User = require('./models/user'),
    localStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose')


mongoose.connect('mongodb://localhost/auth_demo_app', { useNewUrlParser: true });
var app = express();

app.use(require('express-session')({
    secret: 'bla bla bla',
    resave: false,
    saveUninitialized: false
}))


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use( new localStrategy( User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ===========
// ROUTES
// ===========


app.get('/', function(req, res){
    res.render('home');
})

app.get('/secret', isLoggedIn, function(req, res){
    res.render('secret');
})

// Auth Routes

// shhow register form
app.get('/register', function(req, res){
    res.render('register');
})

// handling user sign up
app.post('/register', function(req,res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate('local')(req, res, function(){
            res.redirect('/secret')
        })
    })
})

// Login Routes
//render login form

app.get('/login', function(req, res){
    res.render('login');
})

// login logic

app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
}), function(req, res){

})

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next;
    }
    res.redirect('/login');
}

app.listen(3000, function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Server has started!');
        
    }
})