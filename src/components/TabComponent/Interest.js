
const Interest = ({data,setData,errors}) =>{

    let interets=data.interets;
    const handleDataChange=(e)=>{
        setData((prevState)=>(
            {...prevState,
             interets: e.target.checked?[...prevState.interets,e.target.name]: prevState.interets.filter((x)=>x!=(e.target.name))
            }
        ));
        // console.log(prevState)
    }
    return (
        <div>
            <label>
            <input type="checkbox" name="coding" checked={interets.includes('coding')}  onChange={(e)=>handleDataChange(e)}/>Coding
            </label>
            <label>
            <input type="checkbox" name="JS" checked={interets.includes('JS')}  onChange={(e)=>handleDataChange(e)}/>javascript
            </label>
            <label>
            <input type="checkbox" name="music" checked={interets.includes('music')}  onChange={(e)=>handleDataChange(e)}/>Music
            </label>
            <div>{errors.interets}</div>
        </div>
    )
}
export default Interest;
