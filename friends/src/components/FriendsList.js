import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import AddNewFriend from './AddNewFriend'

const FriendsList = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                setFriends(res.data)
            })
    }, [])

    return(
        <div>
            <AddNewFriend />
            {friends.map( friend => {
                return (
                    <div key={friend.id}>
                        <h2>{friend.name}</h2>
                        <h3>{friend.age}</h3>
                        <h3>{friend.email}</h3>
                    </div>
                )
            })}
            
        </div>
    )
}

export default FriendsList