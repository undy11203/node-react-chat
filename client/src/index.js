import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {io} from 'socket.io-client'
import Store from './store/store';


const store = new Store()
export const Context = createContext({
  store
})

const socket = io.connect('http://localhost:5000', { autoConnect: true })
export const Soc = createContext(socket)

ReactDOM.render(
  <Context.Provider value={{store}}>
    <App />
  </Context.Provider>
  ,
  document.getElementById('root')
);
