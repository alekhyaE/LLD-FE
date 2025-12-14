import { useState } from "react";

const File = ({list,setData}) =>{
    const [isExpanded,setIsExpanded]=useState({});

    const addNodeTree = (parentId)=>{
        const name=prompt("enter folder name");
        const updateTree=(list)=>{
       
           return list.map((l)=>{
                if(l.id==parentId){
                    
                    return {...l,
                        children:[...l.children,
                            { name:name,
                               id:new Date().toString(),
                               isFolder:true,
                             children:[]
                            }]
                    }
                }
                else if(l.children){
                    return {...l,children:updateTree(l.children,parentId)};
                }else
                return l;
        })
        }
       setData(prev=>updateTree(prev))
    }

    const deleteNodeTree = (parentId)=>{

        const updateTree= (list)=>{
           
            return list.filter((x)=>x.id!=parentId).map((y)=>{
                if(y.children){
              return {...y, children:updateTree(y.children)}
            }})
         }
        setData(prev=>updateTree(prev));
    }

    return (
        <div class="file-container">
            {
                list.map((temp)=>(
                <div key={temp.id}>
                    {
                    temp.isFolder && 
                    <span onClick={
                        ()=>setIsExpanded((prev)=>({...prev,[temp.name]:!prev[temp.name]})
                    )}>
                        {isExpanded[temp.name]?"-" : "+"  }
                    </span>}
                    <div key={temp.id}>{temp.name}
                    {temp.isFolder &&  <img class="folder-icon" onClick={()=>addNodeTree(temp.id)} src="https://img.icons8.com/?size=100&id=71186&format=png" alt="folder-icon"/>}
                    <img  class="folder-icon" onClick={()=>deleteNodeTree(temp.id)} src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png"/>
                    </div>
                    <div> 
                        {temp.children?.length>0 && isExpanded[temp.name] && 
                        <File list={temp.children} setData={setData}/>}
                    </div>
                    {/* <img  class="folder-icon" onClick={()=>deleteNodeTree(temp.id)} src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png"/> */}
                    <div>
                      
                    </div>
                </div>
                ))
            }
        </div>
    );
}
export default File;
