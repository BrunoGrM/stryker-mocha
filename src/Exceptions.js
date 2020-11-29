const exceptions = (type) => {
    var message = ''

    switch (type) {
        case 'invalid':
            message = 'Deu erro mano - operador inválido'
        default:
            break
    }

    return new Error(message)
}

module.exports = {
    exceptions
}