let frutas = ["Banana", "Maçã", "Laranja", "Uva", "Abacaxi"];


frutas.push("Manga"); // Adiciona "Manga" ao final do array
console.log(frutas); // Exibe o array atualizado


frutas.pop(); // Remove o último elemento do array (Manga)
console.log(frutas); // Exibe o array atualizado


frutas.shift(); // Remove o primeiro elemento do array (Banana)
console.log(frutas); // Exibe o array atualizado


frutas.unshift("Melancia"); // Adiciona "Melancia" no início do array
console.log(frutas); // Exibe o array atualizado


console.log(frutas.length); // Exibe o número de elementos no array


console.log(frutas.includes("Uva")); // Verifica se "Uva" está presente no array (true ou false)