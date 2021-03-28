//var nome = window.prompt("Digite seu nome: ")
//var nota1 = parseInt(prompt("Digite um numero:"))
//var nota2 = parseInt(prompt('Digite sua segunda:'))

//var soma = nota1 + nota2
//alert(`Ola ${nome} o valor da soma ${nota1} + ${nota2} =  ${soma}`)

function conversao(){
var texto1 = document.getElementById("conversao1")
var valor1 = Number(texto1.value)
var soma = valor1 * 5.76
var res = document.getElementById('res')
res.innerHTML = `O valor do Dolar ${valor1} convertido em Real é ${soma}`
}

//var valor3 = parseInt(prompt("Digite o primeiro valor: "))
//var valor4= parseInt(prompt("Digite o segundo valor:"))
//var soma = valor3 * valor4
//alert(`O valor da soma ${valor3} + ${valor4} = ${soma}`)