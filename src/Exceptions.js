const exceptions = (type) => {
    switch (type) {
        case 'invalid':
            return 'Deu erro mano - operador inválido'
        default:
            return 'Erro default'
    }
}

module.exports = {
    exceptions
}