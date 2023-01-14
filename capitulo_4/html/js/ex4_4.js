const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const hora = Number(frm.inHora.value)
    let horaFrança = hora  + 5

    if (horaFrança > 24){
        horaFrança = horaFrança - 24
    }

    resp.outerText = `Hora na França: ${horaFrança.toFixed(2)}`

    e.preventDefault()
})