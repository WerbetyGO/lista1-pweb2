let num = Math.floor(Math.random() * 10) + 1; 
let tentativas = 0;
let acertou = false;

do {
    let palpite = parseInt(prompt("Tente adivinhar o número entre 1 e 10:"));

    if (palpite === num) {
        acertou = true;
        break;
    } else {
        tentativas++;
        alert("Tente novamente! Você já fez " + tentativas + " tentativa(s).");
    }
} while (tentativas < 3);

if (acertou) {
    alert("Você acertou o número secreto, que é " + num);
} else {
    alert("Suas tentativas acabaram. O número secreto é " + num);
}
