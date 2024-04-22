/*
Questão 13: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é elegível para a aposentadoria. A variável idade 
contém a idade da pessoa e a variável sexo indica o sexo ( 'masculino' ou 
'feminino'). Atribua o resultado à variável elegivel.
*/

var idade = 65; // Você pode substituir este valor pela idade da pessoa
var sexo = 'feminino'; // Substitua por 'masculino' se for o caso
var elegivel = (sexo === 'feminino' && idade >= 60) || (sexo === 'masculino' && idade >= 65) ? "é elegível" : "não é elegível";

console.log("A pessoa " + elegivel + " para a aposentadoria.");