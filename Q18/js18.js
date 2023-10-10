let palavra = prompt("Insira uma palavra para verificar se é um palíndromo:");

palavra = palavra.toLowerCase().replace(/\s/g, '');

let palavraReversa = "";

for (var i = palavra.length - 1; i >= 0; i--) {
    palavraReversa += palavra[i];
}

if (palavra === palavraReversa) {
    alert("A palavra é um palíndromo.");
} else {
    alert("A palavra não é um palíndromo.");
}
