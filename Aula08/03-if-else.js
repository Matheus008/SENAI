/*
    OPERADOR DE DESVIO DE FLUXO
    IF/ELSE
        if(expressão lógica) {
            comandos caso expressão verdadeira
        }else {
            ...comandos caso expressão falsa
        }
*/
const terminal = require('readline-sync');
console.log("Informe a sua idade");
let idade = parseInt(terminal.prompt());
if(idade >= 18) {
    console.log('Na sua idade o voto é obrigatório');
}else if(idade >= 16) {
    console.log('Para você o voto é facultativo');
}else {
    console.log("Você não vota ainda");
}