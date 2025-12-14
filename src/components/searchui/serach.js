import { useEffect, useState } from "react";

const Search= () =>{
    const [searchText,setSearchText]=useState("");
    const [results,setResults]=useState([]);
    const [isResultVisible,setIsResultVisible]=useState(true);
    const [cache,setCache]= useState({});

    const fetchData =async()=>{
        if(cache[searchText]){
            setResults(cache[searchText])
        }else{
        const data= await  fetch("https://thingproxy.freeboard.io/fetch/https://www.google.com/complete/search?client=firefox&q="+searchText);
        const jsonData= await data.json();
        console.log(jsonData);
        setResults(jsonData[1])
        cache[searchText]=jsonData[1]
        }

    }
    useEffect(()=>{

        let s= setTimeout(() => {
            fetchData();
        }, 5000);
        return ()=>clearTimeout(s)
    },[searchText])


    return (
        <div class="search-container">
            <div>
            <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}
            onFocus={() => setIsResultVisible(true)}
            onBlur={() => setIsResultVisible(false)}></input>
            </div>
            <div>
                {isResultVisible && results.map((result,index)=>(
                    <div key={index}>{result}</div>
                ))}
                </div>
        </div>
    )
}
export default Search;
