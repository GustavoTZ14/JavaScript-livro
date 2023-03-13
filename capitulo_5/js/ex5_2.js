const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const numero = Number(frm.inNumero.value)
    let resposta = ""

    for(let i = numero; i > 1; i--){
        resposta = resposta + i + ","
    }
    resp.outerText = `${resposta}1.`

    e.preventDefault()
})