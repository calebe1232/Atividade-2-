let senha = prompt("Digite uma senha:");

let tamanho = senha.length;
let possuiMaiuscula = /[A-Z]/.test(senha);
let possuiMinuscula = /[a-z]/.test(senha);

let classificacao;

if (tamanho >= 8 && possuiMaiuscula && possuiMinuscula) {
    classificacao = "Forte";
} else {
    classificacao = "Fraca";
}

console.log("========== VERIFICADOR DE SENHA ==========");
console.log("Quantidade de caracteres: " + tamanho);
console.log("Possui letra maiúscula: " + (possuiMaiuscula ? "Sim" : "Não"));
console.log("Possui letra minúscula: " + (possuiMinuscula ? "Sim" : "Não"));
console.log("Classificação: " + classificacao);

alert(
    "Quantidade de caracteres: " + tamanho +
    "\nClassificação da senha: " + classificacao
);