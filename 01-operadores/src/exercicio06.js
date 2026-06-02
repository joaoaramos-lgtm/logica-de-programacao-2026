import leia from 'readline-sync'

//ENTRADA
var largura = leia.question("Digite a largura:")
var comprimento = leia.question("Digite o comprimento:")
//PROCESSAMENTO
var area = (largura * comprimento);
//SAIDA
console.log (area)
