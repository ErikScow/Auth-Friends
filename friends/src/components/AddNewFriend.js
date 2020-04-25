import React, { useState } from 'react'

const AddNewFriend = () => {
    const [inputs, setInputs] = useState({
        id: 0,
        name: '',
        age: '',
        email: ''
    })

    const [newFriend, setNewFriend] = useState({
        userName: '',
        passWord: ''
    })

    const handleChanges = e => {
        console.log(inputs)
        setInputs({ 
            ...inputs, 
            [e.target.name] : e.target.value
        })
    }

    return(
        <form>
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
            <button type='submit'>Login</button>
        </form>
    )
}

export default AddNewFriend