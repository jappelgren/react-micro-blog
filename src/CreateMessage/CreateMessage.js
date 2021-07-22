import axios from 'axios'
import React, { useState } from 'react'

export default function CreateMessage({loggedInUser, fetchPosts}) {
    const [postInput, setPostInput] = useState('')
    
    const handlePostInput = (e) => {
        setPostInput(e.target.value)
    }

    const handlePost = (e) => {
        e.preventDefault()
        axios.post(
            'http://localhost:8080/api', 
            {user_name: loggedInUser || 'Anonymous', message: postInput,}
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
        <form>
            <input value={postInput} onChange={handlePostInput}/>
            <button onClick={handlePost} >Post Message</button>
        </form>
    )
}
