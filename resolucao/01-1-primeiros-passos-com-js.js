// Exercicio 01

const nome = "Carolina"
const peso = 57
const altura = 1.64

const imc = peso/(altura*altura)

if (imc >= 30){
    console.log(`${ nome } você está acima do peso`)
} else {
    console.log (`${ nome } você não está acima do peso`)
}

// Exercicio 02

const nome2 = "Carolina"
const sexo = "F"
const idade = 26
const contribuicao = 11

if (sexo == "F" && (contribuicao >= 30 && idade >= 55)){
    console.log(`${ nome2 }, você pode se aposentar!`)
} else if(sexo == "M" && (contribuicao >= 35 && idade >= 60)){
    console.log(`${ nome2 }, você pode se aposentar!`)
} else {
    console.log(`${ nome2 }, você ainda não pode se aposentar!`)
}