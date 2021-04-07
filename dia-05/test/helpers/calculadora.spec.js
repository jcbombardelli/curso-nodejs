const chai = require('chai')
const assert = chai.assert

const calculadora = require('../../src/helpers/calculadora')

describe('Minhas operações de calculo com TDD', () => {

    it('Deve retornar a soma com resultado 2', () =>{
        const expectedNumber = 2
        assert.equal(calculadora.sum(1,1), expectedNumber)
    })

    it('Deve retornar a subtração com resultado 0', () =>{
        const expectedNumber = 0
        assert.equal(calculadora.sub(1,1), expectedNumber)

    })
})