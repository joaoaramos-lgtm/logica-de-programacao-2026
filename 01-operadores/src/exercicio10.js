import leia from 'readline-sync'

//ENTRADA

var totalEleitores = leia.questionInt("INFORME O TOTAL DE ELEITORES DA CIDADE: ")
var totalBrancos = leia.questionInt("INFORME A QTD DE VOTOS BRANCOS: ")
var totalNulos = leia.questionInt("INFORME A QTD DE VOTOS NULOS: ")
var totalValidos = leia.questionInt("INFORME A QTD DE VOTOS VALIDOS: ")
//PROCESSAMENTO
var percentualBrancos = (totalBrancos / totalEleitores) * 100;
var percentualNulos = (totalNulos / totalEleitores) * 100;
var percentualValidos = (totalValidos / totalEleitores) * 100;
//SAIDA
console.log("Percentual de votos brancos: " + percentualBrancos.toFixed(2))
console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2))
console.log("Percentual de votos validos: " + percentualValidos.toFixed(2))