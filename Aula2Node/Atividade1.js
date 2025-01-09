/*
Crie um módulo chamado calculadora e importe ela para o arquivo index.js, depois utilize o módulo minimist para receber do usário dois números. Mostre as operações de soma, subtração, multiplicação e divisão desses dois números.
*/
const calculadora = require('./calculadora')
const minimist = require('minimist')

let numeros = minimist(process.argv.splice(2))
let a = numeros["n1"]
let b = numeros['n2']

calculadora.soma(a,b)
calculadora.sub(a,b)
calculadora.multiplicacao(a,b)
calculadora.divisao(a,b)