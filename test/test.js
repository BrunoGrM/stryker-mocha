var chai = require('chai')
var { calcular } = require('../src/Calculadora')
var { exceptions } = require('../src/Exceptions')

describe('#calcular', function() {
    it('Deve retornar erro', function() {
        chai.expect(() => calcular({operator: 'a', n1: 1, n2: 5})).to.throw('Deu erro mano - operador inválido')
    })

    it('Deve somar', function() {
        chai.assert.equal(calcular({operator: '+', n1: 5, n2: 1}), 6, 'Algo foi somado errado')
    })

    it('Deve subtrair', function() {
        chai.assert.equal(calcular({operator: '-', n1: 12, n2: 5}), 7, 'Algo foi subtraido errado')
    })

    it('Deve multiplicar', function() {
        chai.assert.equal(calcular({operator: '*', n1: 7, n2: 7}), 49, 'Algo foi multiplicado errado')
    })

    it('Deve dividir', function() {
        chai.assert.equal(calcular({operator: '/', n1: 200, n2: 2}), 100, 'Algo foi dividido errado')
    })

    it('Exception default', function() {
        chai.assert.equal(exceptions('Chama default'), 'Erro default', 'Exceção errada')
    })
})