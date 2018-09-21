// Check Off Specific Todos By Clicking

$('ul').on('click', 'li', function(){
   $(this).toggleClass('completed');
})

// Click on X to delete todos

$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})


$("input[type='text']").keypress(function(event){
    
    if(event.which === 13){
        var todoTExt = $(this).val();
        $(this).val('');
        $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + todoTExt + '</li>');
        
    }    
})

$('.fa-plus').click(function(){
    $("input[type='text']").fadeToggle();
})

