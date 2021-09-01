import printMsg from "./printMsg"

export default function userJoin(socket, current_room, user){
    socket.emit('userJoinRoom', [current_room, user])
    printMsg([`you join in ${current_room}`, 'Server'])
}


