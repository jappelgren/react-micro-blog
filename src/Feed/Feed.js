import React from 'react'
import Message from '../Message/Message'

export default function Feed({data, fetchPosts}) {
  
    console.log(data[0]?.posted)
    return (
        <div>
            {data?.map((post) => (<Message key={post?.id} post={post} fetchPosts={fetchPosts} />))}
        </div>
    )
}
