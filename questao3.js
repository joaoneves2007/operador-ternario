/*
Questão 3: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa pode dirigir ou não. A variável idade contém a idade 
da pessoa. Atribua o resultado à variável permissao.
*/

var idade = 18; // Você pode substituir este valor pela idade da pessoa
var permissao = idade >= 18 ? "pode dirigir" : "não pode dirigir";

console.log("A pessoa " + permissao + ".");