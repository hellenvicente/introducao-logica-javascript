let horas = Number(prompt("Digite a quantidade de horas: "));

alert(
    horas < 5 ? "É madrugada" : 
    horas < 12 ? "É manhã" : 
    horas < 18 ? "É tarde" : "É noite"
)

/*
Explicação do código:

1. O código começa solicitando ao usuário que digite a quantidade de horas usando a 
função `prompt()`.
O valor retornado por `prompt()` é uma string, então usamos `Number()` para 
convertê-lo em um número.

2. Em seguida, o código utiliza o operador ternário para determinar o período do dia
com base na quantidade de horas digitada. A estrutura do operador ternário é aninhada 
para verificar as condições em sequência:
- Se `horas` for menor que 5, a mensagem "É madrugada" é atribuída.
- Se `horas` for menor que 12, a mensagem "É manhã" é atribuída.
- Se `horas` for menor que 18, a mensagem "É tarde" é atribuída.
- Caso contrário, a mensagem "É noite" é atribuída.

3. Por fim, o código exibe uma mensagem usando `alert()`, informando ao usuário o 
período do dia correspondente à quantidade de horas digitada.
*/