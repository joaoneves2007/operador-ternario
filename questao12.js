/*
Questão 12: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa pode votar. A variável idade contém a idade da 
pessoa. Atribua o resultado à variável podeVotar.
*/

var idade = 20; // Você pode substituir este valor pela idade da pessoa
var podeVotar = idade >= 16 ? "pode votar" : "não pode votar";

console.log("A pessoa " + podeVotar + ".");