import leia from 'readline-sync'

//Entrada
var celsius = leia.questionFloat("Digite a temperatura em Graus Celsius: ")

//Processamento
var farehaint = (celsius * 1.8) + 32;
var kelvin = celsius + 273.15;

//Saida
console.log(celsius + " graus celsius e igual a " + farehaint + " graus farehaint."); 
console.log(celsius + " graus celsius e igual a " + kelvin + " graus kelvin."); 
