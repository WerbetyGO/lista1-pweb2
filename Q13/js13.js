let totalNotas = 5;
let somaNotas = 0;

for (let i = 1; i <= totalNotas; i++) {
    let nota = parseFloat(prompt("Insira a nota " + i + ":"));

    if (!isNaN(nota)) {
        somaNotas += nota;
    } else {
        alert("Nota inválida. Insira um número válido.");
        i--;
    }
}

let media = somaNotas / totalNotas;
alert("A média das notas é: " + media.toFixed(2));
