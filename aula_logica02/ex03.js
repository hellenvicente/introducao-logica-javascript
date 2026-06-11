let frase = prompt("Digite uma frase:");

if (frase) {
    let resultado = frase.toLowerCase(); 
    alert(resultado);
} else {
    alert("Nenhuma frase foi digitada.");
}

/*
O código acima solicita ao usuário que digite uma frase e ela será convertida
para letras minúsculas usando o método `toLowerCase()`. 
Caso, o usuário não digite nada ou cancele a entrada, uma mensagem informando
que nenhuma frase foi digitada será exibida.
*/