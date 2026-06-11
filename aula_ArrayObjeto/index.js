/* array = entre colchetes
objetos = entre chaves
da para criar um array de objetos */

const divlistaAlunos = document.getElementById("listaAlunos");
let alunos = [
    {nome: "João", idade: 20,},
    {nome: "Maria",idade: 22,},
    {nome: "Pedro",idade: 19,},
    {nome: "Ana",idade: 21,},
    {nome: "Lucas",idade: 23,},
    {nome: "Carla",idade: 20,},
    {nome: "Rafael",idade: 22,},
    {nome: "Fernanda",idade: 19,},
    {nome: "Gustavo",idade: 21,},
    {nome: "Isabela",idade: 23,},
    {nome: "Bruno",idade: 20,},
    {nome: "Camila",idade: 22,},
    {nome: "Diego",idade: 19,},
    {nome: "Larissa",idade: 21,},
    {nome: "Matheus",idade: 23,},
    {nome: "Sofia",idade: 20,},
    {nome: "Felipe",idade: 22,},
    {nome: "Juliana",idade: 19,},
    {nome: "Ricardo",idade: 21,},
    {nome: "Amanda",idade: 23,},
    {nome: "Thiago",idade: 20,},
    {nome: "Gabriela",idade: 22,},
    {nome: "Vitor",idade: 19,},
    {nome: "Larissa",idade: 21,},
    {nome: "Bruna",idade: 23,},
    {nome: "Rafael",idade: 20,},
    {nome: "Camila",idade: 22,},
    {nome: "Diego",idade: 19,},
    {nome: "Larissa",idade: 21,},
    {nome: "Matheus",idade: 23,},
];

for (let i = 0; i < alunos.length; i++) {
    divlistaAlunos.innerHTML += `<li> ${alunos[i].nome},
    ${alunos[i].idade} anos</li>`;
}
