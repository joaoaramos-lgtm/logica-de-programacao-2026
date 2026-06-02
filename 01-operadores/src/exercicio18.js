import leia from 'readline-sync'

var distancia = leia.questionFloat("DIGITE A DISTANCIA PERCORRIDA: ");
var litros = leia.questionFloat("DIGITE A QUANTIDADE DE LITROS GASTOS: ");

var consumo = distancia / litros;

console.log("O CONSUMO MEDIO E DE : " + consumo + "Km/L");