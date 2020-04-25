import React, { useState } from 'react'

const Login = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })

    const [credentials, setCredentials] = useState({
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