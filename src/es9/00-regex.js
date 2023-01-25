const regex =  /(\d{4})-(\d{2})-(\d{2})/ ; //forma para que pueda separarse en tablas
const matchers = regex.exec('2022-10-01'); 
console.table(matchers); // muestra en forma de tabla


