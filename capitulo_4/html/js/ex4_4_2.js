const frm = document.querySelector("form")
const H = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const brasil = Number(frm.inBrasil.value)
    const eua = brasil - 2

    if(eua > 24.00) {
        
    }
    
    H.outerText = `Horário nos Estados Unidos: ${eua.toFixed(2)}`

    e.preventDefault()
})