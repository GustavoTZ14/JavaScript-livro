const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) =>{
    const carro = frm.inCarro.value
    const cor = frm.inCor.value
    const ano = frm.inAno.value
        
    resp.outerText = `Nome do Carro: ${carro}\nCor: ${cor}\nAno: ${ano}\n\n`

    if(cor == "azul" || cor == "vermelho"){  // != : diferente  &&: and ou "e" ||: "ou"
        resp2.outerText = `Seu carro é da cor: ${cor}\ne ano: ${ano}`
    }
    else{
        resp2.outerText = "Desculpe não existe este carro!"
    }

    e.preventDefault()
})