import { Button, Grid, TextField, Typography, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import randomEmoji from '../randomEmoji/randomEmoji'

const style = makeStyles((theme) => ({
   title: {
       fontFamily: 'Poppins',
       color: '#00aeff',
       marginBottom: '-15px'
   },
   subTitle: {
    fontFamily: 'Poppins',
    color: 'grey',
    paddingBottom:'1rem'
}
}))

export default function LoginForm({cookie, setCookie, setLoggedInUser}) {
    const [userName, setUserName] = useState('')
    const classes = style()

    const history = useHistory()

    const handleUserInput = (e) => {
        setUserName(e.target.value)
    }

    const handleLogIn = (e) => {
        e.preventDefault()
        const emojiUsername = randomEmoji() + " " + userName
        setLoggedInUser(emojiUsername)
        setCookie('userName', emojiUsername, {path: '/'})
        setUserName('')
        history.push('/home')
    }
    
    return (
        <Grid 
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justify='center'
            style={{minHeight: '100vh', background: 'linear-gradient( ghostWhite, ivory, #00aeff)'}}    
        >
            <Typography variant='h1' className={classes.title}>micro</Typography>
            <Typography variant='subtitle2' className={classes.subTitle}>a completely original micro blog platform</Typography>
            <Grid item xs={3}>
                <form>
                    <Grid container>
                    <TextField
                        value={userName} 
                        onChange={handleUserInput} 
                        variant='outlined'
                        label='Enter Username'
                    />
                    <Button type='submit' onClick={handleLogIn} variant='outlined'>Login</Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}
