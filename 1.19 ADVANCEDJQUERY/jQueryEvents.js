// $('h1').click(function(){
//     alert('h1 clicked!!');
// })

$('h1').on('click', function(){
    $(this).css('background', 'salmon');
})

$('button').click(function(){
    // $(this).css('background-color', 'gold');
    var text = $(this).text();
    console.log('You clicked ' + text + ' button');
})

$('input').keypress(function(e){
    // // console.log($(this).val());
    // console.log('You pressed a key!!!');
    if(e.keyCode == 13){
        console.log($(this).val());
    }
    console.log(e.charCode);
    console.log(e.keyCode);
    console.log(e.which);
    console.log(e.key);
    
})

$('button').on('mouseenter', function(){
    $(this).css('font-weight', 'bold');
})

$('button').on('mouseleave', function(){
    $(this).css('font-weight', 'normal');
})