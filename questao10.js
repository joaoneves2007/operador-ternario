/*
Questão 10: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa pode entrar em um clube. A variável idade contém 
a idade da pessoa e a variável temConvite indica se ela possui um convite. 
Atribua o resultado à variável status.
*/

var idade = 25; // Você pode substituir este valor pela idade da pessoa
var temConvite = true; // Substitua por false se a pessoa não tiver convite
var status = idade >= 18 && temConvite ? "pode entrar" : "não pode entrar";

console.log("A pessoa " + status + " no clube.");