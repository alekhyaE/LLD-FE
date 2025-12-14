const Settings = ({data,setData}) =>{
    let theme=data.settings;
    const handleDataChange =(e) =>{
        setData((prevState)=>(
            {
                ...prevState,
                theme:e.target.name
            }
        ))
    }
    return (
        <div>
            <label>Dark
            <input type="radio" name="dark" value={theme=='dark'} onChange={(e)=>handleDataChange(e)}/>
            </label>
            <label>Light
            <input type="radio" name="light" value={theme=='light'} onChange={(e)=>handleDataChange(e)}/>
            </label>
        </div>
    )
}
export default Settings;
