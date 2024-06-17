function calcularOrcamento() {
    // Inputs
    const espessura = parseInt(document.getElementById('espessura').value);
    const largura = parseInt(document.getElementById('largura').value);
    const altura = parseInt(document.getElementById('altura').value);
    const percurso = parseInt(document.getElementById('percurso').value);
    const velocidade = parseInt(document.getElementById('velocidade').value);

    // Constantes
    const custo3mm = 89.84;
    const custo6mm = 120.00;
    const valorHora = 72.90;

    // Calculando a área
    const areaPeca = largura * altura;

    // Calculando o custo do material
    const custoMaterial = espessura === 3 ? (areaPeca * custo3mm / (2750 * 1850)) : (areaPeca * custo6mm / (2750 * 1850));

    // Calculando o tempo gasto
    const tempoGastoSegundos = percurso / velocidade;
    const tempoGastoTotalMinutos = (tempoGastoSegundos / 60) * 1.2; // adicionando 20%

    // Calculando o valor da mão de obra
    const valorMaoDeObra = (tempoGastoTotalMinutos / 60) * valorHora;

    // Valor sugerido para venda
    const valorSugerido = (custoMaterial + valorMaoDeObra) * 1.2;

    // Exibindo os resultados
    document.getElementById('tempo-gasto').innerText = `Tempo Gasto: ${tempoGastoTotalMinutos.toFixed(2)} minutos`;
    document.getElementById('custo-material').innerText = `Custo do Material: R$ ${custoMaterial.toFixed(2)}`;
    document.getElementById('valor-mao-de-obra').innerText = `Valor da Mão de Obra: R$ ${valorMaoDeObra.toFixed(2)}`;
    document.getElementById('valor-sugerido').innerText = `Valor Sugerido para Venda: R$ ${valorSugerido.toFixed(2)}`;
}