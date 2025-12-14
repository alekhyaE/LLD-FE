const FECard =({data})=>{
    return (
        <div class="FECard">
            <div class='card-container'>
             <img class="image-card" src={data.thumbnail}></img>
            <h1>{data.title}</h1>
            <h2>{data.price}</h2>
            <h2>{data.rating}</h2>
            </div>
        </div>
    )
}
export default FECard;
