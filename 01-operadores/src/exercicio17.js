import leia from 'readline-sync';

var hora = leia.questionFloat("DIGITE A QUANTIDAdE DE HORAS: ")

var minuto = hora * 60;
var segundo = hora * 3600;

console.log(" O VALOR DA HORA EM MINUTOS E: " + minuto)
console.log(" O VALOR DA HORA EM SEGUNDOS E: " + segundo)