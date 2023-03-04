const frm = document.querySelector("form") // obtém os elementos da páginas
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = "" // string com a resposta a ser exibida
let numContas = 0 // inicializa contador
let valTotal = 0 //e acumulador (variáveis globais)

frm.addEventListener("submit", (e) =>{ // "escuta" evento submit do form
    
    const descrição = frm.inDescricao.value // obtém dados da conta
    const valor = Number(frm.inValor.value)

    numContas++  // adiciona valores ao contador e acumulador
    valTotal += valor
    resposta += descrição + " - R$: " + valor.toFixed(2) + "\n"
    resp1.innerText = `${resposta}----------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`
    
    frm.inDescricao.value = "" // limpa campos do form
    frm.inValor.value = ""
    frm.inDescricao.focus()  // posiciona no campo inDescrição do form

    e.preventDefault() // evita o envio do form
})