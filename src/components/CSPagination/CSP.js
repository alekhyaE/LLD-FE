import { useEffect, useState } from "react";
import CSPCard from "./CSPCard";


const CSP=()=>{
    let TOTAL =200;
    let PER_PAGE=10;
    
    useEffect(()=>{
        fetchData()
    },[]);
    const [products,setProducts]= useState([]);
  
    const [pN, setPN]= useState(0);
    const [total,setTotal]=useState(0)
    let start=(pN*PER_PAGE);
    let end=(pN+1)*PER_PAGE
    const fetchData= async()=>{
        const data= await fetch(`https://dummyjson.com/products?limit=${TOTAL}`);
        const json= await data.json();
        setProducts(json.products);
        setTotal(Math.ceil(json.total/PER_PAGE))
    }
    return(
        <div>
            {console.log(start,end)}
            {products.slice(start,end).map((x)=>(
                <CSPCard product={x}/>
            ))
}
            {pN>0 && <span  onClick={()=>setPN(pN=>pN-1)}>Prev</span>}
            {[...Array(total)].keys().map((key,i)=>(
                <span key={i} class="btn-cursor" onClick={()=>setPN(key)}>{key+1}</span>
            ))}
             {pN<total && <span  onClick={()=>setPN(pN=>pN+1)}>Next</span>}
        </div>
    )
}

export default CSP;
