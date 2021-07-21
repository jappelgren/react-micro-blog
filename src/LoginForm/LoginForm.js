import React, { useState } from 'react'
import { useHistory } from 'react-router'

export default function LoginForm({loggedInUser, setLoggedInUser}) {
    const [userName, setUserName] = useState('')
    const history = useHistory()

    const handleUserInput = (e) => {
        setUserName(e.target.value)
    }

    const handleLogIn = (e) => {
        e.preventDefault()
        setLoggedInUser(userName)
        setUserName('')
        history.push('/home')
    }

    console.log(`userName`, userName)
    console.log(`loggedInUser`, loggedInUser)
    
    return (
        <form>
            <input value={userName} onChange={handleUserInput} type='text'/>
            <button type='submit' onClick={handleLogIn}>Login</button>
        </form>
    )
}
