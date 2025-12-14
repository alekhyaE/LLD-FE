import { useEffect, useState } from "react";
import MemeCard from './MemeCard';
import Shimmer from "./Shimmer";
const Body =()=> {
    const [memes,setMemes] = useState([]);
    const [showShimmer,setShowShimmer]=useState(true);
    
    useEffect(()=>{
        fetchMemes();
        window.addEventListener("scroll",handleScroll);
    },[]);

    const fetchMemes = async ()=>{
        setShowShimmer(true)
        const data = await fetch("https://meme-api.com/gimme/20");
        const jsonData= await data.json();
        console.log(jsonData);
        setMemes((memes)=>[...memes,...jsonData.memes]);
        setShowShimmer(false)
        //setMemes((memes)=>[...memes,...jsonData.memes]);
    }
    const handleScroll=()=>{
        if(window.innerHeight+window.scrollY>= document.body.scrollHeight){
            fetchMemes();
     }
    }
    return (
        <div className="parent-container">
            {memes?.map((meme,i)=><MemeCard key={i} props={meme}/>)}
            {showShimmer && <Shimmer/>}
        </div>
    );
}

export default Body;
