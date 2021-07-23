import React from 'react'
import { AppBar, makeStyles, Button, Toolbar, Typography } from '@material-ui/core'
import { withCookies } from 'react-cookie'
import { useHistory } from 'react-router'

const style = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
   menuButton: {
       marginRight: theme.spacing(2)
   },
   title: {
       flexGrow: 1
   },
   noShadow: {
       boxShadow: 'none'
   }
}))

export default function Header({removeCookie}) {
    const classes = style()
    const history = useHistory()


    const handleLogout = () => {
        removeCookie('userName')
        history.push('/login')
    }

    return (
        <div className={classes.root}>
            <AppBar color='secondary' position='fixed' className={classes.noShadow}>
                <Toolbar >
                    <Typography className={classes.title}>placeHolder</Typography>
                    <Button className={classes.appBar} color='primary' variant='contained' onClick={handleLogout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
