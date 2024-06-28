const reader = require('readline-sync');

console.log("Informe a sua idade");
let idade = parseInt(reader.prompt());
let somaIdade = idade + 10;
console.log("Sua idade daqui a 10 anos será ", somaIdade);