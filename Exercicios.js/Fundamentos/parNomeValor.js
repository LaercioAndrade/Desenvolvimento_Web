// par nome/valor

const saudacao = 'Opa' // contexto léxico 1 

function exec(){
    const saudacao = 'Falaa' // context léxico 2
    return saudacao
}

// Objetos sào grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        longraduro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)