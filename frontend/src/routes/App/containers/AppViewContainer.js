import {connect} from 'react-redux'
import {fetchBooks, fetchPhotos, fetchAuthors} from '../../../store/global-reducers/data-reducer'
import AppView from '../components/AppView'

const mapDispatchToProps = {
  fetchBooks,
  fetchPhotos,
  fetchAuthors
}

const mapStateToProps = (state) => ({
  books: state.data.books,
  photos: state.data.photos,
  authors: state.data.authors
})

export default connect(mapStateToProps, mapDispatchToProps)(AppView)
