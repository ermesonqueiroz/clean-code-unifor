const MAXIMO_TENTATVAS = 3;

function tentarLogin(senha) {
    let tentativas = 0;
    const senhaCorreta = '12345';

    while (tentativas < MAXIMO_TENTATVAS) {
        if (senha === senhaCorreta) {
            return 'Login efetuado com sucesso!';
        }
        tentativas++;
    }

    return 'Tentativas de login excedidas.';
}

console.log(tentarLogin('123'));
