const TAXA_DESCONTO = 0.15;

function calcularDesconto(preco) {
    return preco - (preco * TAXA_DESCONTO);
}

const precoFinal = calcularDesconto(100);
console.log(`Preço com desconto: ${precoFinal}`);
