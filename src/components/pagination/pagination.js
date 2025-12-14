import { useEffect, useState } from "react";
import PaginationCard from "./PaginationCard";

const Pagination  = () =>{
    const LIMIT=15;
    const [currentPage,setCurrentPage]=useState(0);
    const [noOfPages,setNoOfPages]=useState(0);
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetchProducts();
    },[currentPage])

    const fetchProducts= async()=>{
        const data = await fetch(
            `https://dummyjson.com/products?limit=${LIMIT}&skip=${
              currentPage * LIMIT
            }&select=title,price,description,thumbnail,discountPercentage`
          );
        const jsonData= await data.json();
        console.log(jsonData.products)
        setProducts(jsonData.products);
        setNoOfPages(Math.ceil(jsonData.total/LIMIT));
    }



    return (
        <div class='parent-prod'>
            {<PaginationCard props={products}/>}
            
                <div>
                    {currentPage>0 &&<span class="pageno" onClick={()=>setCurrentPage((currentPage)=>currentPage-1)}>Prev</span>}
                    {[...Array(noOfPages).keys()].map((pN)=>(
                        <span class="pageno" key={pN} onClick={()=>setCurrentPage(pN)}>{pN+1}</span>
                    ))}
                   {currentPage<noOfPages-1 && <span class="pageno" onClick={()=>setCurrentPage((currentPage)=>currentPage+1)}>Next</span>}
                </div>
          
        </div>
    );
}
export default Pagination;
