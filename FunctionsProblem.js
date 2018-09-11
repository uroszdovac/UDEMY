function isEven(num){
    if(num % 2 == 1){
        return false;
    }else{
        return true;
    }
}

console.log(isEven(13));

function kebabToSnake(str){
    var newStr = str.replace(/-/g, '_');
    return newStr;
}

console.log(kebabToSnake('hello-world'));

