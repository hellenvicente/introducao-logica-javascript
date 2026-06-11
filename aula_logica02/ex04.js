let nome = prompt("Digite seu nome:");

if (nome) {
    let letras = nome.length;
    let mensagem = ""

    if (letras <= 6) {
        mensagem = ("AAAAh um pequenp nome!! ><");
    } else {
        mensagem = ("ÓÓÓ você tem um nome grande!!>O<");
    }
    alert(`O nome ${nome} tem ${letras} letras. ${mensagem}`);
} else {
    alert("Nenhum nome foi digitado.");
}

