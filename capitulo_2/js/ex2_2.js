const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value
    const duração = Number(frm.inDuração.value)

    const horas = Math.floor(duração / 60)
    const minutos = duração % 60

    resp1.innerText = titulo
    resp2.innerText = `${horas} horas(s) e ${minutos} minutos(s)`

    e.preventDefault()
})