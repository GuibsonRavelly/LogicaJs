function adicionarLinha() {
    var data = document.getElementById("data").value;
    var faturamento = parseFloat(document.getElementById("faturamento").value);
    var gastos = parseFloat(document.getElementById("gastos").value);
    var liquidez = faturamento - gastos;

    var tabela = document.getElementById("tabela-gastos");
    var novaLinha = tabela.insertRow(-1); // Insere no final da tabela

    var colData = novaLinha.insertCell(0);
    var colFaturamento = novaLinha.insertCell(1);
    var colGastos = novaLinha.insertCell(2);
    var colLiquidez = novaLinha.insertCell(3);

    colData.textContent = data;
    colFaturamento.textContent = faturamento.toFixed(2);
    colGastos.textContent = gastos.toFixed(2);
    colLiquidez.textContent = liquidez.toFixed(2);

    // Limpa os campos do formulário após adicionar a linha
    document.getElementById("data").value = "";
    document.getElementById("faturamento").value = "";
    document.getElementById("gastos").value = "";
}
