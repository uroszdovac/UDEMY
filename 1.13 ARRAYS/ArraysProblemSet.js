function printReverse(arr){
    var print = [];
    for(var i = arr.length - 1; i >= 0; i--){
        print.push(arr[i]);
    }
    console.log(print);
}

function isUniform(arr){
    var elem = arr[0]; 
    for(var i = 1; i < arr.length; i++){
        if(elem !== arr[i]){
            return false;
        }
    }
    return true;
}

function sumArray(arr){
    var sum = 0;
    arr.forEach(function(elem){
        sum += elem;
    })
    console.log(sum);
}

function max(arr){
    var max = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}