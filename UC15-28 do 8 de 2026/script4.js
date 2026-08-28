let usuarioCorreto = "admin";
let senhaCorreta = "1234";

let usuario = prompt("Digite seu usuário:");
let senha = prompt("Digite sua senha:");

if (usuario !== usuarioCorreto) {
    console.log("Usuário incorreto.");
} else if (senha !== senhaCorreta) {
    console.log("Senha incorreta.");
} else {
    console.log("Login realizado com sucesso!");
}

let primeiroNumero = Number(prompt("Digite AV1:"));
let segundoNumero = Number(prompt("Digite AV2:"));

if (primeiroNumero > segundoNumero) {
    console.log("O maior número é", primeiroNumero);
} else if (segundoNumero > primeiroNumero) {
    console.log("O maior número é", segundoNumero);
} else {
    console.log("Os dois números são iguais.");
}
