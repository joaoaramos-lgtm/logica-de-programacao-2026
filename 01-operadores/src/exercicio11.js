import leia from 'readline-sync'

var nota1, nota2, nota3;

nota1 = leia.questionFloat("Digite a primeira nota: ")
nota2 = leia.questionFloat("Digite a segunda nota: ")
nota3 = leia.questionFloat("Digite a terceira nota: ")

var soma = nota1 + nota2 + nota3;

var media = soma / 3;
var resultado = media >= 7 ? "APROVADO" : "REPROVADO"; 

console.log("A media e: " + media + resultado );
