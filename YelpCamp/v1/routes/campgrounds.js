var express = require('express');
var router = express.Router();
var Campground = require('../models/campground');
var middleware = require('../middleware');

// INDEX Show all campgrounds //

router.get('/', function (req, res) {
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        }else{
            res.render('campgrounds/index', {campgrounds: campgrounds, currentUser: req.user});
        }
    })
    
})


// CREATE Add new campgrounds to DB //

router.post('/', middleware.isLoggedIn, function (req, res) {
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {
        name: name,
        price: price,
        image: image,
        description: description,
        author: author
    }
    Campground.create(newCampground, function(err, newlyCreatedCampground){
        if(err){
            console.log(err);
        }else{
            res.redirect('/campgrounds');
        }
    })
    
})

// NEW Show form to create new campground //

router.get('/new', middleware.isLoggedIn,  function (req, res) {
    res.render('campgrounds/new');
})

// SHOW Shows more info about one campground

router.get('/:id', function(req, res){
    Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground){
        if(err || !foundCampground){
            req.flash('error', 'Campground not found');
            res.redirect('back');
        }else{
            res.render('campgrounds/show', {campground: foundCampground});
        }
    })
})

// EDIT CAMGROUND ROUTE
router.get('/:id/edit', middleware.checkCampgroundOwneShip, function(req, res){
        Campground.findById(req.params.id, function(err, foundCampground){
            res.render('campgrounds/edit', { campground: foundCampground});
        })
})

// UPDATE CAMPGROUND ROUTE  
router.put('/:id', middleware.checkCampgroundOwneShip, function(req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect('/camgrounds');
        }else{
            res.redirect('/campgrounds/' + req.params.id);
        }
    })
})

// DESTROY CAMPGROUND ROUTE
router.delete('/:id', middleware.checkCampgroundOwneShip, function(req, res){
    Campground.findByIdAndDelete(req.params.id, function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect('/campgrounds');
        }
    })
})

module.exports = router;