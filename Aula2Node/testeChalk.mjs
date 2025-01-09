import chalk from 'chalk'

let nota = 7

if(nota > 7){
    console.log(chalk.green.bold('Parabens você foi aprovado'))
}else{
    console.log(chalk.bgRed.black.bold('Recuperação'))
}