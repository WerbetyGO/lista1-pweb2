let num = parseInt(prompt("Insira um número para a tabuada de multiplicação"));

console.log("Tabuada de multiplicação para o número " + num);

for (let i = 1; i <= 10; i++) {
    let resultado = num * i;
    console.log(num + " x " + i + " = " + resultado);
}
