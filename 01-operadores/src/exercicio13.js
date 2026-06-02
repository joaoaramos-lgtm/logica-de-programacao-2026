import leia from 'readline-sync'

//ENTRADA
var numero = leia.questionInt("DIGITE UM NUMERO: ")

//PROCESSAMENTO

var dobro = numero * 2;
var triplo = numero * 3;

//SAIDA
console.log("O NUMERO E: " + numero)
console.log("O DOBRO DO NUMERO E: " + dobro)
console.log("O TRIPLO DO NUMERO E: " + triplo)
