var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cat_app', { useNewUrlParser: true });


var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})

var Cat = mongoose.model('Cat', catSchema);

// var george = new Cat({
//     name: 'Mrs. Norris',
//     age: 7,
//     temperament: 'Evil'
// })

// george.save(function(err, cat){
//     if(err){
//         console.log('Something went wrong!!');
//     }else{
//         console.log('We just saved cat to db!');
//         console.log(cat);
//     }
// })

Cat.create({
    name: 'Snow White',
    age: 5,
    temperament: 'Nice'
}, function(err, cat){
    if(err){
        console.log('Wrong');
    }else{
        console.log(cat);
    }
})

Cat.find({}, function(err, cats){
    if(err){
        console.log('OH NO ERROR');
        console.log(err);
    }else{
        console.log('ALL THE CATS');
        console.log(cats);
    }
})