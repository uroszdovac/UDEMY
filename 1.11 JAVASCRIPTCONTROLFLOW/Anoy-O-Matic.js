var answer = prompt('Are we there yet?')

while(answer !== 'yes' && answer !== 'yeah' && answer.indexOf('yes') < 0){
    var answer = prompt('Are we there yet?');
}

alert('We finally made it!');
