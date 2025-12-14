const CSPCard=({product}) =>{
    return (
        <div class="FECard">
            <div class='card-container'>
             <img class="image-card" src={product.thumbnail}></img>
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
            <h2>{product.rating}</h2>
            </div>
        </div>
    )
}
export default CSPCard;
