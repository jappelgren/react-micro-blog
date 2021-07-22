import axios from 'axios'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'

export default function CreateMessage({loggedInUser, fetchPosts, cookie}) {
    const [postInput, setPostInput] = useState('')
    
    const handlePostInput = (e) => {
        setPostInput(e.target.value)
    }

    const handlePost = (e) => {
        e.preventDefault()
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

    console.log(loggedInUser)

    console.log(postInput)
    
    return (
        <form style={{marginTop: '5rem'}}>
            <input value={postInput} onChange={handlePostInput}/>
            <button onClick={handlePost} >Post Message</button>
        </form>
    )
}
