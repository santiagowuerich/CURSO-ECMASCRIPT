let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' +world+ ' ! ';


//Template literals
let epicPhrase2 = `${hello} ${world}!`; //Se utilizan comillas francesas
console.log(epicPhrase2); //mostramos

//Multi-line strings

let lorem1 = 'esto es un string \n' + 'esto es otra linea \n';

let lorem2 = `Esta es una frase epica
esto es la continuacion de esa frase epica 
`; //con las comillas francesas podemos hacer espacio o enter y seguir funcionando sin la utilzación de \n que se tiene que ocupar normalmente en js

console.log(lorem1);
console.log(lorem2);

