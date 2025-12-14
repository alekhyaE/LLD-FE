const PaginationCard= ({props}) =>{

    return(
      
            
                props.map((product)=>(
                    <div class="prod-container">
                        <img src={product.thumbnail}/>
                        <p>{product.title}</p>
                        <p class="card-desc">{product.description}</p>
                    </div>
                    
                ))
            
        
    )
}
export default PaginationCard;
