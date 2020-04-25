import React, { useState } from 'react'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddNewFriend = props => {
    const [inputs, setInputs] = useState({
        id: new Date(),
        name: '',
        age: '',
        email: ''
    })

    const handleChanges = e => {
        setInputs({ 
            ...inputs, 
            [e.target.name] : e.target.value
        })
    }

    const add = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/friends', inputs)
            .then(res => {
                props.setFriends(res.data)
            })
    }

    return(
        <form onSubmit={add}>
            <input 
                type='text'
                name='name'
                value={inputs.name}
                placeholder='name'
                onChange={handleChanges}
            />
            <input 
                type='text'
                name='age'
                value={inputs.age}
                placeholder='age'
                onChange={handleChanges}
            />
            <input 
                type='text'
                name='email'
                value={inputs.email}
                placeholder='email'
                onChange={handleChanges}
            />
            <button type='submit'>Add Friend</button>
        </form>
    )
}

export default AddNewFriend