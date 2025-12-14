import { useEffect, useState } from "react";
import FECard from "./FECard";
const TOTAL=200;
const LIMIT=15;
const FEPagination =()=>{
    const [totalPages,setTotal]=useState(0)
    const [products,setProducts]=useState([]);
    const [pN,setpN]=useState(1);

    let start=(pN-1)*LIMIT;
    let end = pN*LIMIT;

    const fetchData = async()=>{
        const data=await fetch(`https://dummyjson.com/products?limit=${TOTAL}`);
        const jsonData= await data.json();
        
        console.log(jsonData.products);
        setProducts(jsonData.products);
        //console.log(products);
        setTotal(Math.ceil(jsonData.total/LIMIT));
        
        

       
    }

    // const setData = (pN) =>{
    //    //setDisplayResults(prod1.slice((pN-1*LIMIT),pN));
    //    setpN(pN+1);
    //    // setProducts((products)=>products.slice((pN-1*LIMIT),pN))
    // }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div>
            <div class="FEContainer">
                {console.log("totalpages" +totalPages)}
        {console.log("pageno" +pN)}
            {
                products.slice(start,end).map((displayResult,index)=>(
                    <FECard key={index} data={displayResult}/>
                ))
            }
            </div>
            <div class="pagenos">
            {pN>1 && <span class="page-btns" onClick={()=>setpN((pN)=>pN-1)}>Prev</span>}
            {[...Array(totalPages).keys()].map((pN,index)=>(
                <span class="page-btns" key={index} onClick={()=>setpN(pN)}>{pN+1} </span>
            ))}
           {pN<totalPages-1 && <span class="page-btns" onClick={()=>setpN((pN)=>pN+1)}>Next</span>}

            </div>
            
        </div>
    );
}
export default FEPagination;
