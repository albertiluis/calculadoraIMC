const calcular = document.getElementById('calcular')

calcular.addEventListener('click', calcularImc)
document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        calcularImc()
    }
})

function calcularImc() {
    const nome = document.getElementById('nome').value
    const alturaCm = document.getElementById('altura').value
    const peso = document.getElementById('peso').value

    let alturaMt = alturaCm/100
    
    if(nome !== '' && peso !== '' && altura !== '') {   
        let imc = peso / (alturaMt * alturaMt)
        let classificacao = valorsRef(imc)

        imprimirResultado(nome, imc, classificacao)
    } else {
        mensagemErro('Preencha todos os campos.')
    }
}

function valorsRef(imc){
    let classificacao = ''

    if(imc <= 16.9){
        classificacao = 'Você está muito abaixo do peso.'
    } else if(imc >= 17 && imc <= 18.4){
        classificacao = 'Você abaixo do peso.'
    } else if(imc >= 18.5 && imc <= 24.9){
        classificacao = 'Você está no peso ideal.'
    } else if(imc >= 25 && imc <= 29.9){
        classificacao = 'Você está acima do peso.'
    } else if(imc >= 30 && imc <= 34.9){
        classificacao = 'Cuidado, você é um Obeso Grau I.'
    } else if(imc >= 35 && imc <= 40){
        classificacao = 'Cuidado, você é um Obeso Grau II.'
    } else if(imc > 40 ){
        classificacao = 'Cuidado, você é um Obeso Grau III.'
    }

    return classificacao
}

function imprimirResultado(nome, imc, classificacao) {
    document.getElementById('mensagem-erro').classList.remove('show')
    
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = 'Olá ' + nome + ', o seu IMC é ' + imc.toFixed(2).replace('.', ',') + '. ' + classificacao

}

function mensagemErro(mensagem){
    document.getElementById('mensagem-erro').classList.add('show')
    document.getElementById('mensagem-erro').innerText = mensagem
}

