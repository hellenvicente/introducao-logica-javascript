let valor = Number(prompt("Digite o valor das compras: "));
let codDesconto = prompt("Digite o código do desconto: ");

let valorFinal = codDesconto === "DESC10" ? valor * 0.9 : valor;

valorformatado = valorFinal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

alert(`O valor final a ser pago é: ${valorformatado}`);





