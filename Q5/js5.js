function soma(numero1, numero2) {
    return numero1 + numero2;
}

let numero1 = parseFloat(prompt("Insira o primeiro número"));
let numero2 = parseFloat(prompt("Insira o segundo número"));

let resultado = soma(numero1, numero2);

alert("A soma dos números é: " + resultado);
