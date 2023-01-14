const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
      
    const nome = frm.inNome.value
    const Masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso 
    
    if (Masculino) {
        peso = 22 * Math.pow(altura, 2)
    }
    else{
        peso = 21 * Math.pow(altura, 2)
    }
    
    resp.innerText = `${nome}\nSeu Peso ideal é: ${peso.toFixed(3)} kg`
      
    e.preventDefault()

})
frm.addEventListener("reset", () =>{
    resp.innerText = ""
})
