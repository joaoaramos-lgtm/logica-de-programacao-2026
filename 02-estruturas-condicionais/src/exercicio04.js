import leia from 'readline-sync';

var macas = leia.questionInt("QUANTAS MACAS VOCE QUER COMPRAR?: ")
if (macas <12 ){
    var valor = macas * 0.30
    console.log(valor)
} else {
    var valor = macas * 0.25
    console.log(valor)
}