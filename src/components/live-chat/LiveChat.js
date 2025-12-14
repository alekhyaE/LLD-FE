import ChatWindow from "./ChatWindow";
import VideoStream from "./VideoStram";

const LiveChat = () =>{
    return(
        <div class="chat-container">
            <VideoStream/>
            <ChatWindow/>
        </div>
    )
}
export default LiveChat;
