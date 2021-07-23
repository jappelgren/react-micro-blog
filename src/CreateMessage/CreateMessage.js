import { Grid, Button, makeStyles, TextField } from '@material-ui/core'
import { KeyboardReturn } from '@material-ui/icons'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

const useStyles = makeStyles(() => ({
    textArea: {
        width: '40vw'
    }
}))

export default function CreateMessage({loggedInUser, fetchPosts, cookie}) {
    const [postInput, setPostInput] = useState('')
    const [characterCount, setCharacterCount] = useState(0);

    const classes = useStyles()
    
    const handlePostInput = (e) => {
        if(
            characterCount < 140 
            || e.nativeEvent.inputType === 'deleteContentBackward' 
            || e.nativeEvent.inputType === 'deleteContentForward'
            ) {
            setPostInput(e.target.value)
        }
        
    }


    const handlePost = (e) => {
        e.preventDefault()
        if(characterCount > 0) {
            axios.post(
                'http://localhost:8080/api', 
                {user_name: loggedInUser || cookie.userName, message: postInput,}
                )
                .then((res) => {
                    console.log(res.status)
                    fetchPosts()
                })
                .catch((err) => {
                    console.log(err)
                })
            setPostInput('')
        }
    }


    useEffect(() => {
        setCharacterCount(postInput.length)
    }, [postInput]);

    console.log(loggedInUser)

    console.log(postInput)
    
    return (
        <form style={{marginTop: '5rem'}}>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item>
                    <TextField 
                        value={postInput} 
                        onChange={handlePostInput}
                        className={classes.textArea}
                        label={`${characterCount}/140`}
                        style={{margin: 8}}
                        helperText={`What's on your mind?`}
                        margin='normal'
                        variant='outlined'
                        multiline
                        rows={4}
                        />
                </Grid>
                <Grid item>
                    <Button variant='contained' color='primary' onClick={handlePost} > Post  </Button>
                </Grid>
            </Grid>
        </form>
    )
}
