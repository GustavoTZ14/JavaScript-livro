const form = document.querySelector("form")
const resp = document.querySelector("pre")

form.addEventListener("submit", (e) =>{
    const número = Number(form.inNumero.value)
    let resposta = ""

    for(let i = 1; i <= 10; i++){
        resposta = resposta + número + " x " + i + " = " + (número * i) + "\n"
    }
    resp.outerText = resposta

    e.preventDefault()
})