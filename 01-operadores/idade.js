let resposta = document.getElementById('resposta')

function principal(){
    let idade = document.getElementById('idade').value

    let mes = idade * 12
    let dia = idade * 365
//console.log(` A sua idade em mes e ${mes} e em diase ${dias}`)
resposta.innerHTMl += `A sua idade em mes e ${mes} e em dias e ${dia}`
}
