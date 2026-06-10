import leia from 'readline-sync';

var nome1 = leia.question("DIGITE SEU NOME: ")
var nome2 = leia.question("DIGITE SEU NOME: ")
var valor1 = leia.questionFloat("QUANTO VOCE GASTOU: R$")
var valor2 = leia.questionFloat("QUANTO VOCE GASTOU: R$")
var soma = "valor1" + "valor2";
var total = valor1 + valor2
console.log("VOCES GASTARAM: " + total)
var media = total / 2;
console.log("A MEDIA E: R$" + media)
if (valor1 >20) {
    console.log(nome1 + " GASTOU MAIS DE 20R$ ")
}
if (valor2 >20) {
    console.log(nome2 + " GASTOU MAIS DE 20R$ ")
}