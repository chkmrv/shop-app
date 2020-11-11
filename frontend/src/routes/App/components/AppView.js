import React, {useEffect} from 'react'
import Header from 'components/Header'
import BookList from 'components/BookList'

const AppView = ({books, photos, authors, fetchBooks, fetchAuthors, fetchPhotos}) => {
  useEffect(() => {
    fetchBooks()
    fetchAuthors()
    fetchPhotos()
  }, [fetchBooks, fetchAuthors, fetchPhotos])

  return (
    <div className='App'>
      <Header />
      <div className='viewport'>
        <div className='layout'>
          <main>
            <div className='row'>
              <div className='col-12'>
                <BookList
                  books={books}
                  photos={photos}
                  authors={authors}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AppView
