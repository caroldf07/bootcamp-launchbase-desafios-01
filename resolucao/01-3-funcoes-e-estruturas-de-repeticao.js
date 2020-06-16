//Exercicio 01

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
    { nome: "Carolina", tecnologias: ["HTML", "Node.js","CSS"] }
  ];

// for (let usuario of usuarios){
//     console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
// }

//Exercicio 02

function checaSeUsuarioUsaCSS(usuario){
    for (let i = 0; i < usuario.tecnologias.length; i++){
        if(usuario.tecnologias[i] == "CSS"){
            return true
        }
    }

}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }

//Exercicio 03

const pessoas = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];



function somaNumeros(numeros){
    var soma = 0

    for(let numero of numeros){
        soma = soma + numero
    }

    return soma
}

function calculaSaldo(receitas, despesas){
    receitas = somaNumeros(receitas)
    despesas = somaNumeros (despesas)

    var resultado = receitas - despesas

    return resultado
}



for (let pessoa of pessoas){
    var saldo = calculaSaldo(pessoa.receitas, pessoa.despesas)

    if (saldo >= 0){
        console.log(`${pessoa.nome} possui saldo POSITIVO de ${saldo}`)
    } else {
        console.log(`${pessoa.nome} possui saldo NEGATIVO de ${saldo}`)
    }
}