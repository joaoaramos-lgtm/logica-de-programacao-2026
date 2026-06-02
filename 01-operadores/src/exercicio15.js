import leia from 'readline-sync';
//ENTRADA
var nome = leia.question("INFORME NOME DO FUNCIONARIO: ")
var salario = leia.questionFloat("DIGITE O SALARIO: ");
//PROCESSAMENTO
var novosalario = salario + (salario * (15 / 100));
var novoSalario = salario + (salario * 0.15);
var novoSalario = salario * 1.15;
salario *= 1.15;

console.log("NOVO SALARIO DO " + nome + " SERA DE R$" + novoSalario);