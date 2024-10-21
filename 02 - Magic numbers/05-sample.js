const BONUS_SALARIAL_GERENTE = 1000;
const BONUS_SALARIAL_SUPERVISOR = 500;
const BONUS_SALARIAL_GENERICO = 200;
const DESCONTO_SALARIAL = 300;
const MAIOR_FAIXA_SALARIAL = 5000;
const DESCONTO_MAIOR_FAIXA_SALARIAL = 0.27;
const MEDIA_FAIXA_SALARIAL = 3000;
const DESCONTO_MEDIA_FAIXA_SALARIAL = 0.18;
const DESCONTO_GENERICA_FAIXA_SALARIAL = 0.11;

function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;

    let salarioComBonus;
    if (cargo === 'gerente') {
        salarioComBonus = salarioBase + BONUS_SALARIAL_GERENTE;
    } else if (cargo === 'supervisor') {
        salarioComBonus = salarioBase + BONUS_SALARIAL_SUPERVISOR;
    } else {
        salarioComBonus = salarioBase + BONUS_SALARIAL_GENERICO;
    }

    const salarioComDesconto = salarioComBonus - DESCONTO_SALARIAL;

    let salarioFinal;
    if (salarioComDesconto > MAIOR_FAIXA_SALARIAL) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * DESCONTO_MAIOR_FAIXA_SALARIAL);
    } else if (salarioComDesconto > MEDIA_FAIXA_SALARIAL) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * DESCONTO_MEDIA_FAIXA_SALARIAL);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * DESCONTO_GENERICA_FAIXA_SALARIAL);
    }

    return salarioFinal;
}

const salario = calcularSalarioFuncionario(160, 25, 'gerente');
console.log(`O salário final é: ${salario}`);
