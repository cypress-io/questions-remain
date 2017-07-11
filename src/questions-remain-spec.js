'use strict'

/* global describe, it */
const questionsRemain = require('.')
const la = require('lazy-ass')
const is = require('check-more-types')
const snapshot = require('snap-shot')
const sinon = require('sinon')

describe('@cypress/questions-remain', () => {
  const dontAsk = () => {
    throw new Error('Should not ask!')
  }

  it('is a function', () => {
    la(is.fn(questionsRemain))
  })

  it('returns object if all questions have been answered', () => {
    const propertiesToQuestions = {
      foo: dontAsk,
      bar: dontAsk
    }
    const options = {
      foo: 'foo is specified',
      bar: 'so is bar'
    }
    return snapshot(questionsRemain(propertiesToQuestions)(options))
  })

  it('asks questions for missing options', () => {
    const barStub = sinon.stub().resolves('bar user answer')
    const propertiesToQuestions = {
      foo: dontAsk,
      bar: barStub
    }
    const options = {
      foo: 'foo is specified'
      // notice bar is missing!
    }
    return snapshot(
      questionsRemain(propertiesToQuestions)(options)
    ).then(answers => {
      la(barStub.called, 'bar stub has not been called')
    })
  })
})
