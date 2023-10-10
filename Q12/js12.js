let num = parseInt(prompt("Por favor, insira um número inteiro positivo maior que 1:"));

let Primo = true;
let divisor = 2;

while (divisor < num) {
    if (num % divisor === 0) {
        Primo = false;
        break;
    }
    divisor++;
}

if (Primo && num > 1) {
    alert(num + " é um número primo.");
} else {
    alert(num + " não é um número primo.");
}
