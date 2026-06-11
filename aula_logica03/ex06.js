let peso = Number(prompt("Digite o seu peso").replace(",", "."));
let altura = Number(prompt("Digite a sua altura").replace(",", "."));

let imc = peso / (altura * altura);

let resultado = (
    imc < 18.5 ? "Você está abaixo do peso" :
    imc < 25 ? "Você está com o peso normal" :
    imc < 30 ? "Você está com sobrepeso" :
    imc < 35 ? "Você está com obesidade grau 1" :
    imc < 40 ? "Você está com obesidade grau 2" : "Você está com obesidade grau 3"
);
alert(`seu imc é: ${imc.toFixed(2)}\n${resultado}`);

/*
=== Explicação do código:

1. O código começa solicitando ao usuário que digite seu peso e altura usando a função `prompt()`. 
Os valores retornados por `prompt()` são strings, então usamos `Number()` para convertê-los em números. 
Além disso, usamos `replace(",", ".")` para garantir que o formato decimal seja reconhecido corretamente, 
substituindo vírgulas por pontos.

2. Em seguida, o código calcula o Índice de Massa Corporal (IMC) usando a fórmula: 
IMC = peso / (altura * altura).

3. O código utiliza o operador ternário para determinar a categoria do IMC com base no valor calculado. 
Ele verifica várias faixas de IMC e atribui uma mensagem correspondente à variável `resultado`.

4. Por fim, o código exibe uma mensagem usando `alert()`, informando ao usuário seu 
IMC arredondado para duas casas decimais e a categoria correspondente.
*/