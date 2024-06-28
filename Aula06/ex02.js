const reader = require('readline-sync');

console.log('Insira a 1° nota:');
let nota01 = parseInt(reader.prompt());
console.log('Insira a 2° nota:');
let nota02 = parseInt(reader.prompt());
console.log('Insira a 3° nota:');
let nota03 = parseInt(reader.prompt());

let media = (nota01 + nota02 + nota03) / 3;

console.log("A média é:", media);