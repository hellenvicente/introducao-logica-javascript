let numero = Number(prompt("Digite um número: "))

let resultado = numero % 2 === 0 ? "par" : "ímpar"

alert(`O número ${numero} é ${resultado}.`)

/*
=== Explicação do código:

1. O código começa solicitando ao usuário que digite um número usando a função `prompt()`.
O valor retornado por `prompt()` é uma string, então usamos `Number()` para convertê-lo 
em um número.

2. Em seguida, o código utiliza o operador ternário para verificar se o número é par 
ou ímpar. A expressão `numero % 2 === 0` verifica se o número é divisível por 2 sem 
deixar resto, o que indica que é um número par. Se a condição for verdadeira, a variável 
`resultado` recebe a string "par". Caso contrário, recebe "ímpar".

3. Por fim, o código exibe uma mensagem usando `alert()`, informando ao usuário se o 
número digitado é par ou ímpar.
*/