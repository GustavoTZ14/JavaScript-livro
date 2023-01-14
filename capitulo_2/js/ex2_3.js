const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEventListener("submit", (e) =>{
    const veiculo = frm.inVeiculo.value
    const preço = Number(frm.inPreço.value)

    const entrada = preço * 0.50
    const parcela = (preço * 0.50) / 12

    resp1.innerText = `Promoção: ${veiculo}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+12x de R$: ${parcela.toFixed(2)}`

    e.preventDefault()
})