// script.js

function calcularImposto(valor, porcentagem) {
    return (valor * porcentagem) / 100;
}

function gerarNF(event) {
    event.preventDefault(); // Previne o recarregamento da página

    const valorVenda = parseFloat(document.getElementById('valorDaVenda').value);
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    if (isNaN(valorVenda) || isNaN(irpf) || isNaN(pis) || isNaN(cofins) || isNaN(inss) || isNaN(issqn)) {
        alert('Por favor, preencha todos os campos com valores válidos.');
        return;
    }

    const valorIRPF = calcularImposto(valorVenda, irpf);
    const valorPIS = calcularImposto(valorVenda, pis);
    const valorCOFINS = calcularImposto(valorVenda, cofins);
    const valorINSS = calcularImposto(valorVenda, inss);
    const valorISSQN = calcularImposto(valorVenda, issqn);
    const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
    const valorLiquido = valorVenda - totalImpostos;

    const resultadoHTML = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Itens Vendidos:</strong> ${itens}</p>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>IRPF:</strong> R$ ${valorIRPF.toFixed(2)}</p>
        <p><strong>PIS:</strong> R$ ${valorPIS.toFixed(2)}</p>
        <p><strong>COFINS:</strong> R$ ${valorCOFINS.toFixed(2)}</p>
        <p><strong>INSS:</strong> R$ ${valorINSS.toFixed(2)}</p>
        <p><strong>ISSQN:</strong> R$ ${valorISSQN.toFixed(2)}</p>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    `;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = resultadoHTML; // Insere o resultado na div
}
