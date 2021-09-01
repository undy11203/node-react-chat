import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { privateRoutes } from '../router'
import userJoin from '../socket/sockets'
import '../styles/Navbar.css'

const Navbar = ({socket}) => {
    
    

    return (
        <div className='navbar'>
            <button 
                className="link_chat" 
                to='/home'
                onClick={()=> userJoin(socket, 'home', localStorage.getItem('username'))}                 
            >
                Home
            </button>
            <button 
                className="link_chat" 
                to='/game'
                onClick={()=> userJoin(socket, 'game', localStorage.getItem('username'))}                 
            >
                Game
            </button>
            <button 
                className="link_chat" 
                to='/other'
                onClick={()=> userJoin(socket, 'other', localStorage.getItem('username'))}                 
            >
                Other
            </button>
        </div>
    )
}

export default Navbar
