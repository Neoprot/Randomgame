function verificaChute(chute){
    const num = +chute;

    if (Number.isNaN(num)){
        elementChute.innerHTML += '<div>Valor inválido</div>'
        return
    }
    if (valorTeste(num)){
        elementChute.innerHTML += `<div>Valor inválido, fale um número entre ${min} e ${max}</div>`
        return
    }

    if (num === rand){
        document.body.innerHTML = `
        <h2>Você acertou!</h2> 
        <h3>O número secreto era ${rand} </h3>
        <button id="reset" class="butao-jogar" >Jogar novamente</button>
        `
    }else if(num > rand){
        elementChute.innerHTML += `<div>O número secreto é <i class="fa-solid fa-arrow-down"></i></div>`
    }else {
        elementChute.innerHTML += `<div>O número secreto é <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`
    }
}

function valorTeste(num){
    return num > max || num < min;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'reset'){
        window.location.reload()
    }
})