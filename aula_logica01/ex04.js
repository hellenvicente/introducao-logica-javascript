let valor = prompt("Digite um valor: ");
let valor2 = prompt("Digite outro valor: ");
valor = parseFloat(valor); 
valor2 = parseFloat(valor2); 
//parseFloat é usado para converter a string digitada pelo usuário em um número de ponto flutuante (decimal).   

let resultado = parseFloat(valor) + parseFloat(valor2);

alert("O resultado da soma é: " + resultado);