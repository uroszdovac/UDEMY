var url = 'https://opentdb.com/api.php?amount=1';

axios.get(url)
.then(function(res){
    console.log(res.data.results[0].question);
})
.catch(function(err){
    if(err.response){
        console.log('Problem whit response!', err.response.status);
    }else if(err.request){
        console.log('Problem with request!',);
    }else{
        console.log('Error:', err.message);
        
    }
})