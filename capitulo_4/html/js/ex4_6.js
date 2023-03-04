const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")
const resp4 = document.querySelector("#outResp4")
const reps5 = document.querySelector("#outResp5")

frm.addEventListener("submit", (e) =>{
    const saque = Number(frm.inSaque.value)
    /*if(saque % 10 == 0){
        alert("valor invalido para notas disponíveis (R$ 10, 50, 100)")
        frm.inSaque.focus()
        return
    } */
    
    const notasCem = Math.floor(saque / 100)
    let resto = saque % 100
    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    const notaDez = Math.floor(resto / 10)
    resto = resto % 10
    const notaCinco = Math.floor(resto / 5)
    resto = resto % 5
    const notaUm = Math.floor(resto / 1)
    
    
    if(notasCem > 0){
        resp1.outerText = `Notas de R$ 100: ${notasCem}\n`
    }
    if(notasCinquenta > 0){
        resp2.outerText = `Notas de R$ 50: ${notasCinquenta}\n`
    }
    if(notaDez > 0){
        resp3.outerText = `Notas de R$ 10: ${notaDez}\n`
    }
    if(notaCinco > 0){
        resp4.outerText = `Notas de R$ 5: ${notaCinco}\n`
    }
    if(notaUm > 0){
        reps5.outerText = `Notas de R$ 1: ${notaUm}`
    }
   

    e.preventDefault()
     
})  

