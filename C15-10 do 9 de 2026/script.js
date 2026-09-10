console.log("Olá, Luiz! Seja bem-vindo!");
console.log("Olá, Gustavo! Seja bem-vindo!");
console.log("Olá, Cecilia! Seja bem-vindo!");

function darBoasVindas(nome) {
       console.log(`Olá, ${nome}! Seja bem-vindo!`)
}


darBoasVindas("Luiz");
darBoasVindas("Gustavo");
darBoasVindas("Cecilia");


 function apresentar(nome, idade) {
          console.log(`Meu nome é ${nome}) e tenho ${idade} anos. `);
 }

 apresentar("Gaby,24")

function estudar(nome) {
    console.log(nome + " está estudando no momento!");
}

estudar("Gaby");

function somar(a,b) {
       return a + b;
}

somar(5,3)
let resultado = somar(5,3);

function verificarNotas(nota1, nota2) {
    let media = (nota1 + nota2) / 2;

    if (media >= 6) {
        return "Aprovado!";
    } else {
        return "Reprovado!";
    }
}

alert(verificarNotas(8, 7));

