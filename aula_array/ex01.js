let numeros = [2,4,6,8,10];

let numerosMultiplicados = numeros.map((numero) => {return numero * 2;}); 

console.log(numerosMultiplicados);

/* 
map = cria array e retorna as modificações feitas
function = função de guardar para modificar dados
return = retorna o resultado da função modificada
*/

//Versão com for:

let numerosVP = [1,3,5,7,9,11];
let novoArray = []

for (let i = 0; i < numerosVP.length; i++) {
    novoArray.push(numerosVP[i] * 2);
}
console.log(novoArray);