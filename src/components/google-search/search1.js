import { useEffect, useState } from "react";

const Search1 =() =>{
    const [searchText,setSearchText]=useState("");
    const [results,setResults]=useState([]);
    const [isResultVisible,setIsResultVisible]=useState(true);
    const [cache,setCache]= useState({});
    const fetchData = async () =>{
        if(cache[searchText]){
            setResults(cache[searchText])
        }else{
        const data= await fetch("https://thingproxy.freeboard.io/fetch/https://www.google.com/complete/search?client=firefox&q="+searchText);
        const json = await data.json();
         setResults(json[1]);
         console.log(results)
         cache[searchText]=json[1]
        }
    }
    useEffect(()=>{
        let s=setTimeout(() => {
            fetchData();
        }, 3000);
        return ()=>clearTimeout(s)
    },[searchText])
    return (
        <div>
            <div>
                <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} onFocus={()=>setIsResultVisible(true)} onBlur={()=>setIsResultVisible(false)}/>
                {
                   isResultVisible && results.map((result,index)=>(
                        <div key={index}>{result}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Search1
