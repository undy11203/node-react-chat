export default function printMsg(msg){
    let list_messages = document.querySelector('.list_messages')
    let item = document.createElement('li');
    item.textContent = `${msg[1]}: ${msg[0]}`;
    list_messages.appendChild(item);
}