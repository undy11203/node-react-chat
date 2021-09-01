import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '..'

const Registration = () => {
    const {store} = useContext(Context)

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='login_page'>
            <h1>Регистрация</h1>
            <div className='form_regist'>
                <input 
                    onChange={e => setEmail(e.target.value)} 
                    type='text' placeholder='email' 
                    value={email}
                    />
                <input 
                    onChange={e => setUsername(e.target.value)} 
                    type='text' placeholder='name..' 
                    value={username}
                    />
                <input 
                    onChange={e => setPassword(e.target.value)} 
                    type='password' placeholder='pass..' 
                    value={password}
                    />
                <button onClick={(() => store.registration(email, username, password))}>Зарегистрироваться</button>
                <Link to='/login'>Есть акк?</Link>
            </div>
        </div>
    )
}

export default Registration
