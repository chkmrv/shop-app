import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {makeStyles, createStyles} from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Header from 'components/Header'
import Button from '@material-ui/core/Button/Button'
import {fetchAuthors, fetchBooks, fetchPhotos} from '../../store/global-reducers/data-reducer'

const useStyles = makeStyles((theme) => createStyles({
  divider: {
    height: 2,
    marginTop: 4,
    marginBottom: 50
  },
  paper: {
    marginTop: theme.spacing(4),
    minHeight: 140,
    padding: '10px 15px'
  },
  qrAddress: {
    cursor: 'pointer',
    color: '#000',
    display: 'inline-block',
    padding: '17px 10px 0 0'
  },
  details: {
    width: '50%',
    display: 'inline-block',
    verticalAlign: 'top',
    padding: '0 40px'
  },
  img: {
    width: '50%',
    maxWidth: '500px',
    paddingBottom: '20px'
  },
  usd: {
    paddingLeft: '30px',
    color: '#888'
  }
}))

const Details = (props) => {
  const classes = useStyles()
  const [bookId, setBookId] = useState(0)

  useEffect(() => {
    if (props.books.length === 0) props.fetchBooks()
    if (props.photos.length === 0) props.fetchPhotos()
    if (props.authors.length === 0) props.fetchAuthors()
    const id = window.location.pathname.split('/')[2]
    setBookId(id)
    // eslint-disable-next-line
  }, [])

  const getBookAttr = () => props.books[bookId - 1]?.attributes

  const getBookAuthorId = () => props.books[bookId - 1]?.relationships.author.data.id - 1

  return (
    <div className='App'>
      <Header />
      <div className='viewport'>
        <div className='layout' data-testid='details'>
          <main>
            <Paper className={classes.paper}>
              <Typography variant='h4' component='h4'>
                {getBookAttr()?.title}
              </Typography>
              <Divider className={classes.divider} orientation='horizontal' />
              <img className={classes.img} src={props.photos[bookId - 1]?.url} alt='iamge book' />

              <div className={classes.details}>
                <p><strong>Date Published: </strong>{getBookAttr()?.date_published}</p>
                <p><strong>On the website from: </strong>{getBookAttr()?.created_at}</p>
                <p><strong>Authors: </strong>{props.authors[getBookAuthorId()]?.attributes.name}</p>
                <Button
                  variant='contained'
                  className={classes.btn}
                  color='primary'
                  onClick={() => {
                    props.history.push(`/books/${bookId}/confirmation`)
                  }}
                >
                  Buy this book for {props.photos[bookId - 1]?.price}
                </Button>
              </div>
              <Divider className={classes.divider} orientation='horizontal' />
            </Paper>
          </main>
        </div>
      </div>
    </div>
  )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Details)
