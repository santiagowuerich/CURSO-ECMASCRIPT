const string = 'Hello';

console.log(string.padStart(6, 'hi')); // hHello Rellena el string con en este casi 'hi' segun la posicion que tenga AL PRINCIPIO
console.log(string.padStart(9, 'hi'));//hihiHello
console.log(string.padStart(8, 'hi'));//hihHello
console.log(string.padStart(7, 'hi'));//hiHello
console.log(string.padStart(15, 'hi'));//hihihihihiHello, rellena los espacios que le faltan con el parametro que le pasas
console.log(string.padEnd(7,'_')); //Hello__ AGREGA AL FINAL