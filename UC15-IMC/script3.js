let nome = prompt('Qual é o seu nome?');
let pesoStr = prompt(`Olá, ${nome}! Qual é o seu peso em kg?\n(use vírgula ou ponto - ex: 75,5 ou 75.5)`);
let altStr = prompt('Qual é a sua altura em metros? \n(ex: 1,75 ou 1.75)');

// Correção das conversões e remoção do trecho quebrado
let peso = Number(pesoStr.replace(',', '.'));
let alt = Number(altStr.replace(',', '.'));

console.log('Nome:', nome);
console.log('Peso:', peso, typeof peso); 
console.log('Altura:', alt, typeof alt);

let imc = peso / (alt * alt);
let imcFormatado = imc.toFixed(1);

// Exibe o IMC calculado antes da classificação
console.log(`IMC de ${nome}: ${imcFormatado}`);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 24.9) { // Ajustado de 22.9 para 24.9 (padrão da OMS)
    console.log("Peso normal");
} else if (imc < 29.9) { // Ajustado de 28 para 29.9 (padrão da OMS)
    console.log("Sobrepeso");
} else if (imc < 34.9) { // Ajustado de 30 para 34.9 (padrão da OMS)
    console.log("Obesidade Grau I");
} else if (imc < 39.9) { // Ajustado de 38.7 para 39.9 (padrão da OMS)
    console.log("Obesidade Grau II");
} else {
    console.log("Obesidade Grau III");
}
