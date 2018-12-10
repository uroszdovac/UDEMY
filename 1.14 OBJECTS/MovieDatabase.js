var movies = [
    lifeIsBeautiful = {
        title: 'Life is beautiful',
        rating: 8.6,
        hasWatch: true
    },
    aProphet = {
        title: 'A prophet',
        rating: 7.9,
        hasWatch: false
    },
    talkToHer = {
        title: 'Talk to her',
        rating: 8,
        hasWatch: true
    },
    sneackers = {
        title: 'Sneackers',
        rating: 6.7,
        hasWatch: false
    }    
]

movies.forEach(function(movie){
    buildAString(movie);
})

function buildAString(movie){
    if(movie.hasWatch){
        // console.log('You have watched ' + '"' + movie.title + '"' + ' - ' + movie.rating + ' stars');
        console.log(`You have watched "${movie.title}" - ${movie.rating} stars`);
    }else{
        console.log('You have not seen ' + '"' + movie.title + '"' + ' - ' + movie.rating + ' stars');
    }
}