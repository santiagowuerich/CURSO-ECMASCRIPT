//declarando
class User{};
// instancia de una clase
// const newUser = new User();

class user{
    //metodos
    greeting(){
        return 'Hello';
    }
};
const gndx = new user();
console.log(gndx.greeting());
// La línea "class user {" declara una clase llamada "user".
// Los métodos son funciones dentro de una clase. En este caso, hay un método llamado "greeting()" que retorna el string "Hello".
// Los corchetes "{ }" contienen las declaraciones de la clase.
// La línea "};" indica el final de la clase.

const bebeloper = new user();
console.log(bebeloper.greeting()); // segunda llamada al metodo greeting que retorna saludo

class user{
    //Constructor inicializa el elemento, cuando ejecutas va a tirar siempre el Nuevo usuario. 
    constructor(){
        console.log( 'Nuevo usuario');
    }
    greeting(){ //Metodo
        return 'Hello';
    }
}
const david = new user();

//
class user{
    constructor(name){
     this.name = name;
    }
    // metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return  `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());


// SETTERS GETTERS

class user{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return  `${this.speak()} ${this.name} ${this.age}`;
    }


    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n
    }
}
const bebeloper1 = new user('Santiago', 21); //asigna a bebeloper name Santaigo, y this.age 21
console.log(bebeloper1.uAge = 20); //muestra por pantalla 20, debido a que bebeloper.this.age lo cambia a 20

console.log(bebeloper1.greeting()); //muestra por pantalla la funcion greeting que ocupa los 2 metodos y los constructores

//