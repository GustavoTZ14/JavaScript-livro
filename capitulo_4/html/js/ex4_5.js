const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const num = Number(frm.inNumero.value)
    const valor = Math.sqrt(num)

    if(Number.isInteger(valor)){
      resp.outerText = `quadrados perfeitos = ${valor}`
    }else{
        resp.outerText = "desculpe não existe esse valor"
    }

    e.preventDefault()

})