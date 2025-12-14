const CommentBox=({props}) =>{
   return (props.map((comments,index)=>(
    <div class='comments-container' key={index}>
        <div class="check">
            <div class='image-container'>
                <img class="profile-pic" src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png" alt="profile-pic"/>
            </div>
            <div>
                <p class='username'>{comments.name}</p>
                <p>{comments.comment}</p>
            </div>
      
             <div> {comments.replies && <CommentBox props={comments.replies}/>}</div>
         </div>
         </div>
   )))
};    
export default CommentBox;
