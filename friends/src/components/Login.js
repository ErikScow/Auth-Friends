import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e => {
        console.log(inputs)
        setInputs({ 
            ...inputs, 
            [e.target.name] : e.target.value
        })
    }

    const history = useHistory()

    const login = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/login', inputs)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                history.push('/friends')
            })
    }

    return(
        <form onSubmit={login}>
            <input 
                type='text'
                name='username'
                value={inputs.username}
                placeholder='username'
                onChange={handleChanges}
            />
            <input 
                type='password'
                name='password'
                value={inputs.password}
                placeholder='password'
                onChange={handleChanges}
            />
            <button type='submit'>Login</button>

        </form>
    )
}

export default Login