function mostrarCidade() {
    let cidade = document.getElementById("cidade").value;
    document.getElementById("mensagem").textContent =
        "Você escolheu viajar para " + cidade + "!";
}
