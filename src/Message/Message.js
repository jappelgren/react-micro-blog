import { format, sub } from 'date-fns'
import React from 'react'

export default function Message({post}) {
    const timeStamp = () => {
        const today = new Date().getTime()
        
        if(format(post?.posted, `MMM dd yyyy`) === format(today, 'MMM dd yyyy')) {
            if(format(today, 'HH') - format(post?.posted, 'HH') === 0) {
                return 'now'
            } else {
                return `${(format(today, 'HH') - format(post?.posted, 'HH') * 1)} hours ago`
            }
        } else {
            return format(post?.posted, `MMM dd, yyyy`)
        }
    }
   
    
    return (
        <div>
            <hr/>
            <div>{post?.user} * {`Posted ${timeStamp()}`}
            </div>
            
            {post?.message}
            <hr/>
        </div>
    )
}