import leia from 'readline-sync';

//ENTRADA
var anos = leia.questionInt("DIGITE A QUANTIDADE DE ANOS: ")
var meses = leia.questionInt("DIGITE A QUANTIDADE DE MESES: ")
var dias = leia.questionInt("DIGITE A QUANTIDADE DE DIAS: ")

//PROCESSAMENTO
var anosEmDias = anos * 365;
var mesesEmDias = meses * 30;
var totalDias = anosEmDias + mesesEmDias + dias;

var totalDias2 = (anos * 365) + (meses * 30) + dias; // EQUIVALENTE AS 3 LINHAS ACIMA

//SAIDA
console.log("VOCÊ VIVEU "+ totalDias + " dias");
console.log("VOCÊ VIVEU "+ totalDias2 +" dias");

