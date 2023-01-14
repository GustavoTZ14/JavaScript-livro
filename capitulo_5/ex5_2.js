const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const numero = Number(frm.inNumero.value)
    let resposta = ""

    for(let i = numero; i > 0; i--){
        if(i == 1){
        resposta = `${resposta}${i}.`
        }else{
            resposta = `${resposta}${i}-`
        }
    }
    resp.outerText = resposta

    e.preventDefault()
})