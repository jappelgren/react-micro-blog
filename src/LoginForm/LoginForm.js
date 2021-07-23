import { Button, Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import randomEmoji from '../randomEmoji/randomEmoji'


export default function LoginForm({cookie, setCookie, setLoggedInUser}) {
    const [userName, setUserName] = useState('')

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
            style={{minHeight: '100vh', background: 'linear-gradient(white, white, #ffea00)'}}    
        >
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
