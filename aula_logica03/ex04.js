let a1 = Number(prompt("Digite a idade da primeira pessoa:"));
let a2 = Number(prompt("Digite a idade da segunda pessoa:"));

alert(
    a1 > a2 ? "A primeira pessoa é mais velha." :
    a1 < a2 ? "A segunda pessoa é mais velha." :
    "As duas pessoas têm a mesma idade."
);
