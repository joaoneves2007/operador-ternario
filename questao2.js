/*
Questão 2: Escreva um código JavaScript utilizando o operador ternário para 
determinar se um aluno foi aprovado ou reprovado em um exame. A variável 
nota contém a pontuação do aluno. Atribua o resultado à variável status.
*/

var nota = 75; // Você pode substituir este valor pela pontuação do aluno
var status = nota >= 60 ? "aprovado" : "reprovado";

console.log("O aluno está " + status + ".");