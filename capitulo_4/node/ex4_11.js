const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const vlp = Number(frm.inPermitido.value)
    const condutor = Number(frm.inCondutor.value)
    const limite = vlp * 0.2
    const multa = limite + vlp

    if(condutor <= vlp){
        resp.outerText = "sem multa"
    }else if(condutor <= multa){
        resp.outerText = "multa leve"
    }else{
        resp.outerText = "multa grave"
    }

    e.preventDefault()

    
})