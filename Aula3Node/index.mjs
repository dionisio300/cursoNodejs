
import * as calculadora from "./meu_modulo.mjs"
import chalk from "chalk"
import readline from 'readline'



calculadora.soma(3,5)
calculadora.multiplicacao(3,5)
//Crie um programa que leia uma nota de um aluno e se a nota for maior ou igual a 7 imprima uma mensagem com bg verde avisando que ele está aprovado, caso a nota seja menor que 7 imprima uma mensagem com bg vermelho dizendo recuperação.

const nota = 6
if (nota>=7){
    console.log(chalk.bgGreen('Aprovado'))
}else{
    console.log(chalk.bgRed('Recuperação'))
}

readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

