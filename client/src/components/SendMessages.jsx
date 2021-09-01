import React, { useState } from 'react'
import MyInput from './MyInput'
import '../styles/SendMessages.css'
import printMsg from '../socket/printMsg'

const SendMessages = ({socket}) => {
    const [msg, setMsg] = useState('')

    function chatMsg(e){
        if(e.code == 'Enter'){
            printMsg([msg, localStorage.getItem('username')])
            socket.emit('chat_msg', [msg, localStorage.getItem('username')])
            setMsg('')
        }
    }

    return (
        <div>
            <MyInput 
                placeholder='Пиши сюда' 
                type='text'
                className='input_msg'
                value={msg}
                onChange={(e)=>setMsg(e.target.value)}
                onKeyDown={(e) => chatMsg(e)}
            />
            <button className='btn_send' >отправить</button>
        </div>
    )
}

export default SendMessages
