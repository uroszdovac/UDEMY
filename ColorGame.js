var colors = generateRandomCOlors(6)

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var pickedColor = pickColor();
var messageDisplay = document.querySelector('#messageDisplay');
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', function(){
    //generate all new colors
    colors = generateRandomCOlors(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to matched picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = '#232323';
})

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener('click', function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = 'Correct!';
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = 'PLAY AGAIN ?'
        }else{
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try Again';
        }
    })
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
    
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomCOlors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push to array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}


function randomColor(){
    //pick a 'red' from 0 - 255
    var r = Math.floor(Math.random() * 256)
    //pick a 'green' from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a 'blue' from 0 - 255
    var b = Math.floor(Math.random() * 256)
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}