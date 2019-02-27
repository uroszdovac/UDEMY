var colt = {
    firstName: 'Colt',
    sayHi: function(){
        return 'Hi ' + this.firstName;        
    },
    addNumbers: function(a, b, c, d){
        return this.firstName + ' just calculated ' + (a + b + c + d);
    },
    sayHello: function(){
        setTimeout(function(){
            console.log('Hello ' + this.firstName);
        }.bind(this), 2000);
    }
}

var Uros = {
    firstName: 'Uros'
}

var urosCalc = colt.addNumbers.bind(Uros, 1, 2);

// console.log(colt.sayHi.call(Uros));

// console.log(colt.sayHi());

// console.log(colt.addNumbers.call(Uros, 1, 2, 3, 4));
// console.log(colt.addNumbers.apply(Uros, [1, 2, 3, 4] ));

// console.log(urosCalc(3, 5));

// colt.sayHello();

function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name + ' just barked!');
    }
}

var rusty = new Dog('Rusty', 8);
var fido = new Dog('Fido', 1);

rusty.bark();


function Person(name){
    this.name = name;
}

var uros = new Person('Uros');
var marija = new Person('Marija');

console.log(Person.prototype);

console.log(uros.__proto__ === Person.prototype);

console.log(Person.prototype.constructor === Person);


function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
}

Vehicle.prototype.honk = function(){
    if(this.isRunning){
        console.log('beep');
    }
}

var yugo = new Vehicle('zastava', 'koral 45', 1995);

yugo.turnOn();
yugo.honk();


var arr = [1, 2, 3, 4, 5];

arr.forEach(function(num){
    console.log(num * 2);
})

forEach(arr, function(num, index, array){
    console.log(num * 2);
})

var strings = ['my', 'forEach', 'Example'];
var result = '';

strings.forEach(function(str, i, arr){
    if(arr.length - 1 !== i){
        result += str + ' ';
    }else{
        result += str + '!!!';
    }
})

console.log(result);

setTimeout(function(){
    console.log('bla');
},2000)

var timerId = setTimeout(function(){
    console.log('Never');
}, 20000);

setTimeout(function(){
    console.log('Never hihihi', timerId);
    clearTimeout(timerId);
},2000)

var num = 0;

var clearId = setInterval(function(){
    num++;
    console.log('num: ' + num);
}, 2000);


setTimeout(function(){
    clearInterval(clearId);
}, 16000);

function countDown(seconds){
    var sec = seconds;
    var clearId = setInterval(function(){
        if(sec !== 0){
            console.log(sec);
            sec--;
        }else{
            clearInterval(clearId);
            console.log('Ring Ring Ring');
            
        }
    }, 1000)
}



countDown(4);
console.log('olo');

var p1 = new Promise(function(resolve, reject){
    var num = Math.random();
    if(num < 0.5){
        resolve(num);
    }else{
        reject(num);
    }
})

p1.then(function(lessThen){
    console.log('Number ' + lessThen + ' is less than 0.5!');
}).catch(function(graterThen){
    console.log('Number ' + graterThen + ' is grater than 0.5!');
})

var p2 = new Promise(function(res, rej){
    setTimeout(function(){
        var number = Math.floor(Math.random() * 10);
        res(number);
    }, 4000)
})

p2.then(function(num){
    console.log(num);
})