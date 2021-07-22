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

    console.log(`cookie`, cookie.name)
    
    return (
        <div>
            <form>
                <input value={userName} onChange={handleUserInput} type='text'/>
                <button type='submit' onClick={handleLogIn}>Login</button>
            </form>
        </div>
    )
}
