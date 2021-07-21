import React from 'react'
import Message from '../Message/Message'

export default function Feed() {
    const dummyData = [
        {
        user: 'SharkMan5000',
        message: `It's really great being the shark man`,
        posted: new Date().getTime() + 1
    },
    {
        user: 'SharkMan5000',
        message: `Truly a great day to be sharkin'`,
        posted: new Date().getTime() + 2
    },
    {
        user: 'Octoman',
        message: `I'm so tired of all these star wars.`,
        posted: new Date().getTime() + 3
    }
]
    console.log(dummyData[0].posted)
    return (
        <div>
            {dummyData.map((post) => (<Message post={post} />))}
        </div>
    )
}
