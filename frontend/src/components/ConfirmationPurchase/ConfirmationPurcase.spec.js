import React from 'react'
import {shallow} from 'enzyme'
import ConfirmationPurchase from './ConfirmationPurchase'

describe('component ConfirmationPurchase', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<ConfirmationPurchase />)
  })

  describe('Tests ConfirmationPurchase', () => {
    it('render account elements', () => {
      expect(_wrapper.find(`[data-testid="confirmationPage"]`).length).toEqual(1)
    })
  })
})
