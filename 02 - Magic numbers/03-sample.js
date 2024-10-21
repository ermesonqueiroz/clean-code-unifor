const TAXA_FRETE = 10;

function calcularFrete(distancia) {
    return distancia * TAXA_FRETE;
}

const frete = calcularFrete(50);
console.log(`O valor do frete é: ${frete}`);
