import React from 'react'

export default function Message({post}) {
    return (
        <div>
            <hr/>
            <div>{post.user} * {post.posted}</div>
            
            {post.message}
            <hr/>
        </div>
    )
}