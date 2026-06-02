import leia from 'readline-sync';

var produto = leia.questionFloat("DIGITE O VALOR DO PRODUTO: R$")
var desconto = produto * (10/100);
var valorFinal = produto - desconto;

console.log("O valor do desconto e de: R$" + desconto);
console.log("E o valor final produto e de: R$" + valorFinal);