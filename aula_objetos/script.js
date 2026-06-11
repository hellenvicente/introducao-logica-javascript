/* Introdução a objetos */

/*
Objeto é uma estrutura de dados que pode conter diversos valores,
chamados de propriedades, e funções, chamadas de métodos. 
Ele é utilizado para representar entidades do mundo real e organizar informações 
de forma mais estruturada.
*/

let aluno = {
    nome: "Hellen",
    idade: 19,
    curso: "ADS",
    materiais: ["UI/UX Design", "Lógica de Programação", "Modelagem de Banco de Dados"],
    endereco: {
        rua: "Rua Guiherme Branca",
        numero: 205,
        cidade: "São Paulo",
        estado: "SP"
    }
} 

/* 
Criando um objeto chamado "aluno" com várias propriedades, 
incluindo um array e um objeto aninhado. 
*/

aluno.status = "Ativo"; // Adicionando uma nova propriedade ao objeto aluno

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);
console.log(aluno.status);
console.log(aluno.materiais[0]);
console.log(aluno.materiais[1]);
console.log(aluno.materiais[2]);
console.log(aluno.endereco.rua);
console.log(aluno.endereco.numero);
console.log(aluno.endereco.cidade);
console.log(aluno.endereco.estado);

//console.log é uma função que exibe informações no console do navegador.
