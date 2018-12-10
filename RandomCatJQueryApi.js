$('#catBtn').click(function(){
    $.get('http://aws.random.cat/meow')
    .done(function(data){
        $('#catImage').attr('src', data.file);
    })
    .fail(function(){
        console.log('ERROR');
    })
})

var p = document.querySelector('#p');

console.log(p);
