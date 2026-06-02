import leia from 'readline-sync'

var corrida01 = leia.questionFloat("Digite o valor da primeira corrida: R$");
var corrida02 = leia.questionFloat("Digite o valor da segunda corrida: R$");
var corrida03 = leia.questionFloat("Digite o valor da terceira corrida: R$");
var corrida04 = leia.questionFloat("Digite o valor da quarta corrida: R$");
var corrida05 = leia.questionFloat("Digite o valor da quinta corrida: R$");

var valorBruto = corrida01 + corrida02 + corrida03 + corrida04 + corrida05;
var valorDescontoApp = valorBruto * (25 / 100); 
var valorLiquido = valorBruto - valorDescontoApp;

console.log("O VALOR TOTAL ARRECADO COM OS DESCONTOS E DE R$" +valorLiquido.toFixed(2))
