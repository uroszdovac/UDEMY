var btn = document.querySelector('#btn');
var body = document.querySelector('body');
console.log(body);


// btn.addEventListener('click', function(){
//     if(body.style.background !== 'pink'){
//         body.style.background = 'pink';
//     }else{
//         body.style.background = 'white';
//     }
// })

btn.addEventListener('click', function(){
    body.classList.toggle('pink');
})