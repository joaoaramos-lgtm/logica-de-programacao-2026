import leia from 'readline-sync';

//ENTRADA

var altura = leia.questionFloat('DIGITE A ALTURA DO RETANGULO: ');
var largura = leia.questionFloat('DIGITEA LARGURA DO RETANGULO:');

//PROCESSAMENTO
var area = altura * largura;

//SAIDA
console.log("AREA DO RETANGULO E: " + area.toFixed(2));
