//funciones asincronicas

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)//if
        ? setTimeout(() => resolve ('AsynC!!'), 2000)
        : reject(new Error('Error'));//else
    });
}
const anotherFunction = async () => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log('Hello!');
}

console.log('Before');
anotherFunction();
console.log('After');