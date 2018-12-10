function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    return false;
}

function factorial(num){
    var output = 1;
    for(var i = num; i >     1; i--){
        output = output * i;
    }
    return output;
}

function kebabToSnake(string){
    var output = '';
    for(var i = 0; i < string.length; i++){
        if(string[i] === '-'){
            output += '_';
        }else{
            output += string[i];
        }
    }
    return output;
}