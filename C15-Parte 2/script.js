function calcularCusto(passagem, hospedagem, alimentacao, passeios) {
    return passagem + hospedagem + alimentacao + passeios;
}

let passagem = Number(prompt("Digite o valor da passagem:"));
let hospedagem = Number(prompt("Digite o valor da hospedagem:"));
let alimentacao = Number(prompt("Digite o valor da alimentação:"));
let passeios = Number(prompt("Digite o valor dos passeios:"));

let total = calcularCusto(passagem, hospedagem, alimentacao, passeios);

alert("Custo total da viagem: R$ " + total.toFixed(2));

if (total <= 2000) {
    alert("A viagem está dentro do orçamento de R$ 2.000,00.");
} else {
    alert("A viagem ultrapassou o orçamento de R$ 2.000,00.");
}