let valor = parseFloat(prompt("Digite um valor: "))
let valorformatado = valor.toLocaleString("pt-BR",  { 
    style: "currency", 
    currency: "BRL" 
})

alert (`O valor digitado é: ${valorformatado}`)

/* 
O código acima solicita ao usuário que digite um valor, 
converte esse valor para um número de ponto flutuante usando `parseFloat`, 
e depois formata esse número como uma moeda brasileira (Real) 
usando o método `toLocaleString`. Finalmente, exibe o valor formatado em um alerta.
*/