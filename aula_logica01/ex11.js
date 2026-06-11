let valor1 = prompt("Digite o primeiro valor:");
let valor2 = prompt("Digite o segundo valor:");

auxiliar = valor1; // A variável auxiliar é usada para armazenar o valor de valor1 antes de ser sobrescrito por valor2.
valor1 = valor2;
valor2 = auxiliar;

alert("Os valores foram trocados:\nValor 1: " + valor1 + "\nValor 2: " + valor2);

// "\n" = quebra de linha no alert para melhor visualização dos valores.