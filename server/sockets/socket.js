module.exports = function socket(io) {
    io.on('connection', function(socket){

        let current_room = ''

        socket.on('userJoinRoom', (data)=>{
            socket.leave('home')
            socket.leave('game')
            socket.leave('other')
            socket.join(data[0])
            console.log(data)
            current_room = data[0]
            socket.to(current_room).emit('joinRoomMsg', data)
        })

        socket.on('chat_msg', (data)=>{
            console.log(data)
            socket.to(current_room).emit('msg', data)
        })
    })
};
