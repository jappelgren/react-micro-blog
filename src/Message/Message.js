import { Button, createTheme, Grid, IconButton, makeStyles, Menu, MenuItem, Paper, Typography, TextField } from '@material-ui/core';
import { FiberManualRecord, MoreHorizRounded } from '@material-ui/icons';
import axios from 'axios';
import { format } from 'date-fns'
import React, { useState } from 'react'

const useStyles = makeStyles(() => ({
    messagePadding: {
        padding: '1rem',
        marginTop: '1rem'
    },
    textPadding: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
    textArea: {
        width: '40vw'
    },
    buttonMargin: {
        marginRight: '.5rem',
        marginLeft: '.5rem'
    }


}))

export default function Message({post, fetchPosts}) {

    const classes = useStyles()

    const [editMode, setEditMode] = useState(false);
    const [editMessage, setEditMessage] = useState(post?.message);
    const [anchorEl, setAnchorEl] = useState(null);
    

    const timeStamp = () => {
        
        const timeConverted = new Date(post.posted)
        const today = new Date().getTime()
        
        if(format(timeConverted, `MMM dd yyyy`) === format(today, 'MMM dd yyyy')) {
            if(format(today, 'HH') - format(timeConverted, 'HH') === 0) {
                return 'posted now'
            } else {
                return `${(format(today, 'HH') - format(timeConverted, 'HH') * 1)} hours ago`
            }
        } else {
            return format(timeConverted, `MMM dd, yyyy`)
        }
    }

    const handleDelete = (e) => {
        e.preventDefault()
        handleClose()
        axios.delete(`http://localhost:8080/api/${post.id}`)
        .then((res) => {
            console.log(res.status)
            fetchPosts()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        axios.put(
            `http://localhost:8080/api/${post.id}`, 
            {
                id: post.id, 
                user_name: post.user_name, 
                message: editMessage,
                posted: new Date().getTime()
            })
            .then((res) => {
                console.log(res.status)
                fetchPosts()
                setEditMode(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget)
    }
   
    const handleClose = () => {
        setAnchorEl(null)
    }
    
    return (
        <Grid container direction='column' className='textPadding'>
            <Paper className={classes.messagePadding}>
                <Grid container direction='row' alignItems='center' justifyContent='space-between'>
                    <Grid item> 
                        <Typography variant='h6'> 
                        {post?.user_name}  
                        </Typography> 
                        <Typography variant='subtitle2'>
                            {timeStamp()}
                        </Typography>
                    </Grid>
                    
                    <Grid item>
                        <IconButton onClick={handleOpen}>
                            <MoreHorizRounded/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                    <MenuItem onClick={() => {setEditMode(!editMode); handleClose();}}>Edit</MenuItem>
                </Menu>
                {editMode ?
                (
                    <form>
                <Grid container direction='column' alignContent='center'>
                    <Grid item className={classes.messagePadding}>
                        <TextField  
                        value={editMessage} 
                        onChange={(e) => setEditMessage(e.target.value)} 
                        fullWidth
                        style={{margin: 8}}
                        margin='normal'
                        variant='outlined'
                        multiline
                        rows={4}
                        />
                    </Grid>
                        <Grid container justifyContent='center'>
                            <Grid item><Button variant='contained' color='primary' className={classes.buttonMargin} onClick={handleEdit}>Submit</Button></Grid>
                            <Grid item><Button variant='contained' color='primary' className={classes.buttonMargin} onClick={() => setEditMode(!editMode)}>Cancel</Button></Grid>
                        </Grid>

                </Grid>
                    </form>
                )
                :(
                <Grid container direction='column' alignItems='flex-start' justifyContent='space-between' className={classes.textPadding}>
                    <Typography>{post?.message}</Typography>
                </Grid>
                )
                }  
                
            </Paper>
        </Grid>
    )
}