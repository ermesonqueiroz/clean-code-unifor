const MAIOR_IDADE = 18;

function verificarSePodeDirigir(idade) {
    if (idade >= MAIOR_IDADE) {
        return 'Pode dirigir';
    } else {
        return 'Não pode dirigir';
    }
}

console.log(verificarSePodeDirigir(16));
