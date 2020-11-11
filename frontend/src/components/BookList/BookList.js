import * as React from 'react'
import Spinner from 'components/Spinner'
import {withRouter} from 'react-router-dom'
import {makeStyles} from '@material-ui/core'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'
import GridListTileBar from '@material-ui/core/GridListTileBar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.background.paper
  },
  tile: {
    cursor: 'pointer',
    '&:hover': {
      zIndex: 1,
      '& $btn': {
        zIndex: 1,
        display: 'block'
      },
      '& $img': {
        opacity: 0.5
      }
    }
  },
  price: {
    fontSize: '20px',
    color: '#fff',
    fontWeight: 'bold',
    paddingRight: '10px'
  },
  btn: {
    top: '150px',
    left: '80px',
    color: '#fff',
    border: '0',
    borderRadius: '5px',
    position: 'absolute',
    padding: '5px 25px',
    display: 'none',
    background: '#001428'
  },
  gridList: {
    width: '100%'
  }
}))

const BookList = ({
  books,
  photos,
  authors,
  history
}) => {
  const classes = useStyles()
  return (
    <>
      {Object.values(books).length > 0 ? (
        <div className={classes.root}>
          <GridList cellHeight={350} cols={4} className={classes.gridList}>
            {books.map((item, index) => (
              <GridListTile
                key={item.img}
                className={classes.tile}
                onClick={() => history.push(`/books/${item.id}`)}
              >
                <Button variant='contained' className={classes.btn} color='primary'>
                  Buy now
                </Button>
                <img className={classes.img} src={photos[index]?.url} alt='book' />
                <p>{item.attributes.title}</p>
                <GridListTileBar
                  title={item.attributes.title}
                  subtitle={<span>by: {authors[item.relationships.author.data.id - 1]?.attributes.name}</span>}
                  actionIcon={
                    <p className={classes.price}>{photos[index]?.price}</p>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      ) : (
        <Spinner visible size='28px' />
      )}
    </>
  )
}

export default withRouter(BookList)
