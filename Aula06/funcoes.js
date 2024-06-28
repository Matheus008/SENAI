const reader = require('readline-sync');


function somar(num1, num2) {
    return num1 + num2;
}

function executar() {
    console.log("Informe o primeiro número");
    let num1 = parseFloat(reader.prompt());
    console.log("Informe o segundo número");
    let num2 = parseFloat(reader.prompt());
    const result = somar(num1, num2);
    console.log("O resultado da soma é", result);
}

executar();