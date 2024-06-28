const reader = require('readline-sync');

console.log('Insira o valor do produto:');
let produto = parseInt(reader.prompt());

let produtoMaisCaro = produto * 0.10 + produto;

console.log("O valor do produto com um acrescimo de 10% é: ", produtoMaisCaro)