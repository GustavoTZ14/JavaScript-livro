const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    
    const num = Number(frm.inNumeros.value)
    let numDivisores = 0 // declara e inicializa contador
    for(let i = 2; i <= num / 2; i++){ // precorre todos os possíveis divisores de num
        if(num % i == 0){ // verifica se i (1, 2, 3...) é divisor do num
            numDivisores = 1 // se é, incrementa contador
            break  // sai da repetição
        }
    }
    if(num > 1 && !numDivisores){ // se possui apenas 2 divisores, é primo
        resp.innerText = `${num} É primo`
    }else{
        resp.innerText = `${num} Não é primo`
    }

    e.preventDefault()
})