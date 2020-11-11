import React from 'react'
import {shallow} from 'enzyme'
import Spinner from './Spinner'

describe('(Component) Spinner', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Spinner />)
  })

  describe('Tests Spinner components rendering dependent on inverse property', () => {
    it('[inverse = true]', () => {
      _wrapper.setProps({inverse: true})
      expect(_wrapper.find('.spinner').length).toEqual(1)
      expect(_wrapper.find('.spinner-inner').length).toEqual(1)
      expect(_wrapper.find('.spinner').hasClass('inverse')).toEqual(true)
    })
  })

  describe('Tests Spinner components rendering dependent on inverse property', () => {
    it('[inline = true]', () => {
      _wrapper.setProps({inline: true})
      expect(_wrapper.find('.spinner').length).toEqual(1)
      expect(_wrapper.find('.spinner-inner').length).toEqual(1)
      expect(_wrapper.find('.spinner').hasClass('inline')).toEqual(true)
    })
  })

  describe('Tests Spinner components rendering dependent on visible property', () => {
    it('[visible = true]', () => {
      expect(_wrapper.find('.spinner').length).toEqual(1)
      expect(_wrapper.find('.spinner-inner').length).toEqual(1)
    })

    it('[visible = false]', () => {
      _wrapper.setProps({visible: false})
      expect(_wrapper.find('.spinner').length).toEqual(0)
      expect(_wrapper.find('.spinner-inner').length).toEqual(0)
    })
  })
})
