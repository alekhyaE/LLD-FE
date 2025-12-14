import { useEffect, useState } from "react";

const ImageSlider = () =>{
    const [activeIndex,setActiveIndex]=useState(0);
    const images = [
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
        "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
        "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
        "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
      ];
      const loadPrevImage= ()=>{
        setActiveIndex((activeIndex)=>activeIndex-1<0?images.length-1:activeIndex-1)
      }
      const loadNextImage= ()=>{
        setActiveIndex((activeIndex)=>activeIndex+1<images.length-1?activeIndex+1:0)
      }

    useEffect(()=>{
       let timer= setInterval(()=>{
            loadNextImage()
        },2000);
        return ()=>{clearInterval(timer)}
    },[])  
    return (
        <div class='image-container'>
             <img
                onClick={loadPrevImage}
                class="arrows"
                alt="left arrow"
                src="https://cdn0.iconfinder.com/data/icons/glyphpack/26/nav-arrow-left-512.png"
        />
            <img class="banner" src={images[activeIndex]} alt="banner"/>
            <img 
                 onClick={loadNextImage}
                class="arrows"
                alt="left arrow"
                src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        />
        </div>
    )
}

export default ImageSlider;
