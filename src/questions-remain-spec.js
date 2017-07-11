'use strict'

/* global describe, it */
const questionsRemain = require('.')
const la = require('lazy-ass')
const is = require('check-more-types')
const snapshot = require('snap-shot')

describe('@cypress/questions-remain', () => {
  it('is a function', () => {
    la(is.fn(questionsRemain))
  })

  it('returns object if all questions have been answered', () => {
    const dontAsk = () => {
      throw new Error('Should not ask!')
    }
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
})
