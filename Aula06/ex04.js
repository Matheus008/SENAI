const reader = require('readline-sync');

console.log('Insira a altura:');
let altura = parseInt(reader.prompt());

console.log('Insira a altura:');
let base = parseInt(reader.prompt());

let perimetro = 2*base + 2*altura;

console.log('O perímetro do retângulo é: ', perimetro);
