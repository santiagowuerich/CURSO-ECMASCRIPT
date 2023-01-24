let number = [1, 3, 4 ,6, 7, 8,];
console.log(number.includes(9));

const list = ['oscar','ana','david'];

console.log(list.includes('OSCAR'));//esta forma no valida si escribis Oscar.

let familyEmoji = [..."👨‍👩‍👦‍👦"] //wow se puede borrar a la familia 1 por 1
console.log(
	familyEmoji.includes("👨"),
	familyEmoji.includes("👩"),
	familyEmoji.includes("👦")
);//dan todos true

const list1 = ["Oscar", "Pedro", "Jose"];
const newList = list1.map(item => item.toLowerCase()); // aca se puede utilizar .map o .some
console.log(newList);
console.log(newList.includes('oscar'));

// De esta manera podes pasarle mayusculas o minusculas
const list3 = ['oscar','ana','david'];
const searchValue = 'OsCaR';
const result = list3.some(item => item.toLowerCase() === searchValue.toLowerCase());
console.log(result);