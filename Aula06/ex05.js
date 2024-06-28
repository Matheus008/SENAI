const reader = require('readline-sync');


function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

function executar() {
    console.log("Informe o primeiro número");
    let num1 = parseFloat(reader.prompt());
    console.log("Informe o segundo número");
    let num2 = parseFloat(reader.prompt());
    console.log("Informe o terceito número");
    let num3 = parseFloat(reader.prompt());
    const result = media(num1, num2, num3);
    console.log("O resultado da soma é", result);
}

executar();