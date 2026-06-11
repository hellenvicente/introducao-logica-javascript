let frase = prompt("Digite uma frase:");

if (frase) {
    let resultado = frase.toUpperCase();
    alert(resultado);
} else {
    alert("Nenhuma frase foi digitada.");
}

/*
O código acima solicita ao usuário que digite uma frase. 
Se o usuário digitar algo, a frase será convertida para letras maiúsculas 
usando o método `toUpperCase()` e exibida em um alerta. 
Se o usuário não digitar nada (ou cancelar), uma mensagem informando 
que nenhuma frase foi digitada será exibida.
*/