import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";
const TabForm = () =>{

    const [activeTab,setActiveTab]=useState(0);
    const [errors,setErrorMessage]=useState("");
    let ActiveTabComponent;
    // const data={
    //         name:"Alekhya",
    //         age:26,
    //         email:"ak@gmail.com",
    //         interets:["coding","JS"],
    //         settings:"dark"
    //     }
    const [data,setData]=useState({
        name:"",
        age:10,
        email:"ak@gmail.com",
        interets:["coding","JS"],
        settings:"dark"
    })
    const tabData=[
        {
            name:"Profile",
            component:Profile,
            validate: ()=>{
                let err={}
                if(data.name.length==0 || data.name.length<2){
                    err.name="name not valid"
                }
                if(data.age<18){
                    err.age="age not valid"
                }
                if(data.email.length<2){
                    err.email="email not valid"
                }
                setErrorMessage(err)
                return err.name || err.age|| err.email?false:true
            }
        },
        {
            name:"Interest",
            component:Interest,
            validate: ()=>{
                let err={}
                if(data.interets.length==0){
                    err.interets="select atleast 1 interest"
                }
                setErrorMessage(err)
                return err.interets ?false:true
            }
        },
        {
            name:"Settings",
            component:Settings,
            validate: ()=>{
               
            }
        }
    ]
    ActiveTabComponent=tabData[activeTab].component
    return (
        <div>
            <div class="tab-container">
            
                {tabData.map((tab,index)=>(
                    <h3 key={index} onClick={()=>tabData[activeTab].validate() && setActiveTab(index)}>{tab.name}</h3>
                ))
                }
            </div>   
            <div>
                <ActiveTabComponent data={data} setData={setData} errors={errors}/>
            </div>
            <div>
               {activeTab>0 && <button onClick={()=>tabData[activeTab].validate()&&  setActiveTab((activeTab)=>activeTab-1)}>Prev</button>}
               {activeTab<tabData.length-1 && <button onClick={()=>tabData[activeTab].validate() && setActiveTab((activeTab)=>activeTab+1)}>Next</button>}
               {activeTab==tabData.length-1 && <button>Submit</button>}
            </div>    
        </div>
       
    )
}
export default TabForm;
