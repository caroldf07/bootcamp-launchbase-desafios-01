//Exercicio 01

const usuario = {
    Nome: "Rocketseat",
    Cor: "Roxo",
    Foco: "Programação",
    Endereço:{
        Rua: "Rua Guilherme Gembala",
        Número: 260
    }
}

console.log(`A empresa ${usuario.Nome} está localizada em ${usuario.Endereço.Rua}, ${usuario.Endereço.Número}`)

//Exercicio 02

const programador = {
    nome: "Carolina",
    idade: 26,
    tecnologias: [
        {nome: 'C++', especialidade: 'Desktop'},
        {nome: 'Python', especialidade: 'Data Science'},
        {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
}

console.log(`A usuária ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} como especialidade em ${programador.tecnologias[0].especialidade}`)