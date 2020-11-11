import React from 'react'
import {makeStyles, createStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Header from 'components/Header'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => createStyles({
  paper: {
    marginTop: theme.spacing(4),
    minHeight: 140,
    padding: '10px 15px'
  }
}))

const SuccessPage = (props) => (
  <div className='App'>
    <Header />
    <div className='viewport'>
      <div className='layout' data-testid='details'>
        <main>
          <Paper className={useStyles().paper}>
            <Typography variant='h4' component='h4'>
              Thank you, all done
            </Typography>
            <p>You order number: <strong>433214451</strong></p>
            <Button color='primary' onClick={() => props.history.push(`/books/`)}>
              go back to buy more
            </Button>
          </Paper>
        </main>
      </div>
    </div>
  </div>
)

export default SuccessPage
