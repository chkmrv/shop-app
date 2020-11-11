import React, {useEffect, useState} from 'react'
import {makeStyles, createStyles} from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Header from 'components/Header'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'

const label = `As used in these Delivery Services Terms and Conditions ('Delivery Terms'), 'we' means gamigo.com Services
 LLC and 'you' means the individual or entity engaging us for delivery services, including scheduled delivery service 
 options (such as room-of-choice or inside entryway), installation, assembly, haul-away, and any other delivery or 
 add-on delivery service we offer ('Delivery Services') for product(s) you purchase on gamigo.com. Delivery Services 
 and Site Requirements. We will provide the Delivery Services you engage us to perform for the ordered product(s), 
 directly or through a third-party service provider, in a professional and workmanlike manner, consistent with industry 
 standards. The Delivery Services are nonrefundable once service is completed. If you do not follow the Guidelines, or 
 for other safety or local code reasons, we may in our sole discretion decline to perform or we may reschedule services 
 in whole or in part and issue you a full or partial refund. We will also not disassemble, deconstruct, or break down any
  product for haul-away service.`

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
  check_box: {
    alignSelf: 'self-start',
    paddingTop: '0'
  },
  back_btn: {
    marginLeft: '50px'
  }
}))

const ConfirmationPurchase = (props) => {
  const classes = useStyles()
  const [bookId, setBookId] = useState(0)

  useEffect(() => {
    const id = window.location.pathname.split('/')[2]
    setBookId(id)
  }, [])

  const [state, setState] = React.useState({check: false})

  const handleChange = (event) => setState({...state, [event.target.name]: event.target.checked})

  const {check} = state

  return (
    <div className='App'>
      <Header />
      <div className='viewport'>
        <div className='layout' data-testid='confirmationPage'>
          <main>
            <Paper className={classes.paper}>
              <Typography variant='h4' component='h4'>
                Delivery Services Terms and Conditions
              </Typography>
              <Divider className={classes.divider} orientation='horizontal' />
              <FormControl required error={!check} component='fieldset' className={classes.formControl}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={check} onChange={handleChange} name='check' className={classes.check_box} />}
                    label={label}
                  />
                </FormGroup>
                <Box visibility={!check ? 'visible' : 'hidden'}>
                  <FormHelperText>You need to accept terms and conditions</FormHelperText>
                </Box>
              </FormControl>
              <Button
                variant='contained'
                className={classes.btn}
                color='primary'
                disabled={!check}
                onClick={() => props.history.push(`/books/${bookId}/success`)}
              >
                Finish Checkout
              </Button>
              <Button
                className={classes.back_btn}
                variant='contained'
                color='primary'
                onClick={() => props.history.push(`/books/`)}
              >
                Go back
              </Button>
            </Paper>
          </main>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPurchase
