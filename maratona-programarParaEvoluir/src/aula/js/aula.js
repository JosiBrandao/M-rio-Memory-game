// let NomeFacilitador01 = "Luis";
// let NomeFacilitador02 = "Maria";
// console.log(NomeFacilitador01)
// NomeFacilitador01 = "João";
// console.log(NomeFacilitador01)
// //No JS usa-se o // para fazer um comentário, ou o atalho CTRL + :

// let idade = 36
// let altura = 1.63

// let isHeHuman = true;
// const gostaDeCamarao = false

// let indefinido = undefined
// let nulo = null

// //tipos de estruturas de dados: 
// let tipoArray = [];
// //Num array posso armazenar vários dados dentro de uma única variável. É como se fosse um único endereço
// let arrayJosi = ["Josi", 36, 1.63, true, false];
// let notasDaTurma = [10, 8, 6, 9, 1, 0];

// console.log(arrayJosi);

// //objeto:
// let tipoObjeto = {};

// let objetoJosi = {
//   name: "Josi",
//   idade: 36,
//   altura: 1.63,
//   isHuman: true
// }
// console.log(objetoJosi);

// var name3 = "Jair";
// console.log(name3);

// //Operadores lógicos: 
// //igualdade == ou ===
// console.log(5 == "5");
// console.log(5 === "5")
// //diferente:
// console.log(5 != 6);
// //o !== avalia a igualdade e o tipo, se é diferente e do mesmo tipo ou diferente e igual. 
// console.log(5 !== "5");
// //maior > e < menor que:
// console.log(5 > 9);
// console.log(5 < 9);
// console.log(5 <= 5);

// let age = 18;
// console.log(age >= 18);

// //Operadores matemáticos:
// let soma = 5 + 5;
// console.log(soma);

// let n1 = 5;
// let n2 = 6;
// let n3 = 5;
// let soma2 = n1 + n2 + n3;
// console.log(soma2);

// //Multiplicação:
// let mult1 = 5;
// let mult2 = 1;
// let mult3 = 5;
// let resultMult = mult1 * mult2 * mult3;
// console.log(resultMult);

// //divisão:
// let div1 = 30;
// let div2 = 2;

// let divResult = div1 / div2;
// console.log(divResult);

// //Operadores:
// // Ou = ||;
// // E = &&;
// // Not = !
// console.log(2 == 2 && 4 == 4);

// console.log(2 == 2 || 4 == 3);

// //Condicionais: If/Else - Se tal coisa for verdadeiro, faça isso, SENÃO, execute a segunda instrução. Nem sempre precisamos usar o Else. Ex:

// let idadePessoa = 17;

// if (idadePessoa >= 18) {
//   console.log("CNH autorizada")
// } else {
//   console.log("CNH NÃO autorizada")
// }

// //Ex Banco: conta Ouro, Prata. Bronze:

// let wage = 3000

// if (wage >= 10000) {
//   console.log("Você será Gold")
// } else if (wage >= 5000 && wage < 10000) {
//   console.log("Você será Silver")
// } else {
//   console.log("Você será Bronze")
// };
//Estrutura de repetição de dados: For e While - loop: como fica a declaração do FOR: Temos uma validação ( ) e um comando { } dentro da validação do FOR fazemos um índice; enquanto ele estiver acontecendo; no final o incremento++. Portanto, fica assim: for(let i; condição de parada; incremeto++){} Esse ++ é uma maneira de somar 1
//Apaguei a declaração do FOR, pois a condição de parada nunca seria falsa e por isso ele entrou em loop infinito. Mas seria assim: for(let index = 0; index < 20; index++){console.log("volta do for numero", index)};
let person = ["Josi", "Jair", "Neuza", "Valen"];
console.log(person[1]);

for (let i = 0; i < person.length; i++) {
    console.log(person[i]);
};



























