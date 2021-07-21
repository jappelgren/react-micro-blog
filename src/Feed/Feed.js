import React from 'react'
import Message from '../Message/Message'

export default function Feed({dummyData}) {
  
    console.log(dummyData[0]?.posted)
    return (
        <div>
            {dummyData?.map((post) => (<Message key={post?.id} post={post} />))}
        </div>
    )
}
