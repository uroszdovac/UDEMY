$('#btn').click(function(){
    $.ajax({
        method: 'GET',
        url: 'https://baconipsum.com/api/?type=meat-and-fill'
    })
    .done(function(data){
        $('p').text(data[0]);
        console.log(data);
    })
    .fail(function(){
        alert('OH NO FAILED!!!!')
    })
})

$('#getBtn').click(function(){
    $.get('https://api.github.com/users/uroszdovac')
    .done(function(data){
        console.log(data.login);
    })
    .fail(function(){
        console.log('ERROR');
    })
})

$('#postBtn').click(function(){
    var job = {posao: 'frontend', plata: '400$'}
    $.post('https://www.google.com', job)
    .done(function(data){
        console.log('HI');
    })
    .fail(function(){
        console.log('ERROR');
    })
})

$('#getJSONBtn').click(function(){
    $.getJSON('https://api.github.com/users/uroszdovac')
    .done(function(data){
        console.log(data.login);
    })
    .fail(function(){
        console.log('ERROR');
    })
})