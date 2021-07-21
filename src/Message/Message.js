import { format } from 'date-fns'
import React from 'react'

export default function Message({post}) {

    const timeConverted = new Date(post.posted)

    const timeStamp = () => {
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
   
    
    return (
        <div>
            <hr/>
            <div>{post?.user_name} * {timeStamp()}
            </div>
            
            {post?.message}
            <hr/>
        </div>
    )
}