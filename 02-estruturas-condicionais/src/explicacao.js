/* 
// E - SO VAI DAR VERDADEIRO SE TODOS FOREM VERDADEIROS
// OU - SO VAI DAR FALSO SE TODOS FOREM FALSOS

var idade = 30;
var temCnh = true;

if (idade < 1) {
    console.log("RECEM NASCIDO")
} else if(idade >= 1 && idade <= 12) {
    console.log("CRIANÇA")
} else if(idade > 12 && idade < 18) {  
    console.log("ADOLESCENTE")  
} else if(idade > 18 && idade <= 60) {
    console.log("ADULTO")
} else {
    console.log("IDOSO")
}

var mediaFinal = 6.5;

if(mediaFinal >= 7) {
    console.log("APROVADO!!")
}else if(mediaFinal >= 5 && mediaFinal < 7){
    console.log("EM RECUPERAÇÃO!!")
} else {
    console.log("REPROVADO")
}

var diaSemana = "quarta";
if(diaSemana === "sabado" || diaSemana === "domingo") {
    console.log("FIM DE SEMANA");
} else {
    console.log("DIA UTIL")
} 

 //FORMAS DE PAGAMENTO   
var fp = "debito";
var valorProduto = 15.6;

if(fp === "pix" || fp === 'dinheiro' || fp === "debito") {
    if(fp === "debito") {
    console.log("VALOR DO PRODUTO E: R$" + valorProduto.toFixed(2))
} else {
    var valorFinal = valorProduto + (valorProduto * 0.15)
    console.log("VALOR DO PRODUTO E: R$" + valorFinal.toFixed(2))
}
} else {
    var valFinal = valProd + ( valProd * 0.15)
    console.log("Valor do Produto")
} */

// DESAFIO DO NUMERO PAR OU IMPAR;
var numero = 6;
if(numero % 2 === 0) {
    console.log("PAR")
}else {
    console.log("IMPAR")

}

// SWITCH CASE
var cor = "VERDE";
switch (cor) {
    case "VERMELHO":
    console.log("PARE")
    break;
    case "AMARELO":
    console.log("ATENÇÃO")
    break;
    case "VERDE":
        console.log("SIGA")
        break;
    default:
        console.log("COR INVALIDA")
}

// SWITCH
var idioma = 'pt';
switch(idioma){
    case 'fr':
        console.log("BONJOUR")
    break;
    case 'pt':
        console.log("Ola")
    break;
    case 'es':
        console.log("HOLA")
    break;
    default:
        console.log("Hello")
}