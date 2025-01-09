/* São módulos internos do Node.js */
const fs = require('fs')
//import fs from 'fs'  (.mjs)

fs.readFile('arquivo.txt', 'utf-8',(err,dados)=>{
    console.log(err)
    console.log(dados)
})
