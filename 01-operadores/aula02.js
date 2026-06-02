/*import leia from 'readline-sync';

var nome = 'João';
var nome = 'João Alexandre';
var idade1= 16;
var idade2 = "16" // OPERADOR DE IGUALDADE (VALOR)
if(idade1 == idade2){
    console.log("São iguais(==)")
}

if(idade1 === idade2){
    console.log("São iguais (===)")

} */


import leia from 'readline-sync'

var  nota1, nota2, nota3;

nota1 = leia.questionFloat("Digite a primeira nota: ")
nota2 = leia.questionFloat("Digite a segunda nota: ")
nota3 = leia.questionFloat("Digite a terceira nota: ")

var soma = nota1 + nota2 + nota3;
var media = soma / 3;

console.log(" A media e: " + media);