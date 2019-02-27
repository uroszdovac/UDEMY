var express = require('express');
var router = express.Router({mergeParams: true});
var Campground = require('../models/campground');
var Comment = require('../models/comment');
var middleware = require('../middleware');

// ================
//  COMMENT ROUTES
// ================

router.get('/new', middleware.isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        }else{
            res.render('comments/new', { campground: campground});
        }
    })
    
})

router.post('/', middleware.isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        Comment.create(req.body.comment, function(err, comment){
            if(err){
                req.flash('error', 'Something went wrong');
            }else{
                comment.author.id = req.user._id;
                comment.author.username = req.user.username;
                comment.save();
                campground.comments.push(comment);
                campground.save();
                req.flash('success', 'Successfully added comment');
                res.redirect('/campgrounds/' + req.params.id);
            }
        })
    })
})

// Comments edit route

router.get('/:comment_id/edit', middleware.chekCommentOwnerShip, function(req, res){
    Campground.findById(req.params.id, function(err, foundCmpground){
        if(err || !foundCmpground){
            req.flash('error', 'No campground found');
            return res.redirect('back');
        }
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                res.redirect('back');
            }else{
                res.render('comments/edit', {campgroud_id: req.params.id, comment: foundComment})
            }
        })
    })
    
})

// Comments update 

router.put('/:comment_id', middleware.chekCommentOwnerShip, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err){
        if(err){
            res.redirect('back');
        }else{
            res.redirect('/campgrounds/' + req.params.id);
        }
    })
})

// Comments destroy

router.delete('/:comment_id', middleware.chekCommentOwnerShip, function(req, res){
    Comment.findByIdAndDelete(req.params.comment_id, function(err){
        if(err){
            console.log(err);
        }else{
            req.flash('success', 'Comment deleted')
            res.redirect('/campgrounds/' + req.params.id);
        }
    });
})

module.exports = router;
