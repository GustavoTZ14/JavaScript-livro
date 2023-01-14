const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) =>{
    const moeda = Number(frm.inMoeda.value)

    
    const valor1 = 1.00
    const valor2 = 1.75
    const valor3 = 3.00
      
    const result1 = moeda - valor1
    const result2 = moeda - valor2
    const result3 = moeda - valor3

    if(moeda < 1.75){
        resp1.outerText = "Tempo: 30 min\n"
        resp2.outerText = `Troco R$: ${result1.toFixed(2)}`
    }else if(moeda > 1.75 && moeda < 3.00){
        resp1.outerText = "tempo: 60 min\n"
        resp2.outerText = `Troco R$: ${result2.toFixed(2)}`
    }else if(moeda >= 3.00){
        resp1.outerText = "Tempo: 120 min\n"
        resp2.outerText = `Troco R$: ${result3.toFixed(2)}`
    }
       
    e.preventDefault()
   
})