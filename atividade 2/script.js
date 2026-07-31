let produto = prompt("Digite o nome do produto:");
let precoOriginal = parseFloat(prompt("Digite o preço original do produto:"));
let percentualDesconto = parseFloat(prompt("Digite o percentual de desconto:"));

let valorDesconto = precoOriginal * (percentualDesconto / 100);
let precoFinal = precoOriginal - valorDesconto;

let precoFormatado = precoOriginal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
});

let descontoFormatado = valorDesconto.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
});

let precoFinalFormatado = precoFinal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
});

console.log("========== CALCULADORA DE DESCONTO ==========");
console.log("Produto: " + produto);
console.log("Preço Original: " + precoFormatado);
console.log("Desconto (" + percentualDesconto + "%): " + descontoFormatado);
console.log("Preço Final: " + precoFinalFormatado);

alert(
    "Produto: " + produto +
    "\nPreço Original: " + precoFormatado +
    "\nDesconto: " + descontoFormatado +
    "\nPreço Final: " + precoFinalFormatado
);