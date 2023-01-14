const prompt = require("prompt-sync")()
const moeda = Number(prompt("Valor R$:"))

    
const valor1 = 1.00
const valor2 = 1.75
const valor3 = 3.00
  
const result1 = moeda - valor1
const result2 = moeda - valor2
const result3 = moeda - valor3

if(moeda < 1.75){
    console.log("Tempo: 30 min")
    console.log(`Troco R$: ${result1.toFixed(2)}`)
}else if(moeda > 1.75 && moeda < 3.00){
    console.log("tempo: 60 min")
    console.log(`Troco R$: ${result2.toFixed(2)}`)
}else if(moeda >= 3.00){
    console.log("Tempo: 120 min")
    console.log(`Troco R$: ${result3.toFixed(2)}`)
}