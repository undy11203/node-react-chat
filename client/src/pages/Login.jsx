import React, { useContext, useState } from 'react'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import '../styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    const {store} = useContext(Context)

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



    return (
        <div className='login_page'>
            <h1>Авторизация</h1>
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
                <button onClick={(() => store.login(email, username, password))}>Войти</button>
                <Link to='/registration'>Нет акка?</Link>
            </div>
        </div>
    )
}

export default observer(Login)
