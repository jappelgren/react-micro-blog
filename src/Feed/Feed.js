import { Grid } from '@material-ui/core'
import React from 'react'
import Message from '../Message/Message'

export default function Feed({data, fetchPosts}) {
  
    console.log(data[0]?.posted)
    return (
        <Grid container xs={6}>
            {data?.map((post) => (<Message key={post?.id} post={post} fetchPosts={fetchPosts} />))}
        </Grid>
    )
}
