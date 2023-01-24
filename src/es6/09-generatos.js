function* iterate(array){
    for (let value of array){
    yield value;
    }
}

const it = iterate(['oscar','david','ana','ulises','santi']);
console.log(it.next().value);//trae oscar
console.log(it.next().value);// trae a david por que recuerda su estado no lo vuelve a ejecutar
console.log(it.next().value);// trae a ana
console.log(it.next().value);// ulises
console.log(it.next().value);//santi
console.log(it.next().value);// devuelve undefined una vez terminado el array que pasamos