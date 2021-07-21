import React, { useState } from 'react'

export default function CreateMessage({dummyData, setDummyData}) {
    const [postInput, setPostInput] = useState('')
    
    const handlePostInput = (e) => {
        setPostInput(e.target.value)
    }

    const handlePost = (e) => {
        const timeStamp = new Date().getTime() 
        e.preventDefault()
        setDummyData([...dummyData, {
            id: dummyData.length + 1, 
            user: 'greg',
            message: postInput,
            posted: timeStamp 
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
