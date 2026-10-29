
const form = document.getElementById("formNotas");
const nomeInput = document.getElementById("nome");
const resultado = document.getElementById("resultado");
const mensagem = document.getElementById("mensagem");
const mediaElement = document.getElementById("media");
const situacaoElement = document.getElementById("situacao");
const mediaBox = document.querySelector(".media-box");

function converterNota(valor) {
    const texto = valor.trim();

    if (texto === "") {
        return NaN;
    }

    // Aceita, por exemplo, 7,5 ou 7.5.
    if (!/^\d+(?:[.,]\d+)?$/.test(texto)) {
        return NaN;
    }

    return Number(texto.replace(",", "."));
}

// Exibe uma mensagem de erro na área de resultado.
function exibirErro(texto) {
    resultado.hidden = false;
    mediaBox.hidden = true;
    situacaoElement.hidden = true;

    mensagem.textContent = texto;
    mensagem.className = "erro";
}

// Calcula a média quando o formulário é enviado.
form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = nomeInput.value.trim();

    const nota1 = converterNota(
        document.getElementById("nota1").value
    );

    const nota2 = converterNota(
        document.getElementById("nota2").value
    );

    const nota3 = converterNota(
        document.getElementById("nota3").value
    );

    // Validação do nome.
    if (nome === "") {
        exibirErro("Erro: informe o nome do estudante.");
        nomeInput.focus();
        return;
    }

    const notas = [nota1, nota2, nota3];

    // Verifica se todas as notas foram preenchidas e são válidas.
    for (let i = 0; i < notas.length; i++) {
        if (Number.isNaN(notas[i])) {
            exibirErro(
                `Erro: preencha a Nota ${i + 1} com um número válido.`
            );
            document.getElementById(`nota${i + 1}`).focus();
            return;
        }

        if (notas[i] < 0 || notas[i] > 10) {
            exibirErro(
                `Erro: a Nota ${i + 1} deve estar entre 0 e 10.`
            );
            document.getElementById(`nota${i + 1}`).focus();
            return;
        }
    }

    // Calcula a média aritmética.
    const media = (nota1 + nota2 + nota3) / 3;

    // Define a situação acadêmica.
    // O gênero gramatical acompanha o nome quando termina em "a".
    const nomeFeminino = nome.toLocaleLowerCase("pt-BR").endsWith("a");

    let situacao;
    let classe;

    if (media >= 7) {
        situacao = nomeFeminino ? "Aprovada" : "Aprovado";
        classe = "aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
        classe = "recuperacao";
    } else {
        situacao = nomeFeminino ? "Reprovada" : "Reprovado";
        classe = "reprovado";
    }

    // Exibe os resultados.
    resultado.hidden = false;
    mediaBox.hidden = false;
    situacaoElement.hidden = false;

    mensagem.className = "";
    mensagem.textContent = `Estudante: ${nome}`;

    mediaElement.textContent = media.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    situacaoElement.textContent = `Situação acadêmica: ${situacao}`;
    situacaoElement.className = `situacao ${classe}`;
});

// Limpa os campos e reinicia a consulta.
form.addEventListener("reset", function () {
    resultado.hidden = true;
    mediaBox.hidden = false;
    situacaoElement.hidden = false;

    mensagem.textContent = "";
    mensagem.className = "";
    mediaElement.textContent = "0,00";
    situacaoElement.textContent = "";
    situacaoElement.className = "situacao";
});
