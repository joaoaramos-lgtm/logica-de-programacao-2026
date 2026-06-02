import leia from 'readline-sync';

var idade = leia.questionInt("Digite sua idade: ");

var idadeEmMeses = idade * 12;
console.log("Sua idade em meses e " + idadeEmMeses + " meses ")
 var idadeEmdias = idade * 365;
 console.log("Sua idade em dias e " + idadeEmdias + "dias");

