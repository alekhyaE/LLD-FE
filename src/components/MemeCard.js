const MemeCard = ({props}) =>{
    
    return (
        <div class="child-container">
            <img class="image" src={props.url} alt="meme"/>
            <p class="caption">{props.author}</p>
        </div>
    );
}

export default MemeCard;
