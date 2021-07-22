import axios from 'axios';
import { format } from 'date-fns'
import React, { useState } from 'react'

export default function Message({post, fetchPosts}) {

    const [editMode, setEditMode] = useState(false);
    const [editMessage, setEditMessage] = useState(post?.message);
    

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
   
    
    return (
        <div>
            <hr/>
            <div>{post?.user_name} * {timeStamp()}
            </div>
            
            
            {editMode ? 
            (<form>
                <div><input type="text" value={editMessage} onChange={(e) => setEditMessage(e.target.value)} /></div>
                <button onClick={handleEdit}>Submit</button>
                <button type="button" onClick={() => setEditMode(!editMode)}>Cancel</button>
            </form>)
            :(
            <div>
                 <div>{post?.message}</div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={() => setEditMode(!editMode)}>Edit</button>
            </div>
            )
        }

            <hr/>
        </div>
    )
}