var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
var url1 = 'http://api.github.com/users/uroszdovac';
var btn = document.querySelector('#btn');
var img = document.querySelector('#img')

fetch(url,{
    method: 'POST',
    body: JSON.stringify({
        name: 'Uroš',
        lastname: 'Mijatović'
    })
})
.then(function(response){
    console.log(response);
    return response.json();
}).then(function(data){
    console.log(data.bpi.EUR.rate);
})

btn.addEventListener('click', function(){
    fetch(url1)
    .then(function(request){
        if(!request.ok){
            throw Error(request.status);
        }
        return request.json();
    })
    .then(function(data){
        console.log('EVRYTHING IS FINE');
        console.log(data.login);
        img.src = data.avatar_url;
    })
    .catch(function(error){
        console.log(error);
    })

    
})