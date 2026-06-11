let nome = prompt("Digite o nome do aluno:")
let numero = Number(prompt("Digite o número do aluno:"))
let nota = Number(prompt("Digite a nota do aluno:").replace(",", "."))


alert(`aluno(a) ${nome}, matrícula ${numero} está:\n${nota >= 60 ? "Aprovado(a)" : "Reprovado(a)"}`)