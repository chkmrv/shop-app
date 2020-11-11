import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_BOOKS = 'FETCH_BOOKS'
export const FETCH_AUTHORS = 'FETCH_AUTHORS'
export const FETCH_PHOTOS = 'FETCH_PHOTOS'

// ------------------------------------
// Actions
// ------------------------------------

export const fetchPhotos = () => dispatch => (
  axios.get('/mocks/photos.json').then((response) => dispatch({
    type: 'FETCH_PHOTOS',
    payload: response.data.data
  })).catch((err) => {
    throw err
  })
)

export const fetchBooks = () => dispatch => (
  axios.get('/v1/books?include=chapters,author').then((response) => dispatch({
    type: 'FETCH_BOOKS',
    payload: response.data.data
  })).catch((err) => {
    throw err
  })
)

export const fetchAuthors = () => dispatch => (
  axios.get('/v1/authors?include=books').then((response) => dispatch({
    type: 'FETCH_AUTHORS',
    payload: response.data.data
  })).catch((err) => {
    throw err
  })
)

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_PHOTOS]: (state, action) => ({...state, photos: action.payload}),
  [FETCH_BOOKS]: (state, action) => ({...state, books: action.payload}),
  [FETCH_AUTHORS]: (state, action) => ({...state, authors: action.payload})
}

// ------------------------------------
// Initial State
// ------------------------------------
const initialState = {
  photos: [],
  books: [],
  authors: []
}

export default function listReducer (state = initialState, action) {
  if (action.error) return state

  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
