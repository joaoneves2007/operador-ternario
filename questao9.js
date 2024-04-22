/*
Questão 9: Escreva um código JavaScript utilizando o operador ternário para 
determinar se um ano é bissexto. A variável ano contém o ano a ser verificado. 
Atribua o resultado à variável resultado. 
*/

var ano = 2024; // Você pode substituir este valor pelo ano que deseja verificar
var resultado = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0 ? "é bissexto" : "não é bissexto";

console.log("O ano " + resultado + ".");