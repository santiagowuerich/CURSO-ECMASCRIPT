const user = {username:'gndx',age:34, country:'AR'};
const {username, ...values} = user; //divide y muestra todo lo otro completo como objeto
console.log(username);
console.log(values);