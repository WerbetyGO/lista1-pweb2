let num = parseInt(prompt("Insira um número para calcular o fatorial:"));

var fatorial = 1;

if (num >= 0) {
    for (var i = 1; i <= num; i++) {
        fatorial *= i;
    }
    alert("O fatorial de " + num + " é " + fatorial);
} else {
    alert("Insira um número não negativo.");
}
