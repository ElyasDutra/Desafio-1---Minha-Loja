
function simularCompra() {
    // Preços dos produtos apresentados na página HTML
    const produtos = [
        { nome: "Headset Pro", preco: 150 },
        { nome: "Teclado Mecânico", preco: 250 },
        { nome: "Mouse RGB", preco: 100 }
    ];

    let total = 0;
    let resumo = "RESUMO DA SUA COMPRA\n";
    resumo += "========================\n\n";

    for (const produto of produtos) {
        const resposta = prompt(
            `Produto: ${produto.nome}\n` +
            `Preço: R$ ${produto.preco.toFixed(2).replace(".", ",")}\n` +
            "Quantas unidades deseja comprar?\n" +
            "Digite 0 para não comprar."
        );

        // Encerra a simulação se o usuário cancelar o prompt
        if (resposta === null) {
            alert("Simulação cancelada.");
            return;
        }

        const quantidade = Number(resposta);

        // Verifica se a quantidade é válida
        if (
            resposta.trim() === "" ||
            !Number.isInteger(quantidade) ||
            quantidade < 0
        ) {
            alert(
                "Quantidade inválida!\n" +
                "Digite um número inteiro igual ou maior que zero."
            );
            return;
        }

        // Calcula o preço total do produto
        const subtotal = produto.preco * quantidade;
        total += subtotal;

        resumo += `${produto.nome}\n`;
        resumo += `Quantidade: ${quantidade}\n`;
        resumo += `Valor: R$ ${subtotal.toFixed(2).replace(".", ",")}\n\n`;
    }

    // Verifica se algum produto foi selecionado
    if (total === 0) {
        alert("Nenhum produto foi selecionado para a compra.");
        return;
    }

    // Aplica 10% de desconto para compras a partir de R$ 400,00
    const desconto = total >= 400 ? total * 0.10 : 0;
    const totalFinal = total - desconto;

    resumo += "========================\n";
    resumo += `Subtotal: R$ ${total.toFixed(2).replace(".", ",")}\n`;
    resumo += `Desconto: R$ ${desconto.toFixed(2).replace(".", ",")}\n`;
    resumo += `TOTAL FINAL: R$ ${totalFinal.toFixed(2).replace(".", ",")}`;

    alert(resumo);
}