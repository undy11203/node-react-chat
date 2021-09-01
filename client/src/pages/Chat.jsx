import React, { useContext, useEffect, useState } from 'react'
import { Context, Soc } from '..'
import { observer } from 'mobx-react-lite'
import Navbar from '../components/Navbar'
import '../styles/Chat.css'
import MyInput from '../components/MyInput'
import SendMessages from '../components/SendMessages'
import { useLocation } from 'react-router-dom'
import printMsg from '../socket/printMsg'
import userJoin from '../socket/sockets'

const Home = () => {
    const {store} = useContext(Context)
    const socket = useContext(Soc)
    const [msg, setMsg] = useState('')
    useEffect(()=>{
        userJoin(socket, 'home', localStorage.getItem('username'))
    }, [])


    socket.on('msg', (data)=>{
        printMsg(data)
    })
    socket.on('joinRoomMsg', (data)=>{
        printMsg([`user ${data[1]} join in ${data[0]}`, 'Server'])
    })

    return (
        <div>
            <Navbar socket={socket} />
            <div className="chatArea">
                <ul className="list_messages"></ul>
            </div>
            <SendMessages socket={socket}/>
            <button className='exit' onClick={() => store.logout()}>Выйти</button>
        </div>
    )
}

export default observer(Home)