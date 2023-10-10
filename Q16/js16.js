let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let acertou = false;

while (!acertou) {
    let palpite = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):"));
    tentativas++;

    if (palpite === numeroAleatorio) {
        acertou = true;
    } else if (palpite < numeroAleatorio) {
        alert("Tente um número maior");
    } else {
        alert("Tente um número menor");
    }
}

alert("Parabéns! Você adivinhou o número em " + tentativas + " tentativas");
