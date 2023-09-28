//dom

const peso = document. querySelector('#peso')
const altura = document. querySelector('#altura')
const botao = document. querySelector('#calcular')
const resultado = document.querySelector('#resultado')

//evento

botao.addEventListener('click',imc)

//funcao - ultima parte

function imc(){

let weight = peso.value
let height = Number(altura.value)
let imcfinal = (weight/(height*height)).toFixed(2)

resultado. textContent = imcfinal

}