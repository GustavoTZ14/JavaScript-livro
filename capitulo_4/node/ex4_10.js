const prompt = require("prompt-sync")()
const num = Number(prompt("Mostre o seu numero: "))

const impar = num / 2
const resto = num % 2

if(resto == 1 || resto == 3 || resto == 5 || resto == 7 || resto == 9){
    console.log(`Numero impar: ${num}`)
}else{
    console.log(`Numero par: ${num}`)
}
