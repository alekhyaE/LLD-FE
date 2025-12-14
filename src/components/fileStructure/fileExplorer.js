import { useState } from "react";
import File from "./file";

const data1=[
    {
        name:"node_modules",
        isFolder: true,
        id:"1",
        children:[
        ]

    },
    {
        name:"practise",
        isFolder: true,
        id:"2",
        children:[
            {   name:"src",
                isFolder:true,
                id:"3",
                children:[{
                    name:"components",
                    isFolder:true,
                    id:"4",
                    children:[
                        {
                            name:"Login.js",
                            isFolder:false,
                            children:[],
                            id:"5",
                        },
                        {
                            name:"Team.js",
                            isFolder:false,
                            children:[],
                            id:"6",
                        }
                    ]
                }
                ]

            }
        ]
    },
    {
        name:"package.json",
        isFolder: false,
        id:"7",
        children:[
        ]
    },
    {
        name:"package-lock.json",
        isFolder: false,
        id:"8",
        children:[
        ]
    }
]
const FileExplorer =() =>{
    const [data, setData]=useState(data1)
    return (<div>

        <File list={data} setData={setData}/> 
    </div>)
}
export default FileExplorer;
