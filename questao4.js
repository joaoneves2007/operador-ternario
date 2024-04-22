/*
Questão 4: Escreva um código JavaScript utilizando o operador ternário para 
determinar se um número é positivo, negativo ou zero. A variável numero 
contém o valor a ser verificado. Atribua o resultado à variável resultado.
*/

var numero = 5; // Você pode substituir este valor pelo número que deseja verificar
var resultado = numero > 0 ? "positivo" : (numero < 0 ? "negativo" : "zero");

console.log("O número é " + resultado + ".");