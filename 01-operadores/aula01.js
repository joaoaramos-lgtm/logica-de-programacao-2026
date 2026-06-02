import leia from 'readline-sync';

var nome = leia.question("Digite seu nome: ");

console.log("Ola " + nome + " tudo bem?")

var idade = leia.questionInt(nome + " Qual e a sua idade?")
if(idade >= 16){
var temTitulo = leia.keyInSelect(["Sim", "Nao"], "Voce tem titulo de eleitor? ") + 1;
if(temTitulo == 1){
    console.log("NÃO VOTA!!")
} else {
    console.log("Você não vota!")
}
} else { 
console.log("Você não vota!")
}
