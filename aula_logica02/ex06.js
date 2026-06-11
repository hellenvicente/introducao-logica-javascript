let nome = prompt("Digite seu nome: ")

if (nome) {
    let resultado = nome.slice(0, 1).toUpperCase() + nome.slice(1).toLowerCase(); // Formata o nome para que a primeira letra seja maiúscula e as demais sejam minúsculas
    let letras = nome.length;
    alert(`O nome ${resultado} tem ${letras} letras.`);
} else {
    alert("Nenhum nome foi digitado.");
}

/*
O código acima solicita ao usuário que digite seu nome. 
Se o usuário fornecer um nome, o código formata o nome para que a primeira letra 
seja maiúscula e as demais sejam minúsculas. Em seguida, ele calcula o número 
de letras no nome e exibe uma mensagem informando o nome formatado e a quantidade 
de letras. Se o usuário não digitar nada, uma mensagem de alerta é exibida indicando 
que nenhum nome foi digitado.
*/