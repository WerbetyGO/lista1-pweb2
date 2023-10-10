let altura = parseFloat(prompt("Insira sua altura (em metros):"));
let peso = parseFloat(prompt("Insira seu peso (em quilogramas):"));

let imc = peso / (altura * altura);

alert("Seu Índice de Massa Corporal é: " + imc.toFixed(2));
