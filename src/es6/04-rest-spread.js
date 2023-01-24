// arrays destructuring

let fruits = ['Apple', 'Banana'];
let[a, b] =  fruits;
console.log(a, fruits[0]); //se puede utilizar la posición y la variable asignada tambien

// Object destructuring

let user = {username: 'oscar', age: 34};
let {username, age} = user;
console.log(username, age); // se puede utilizar tambien user.username para la primera variable y user.age para la segunda variable

//spread operator

let person = {name: 'oscar', age: 28};
let country = 'MX';

let data = {id: 1, ...person, country}
console.log(data);

// rest

function sum(num, ...values){ //podemos pasar varias variables en values, pero hay que ver la logica si conviene
    console.log(values);
    console.log(num + values[0]);
    return  num + values[0] ;
}
sum(1, 1, 2, 3, 4, 5);

