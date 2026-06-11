let salario = parseFloat(prompt("Digite o salário do funcionário: "))
let bonus = parseFloat(prompt("Digite o bônus do funcionário: "))

let salarioTotal = salario + bonus

alert("O salário total ficou em: " + salarioTotal.toFixed(2))