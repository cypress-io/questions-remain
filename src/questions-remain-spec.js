'use strict'

/* global describe, it */
const questionsRemain = require('.')
const la = require('lazy-ass')
const is = require('check-more-types')

describe('@cypress/questions-remain', () => {
  it('is a function', () => {
    la(is.fn(questionsRemain))
  })
})
