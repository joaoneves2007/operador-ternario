/*
Questão 11: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é um bebê, criança, adolescente, adulto ou idoso. A 
variável idade contém a idade da pessoa. Atribua o resultado à variável 
categoria.
*/

var idade = 30; // Você pode substituir este valor pela idade da pessoa
var categoria = idade < 2 ? "bebê" : 
                 idade < 13 ? "criança" : 
                 idade < 18 ? "adolescente" : 
                 idade < 60 ? "adulto" : 
                 "idoso";

console.log("A pessoa é um(a) " + categoria + ".");