const reader = require('readline-sync');


function media(num1) {
    return (num1 * 0.1 + num1);
}

function executar() {
    console.log("Informe o primeiro número");
    let num1 = parseFloat(reader.prompt());
    const result = media(num1);
    console.log("O resultado da soma é", result);
}

executar();