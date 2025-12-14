const Shimmer = () =>{
    return Array(15).fill(0).map((n,i)=>(
        <div key={i} class="child-container">
        <div class="image-alt" alt="meme"></div>
        <div class="image1" ></div> <div class="image1" ></div>
        <div class="image1" ></div>

    </div>
    )) 
       
    
}

export default Shimmer;
