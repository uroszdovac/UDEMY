var num = 5;


var guessedNum = prompt('Guess the number!');

if(Number(guessedNum) > num){
    alert('Too high!');
}else if(Number(guessedNum) < num){
    alert('Too low!');
}else{
    alert('You guessed the number!');
}
