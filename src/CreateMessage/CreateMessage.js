import React, { useState } from 'react'

export default function CreateMessage({loggedInUser, data, setData}) {
    const [postInput, setPostInput] = useState('')
    
    const handlePostInput = (e) => {
        setPostInput(e.target.value)
    }

    const handlePost = (e) => {
    
        e.preventDefault()
        setData([...data, {
            user: loggedInUser,
            message: postInput,
        }])
    }

    console.log(postInput)
    
    return (
        <form>
            <input value={postInput} onChange={handlePostInput}/>
            <button onClick={handlePost} >Post Message</button>
        </form>
    )
}
