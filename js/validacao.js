const dataNascimento = document.querySelector('#nascimento')

dataNascimento.addEventlistener('blur', (evento) => {
    validaDataNascimento(evento.target)
})

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para de cadastrar'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = net Date(data.getUTCFullYear() +18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}