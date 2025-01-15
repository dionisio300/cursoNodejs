// console.log('Olá mundo!')
// const calculadora = require('./meu_modulo')


// console.log(calculadora.soma(3,2))
// calculadora.multiplicacao(3,2)


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readline.question('Digite a sua nota ',(resposta) => {
//     if (resposta>=7){
//         console.log('Aprovado')
//     }else{
//         console.log('Reprovado')
//     }
//     readline.close()
// })
// const inquirer = require('inquirer')
// const prompt = inquirer.createPromptModule()
// prompt([
//     {name: 'nota1', message: 'Qual a sua primeira nota'},
//     {name:'nota2', message:'Qual a sua segunda nota?'},
// ]).then((resposta) => {

    
//     //Calcule a média das duas notas digitadas e mostre aprovado caso a média seja maior que 7 e recuperação se a média for menor que 7

//     let media = (parseInt(resposta.nota1)+parseInt(resposta.nota2))/2

//     if(media>=7){
//         console.log(`Sua média foi ${media} você está aprovado`)
//     }else{
//         console.log(`Sua média foi ${media} você está de recuperação`)
//     }



// }).catch((err) => {
//     console.log(err)
// })


const x = "10"


// if(!Number.isInteger(x)){
//     throw new Error('O valor de x não é inteiro')
// }

try{
    x = 4
}catch(err){
    console.log(`Erro: ${err}`)
}


