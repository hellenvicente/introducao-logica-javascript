let numero = parseFloat(prompt("Digite um número:"));
let texto = "";

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    texto += `\n ${numero} x ${i} = ${resultado}`;
}
alert("Tabuada do " + numero + ":\n" + texto);

