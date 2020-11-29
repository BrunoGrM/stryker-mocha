var { exceptions } = require('./Exceptions') 

const calcular = ({operator, n1, n2}) => {
    switch (operator) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            return n1/n2
        default:
            throw new Error(exceptions('invalid'))
    }
}

module.exports = {
    calcular
}