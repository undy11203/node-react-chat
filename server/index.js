require('dotenv').config()
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
    }})
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const router = require('./router/index')
const errorMiddleware = require('./middlewares/error-middleware');
const socket = require('./sockets/socket')

const PORT = process.env.PORT || 6000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/api', router)
app.use(errorMiddleware)

socket(io)

const start = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        server.listen(PORT, ()=> console.log(`Server on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()