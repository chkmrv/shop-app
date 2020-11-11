import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import books from '../../../public/mocks/books.json'
import photos from '../../../public/mocks/photos.json'
import authors from '../../../public/mocks/authors.json'
import Details from './Details'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({data: {books, authors, photos}})

const withStore = (component) => (
  <Provider store={store}>{component}</Provider>
)

describe('(componenewets) Details', () => {
  let _wrapper

  const render = () => {
    _wrapper = mount(
      withStore(
        <Details
          books={books}
          authors={authors}
          photos={photos}
          fetchBooks={() => {}}
          fetchAuthors={() => {}}
        />
      )
    )
  }

  beforeEach(() => {
    render()
  })

  describe('Tests Details', () => {
    it('render account elements', () => {
      expect(_wrapper.find('img').length).toEqual(2)
      expect(_wrapper.find(`[data-testid="details"]`).length).toEqual(1)
    })
  })
})
