const Profile = ({name,email,age,setData,errors}) =>{
    const handleDataChange=(e,itemName)=>{
        setData((prevState)=>(
            {...prevState,
            [itemName]:e.target.value
            }
        ));
        // console.log(prevState)
    }

    return (
        <div>
            <label>Name</label>
            <input width="100px" type="text" value={name} onChange={(e)=>handleDataChange(e,"name")}/>
            <div>{errors.name}</div>
            <label>email</label>
            <input width="100px" type="text" value={email} onChange={(e)=>handleDataChange(e,"email")}/>
            <div>{errors.email}</div>
            <label>Age</label>
            <input width="100px" type="number" value={age} onChange={(e)=>handleDataChange(e,"age")}/>
            <div>{errors.age}</div>
        </div>
    )
}
export default Profile;
