const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preço = Number(frm.inPreço.value)

    const promoção = (preço * 3) - 3

    resp.outerText = `${produto} - Promoção: Leve 3 por R$: ${promoção.toFixed(2)} \nO 3º Produto custa apenas R$: 3.00`

    e.preventDefault()
})