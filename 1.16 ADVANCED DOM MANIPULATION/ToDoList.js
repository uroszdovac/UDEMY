var lis = document.querySelectorAll('li');

lis.forEach(function(li){
    li.addEventListener('click', function(){
        li.classList.toggle('lT');
    })
    li.addEventListener('mouseover', function(){
        li.classList.add('selected');
    })
    li.addEventListener('mouseout', function(){
        li.classList.remove('selected');
    })
})