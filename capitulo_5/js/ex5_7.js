const frm = document.querySelector("form")
const resp = document.querySelector("#outEspaços")

frm.addEventListener("submit", (e) => {
    const num = Number(frm.inNumero.value)
    let estrelas = ""
    
    for(let i = 1; i <= num; i++){
        if(i % 2 == 1){
            estrelas = estrelas + "*"
        }else{
            estrelas = estrelas + "-"
        }
    }
    resp.innerText = estrelas

    e.preventDefault()
})