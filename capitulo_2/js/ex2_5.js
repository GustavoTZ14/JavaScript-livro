const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const remédio = frm.inRemédio.value
    const preço = Number(frm.inPreço.value)

    const valor = (preço * 2) - 0.90
    
    resp.outerText = `Valor do ${remédio}\nLeve 2 e pague R$ ${valor}`
    

    e.preventDefault()

})