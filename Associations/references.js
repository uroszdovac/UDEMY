var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_demo_2', { useNewUrlParser: true });

var Post = require('./models/post');    
var User = require('./models/user');



// User.create({
//     email: 'bob@bleacher.com',
//     name: 'Bob Blecher'
// })

// Post.create({
//     title: 'How to cook best burger part ',
//     content: 'kiubi iubiboib trsreers nklnn!!!!'
// }, function(err, post){
//     User.findOne({email: 'bob@bleacher.com'}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         }else{
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     console.log(data);
//                 }
//             })
//         }
//     })
// })

// User.findOne({email: 'bob@bleacher.com'}).populate('posts').exec(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// })

