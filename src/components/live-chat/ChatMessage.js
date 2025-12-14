const ChatMessage =({name,photo,message}) =>{
    return(
        <div class="parent-chat">
            <div class="image2">
            <img src={photo} alt="pic" width="40px" height="40px"/>
            </div>
            <div class="container">
            <div>{name}</div>
            <div>{message}</div>
            </div>
        </div>
    )
}

export default ChatMessage;
