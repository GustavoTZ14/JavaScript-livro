const prompt = require("prompt-sync")()
const lado_A = prompt("Lado A:")
const lado_B = prompt("Lado B:")
const lado_C = prompt("Lado C:")

if(lado_A != lado_B && lado_A == lado_C){
    console.log("Lados podem formar um triângulo")
    console.log("Tipo: Isósceles")
}else if(lado_A == lado_B && lado_C){
    console.log("Lados podem formar um triângulo")
    console.log("Tipo: Equilátero")
}else{
    console.log("Lados podem formar um triângulo")
    console.log("Tipo: Escaleno")
}
