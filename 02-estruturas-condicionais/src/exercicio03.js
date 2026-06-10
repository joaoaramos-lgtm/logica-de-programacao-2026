import leia from 'readline-sync';

var placa = leia.question("DIGITE O ULTIMO DA SUA PLACA: ");
var ultimoDigito = placa[placa.length - 1];

if(ultimoDigito === '0' || ultimoDigito === '1'){
    console.log("VOCÊ NÃO PODE RODAR NA SEGUNDA-FEIRA");
} else if (ultimoDigito === '2' || ultimoDigito === '3'){
    console.log("VOCÊ NÃO PODE RODAR NA TERÇA-FEIRA")
} else if (ultimoDigito === '4' || ultimoDigito === '5') {
    console.log("VOCÊ NÃO PODE RODAR NA QAURTA-FEIRA")
} else if (ultimoDigito === '6' || ultimoDigito === '7') {
    console.log("VOCÊ NÃO PODE RODAR NA QUINTA-FEIRA")
} else if (ultimoDigito === '8' || ultimoDigito === '9') {
    console.log("VOCÊ NÃO PODE RODAR NA SEXTA-FEIRA")
}