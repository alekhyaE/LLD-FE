import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
const ChatWindow = () =>{



    const [messages,setMessages]=useState([]);
    var nameList = [
        "Time",
        "Past",
        "Future",
        "Dev",
        "Fly",
        "Flying",
        "Soar",
        "Soaring",
        "Power",
        "Falling",
        "Fall",
        "Jump",
        "Cliff",
        "Mountain",
        "Rend",
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Gold",
        "Demon",
        "Demonic",
        "Panda",
        "Cat",
        "Kitty",
        "Kitten",
        "Zero",
        "Memory",
        "Trooper",
        "XX",
        "Bandit",
        "Fear",
        "Light",
        "Glow",
        "Tread",
        "Deep",
        "Deeper",
        "Deepest",
        "Mine",
        "Your",
        "Worst",
        "Enemy",
        "Hostile",
        "Force",
        "Video",
        "Game",
        "Donkey",
        "Mule",
        "Colt",
        "Cult",
        "Cultist",
        "Magnum",
        "Gun",
        "Assault",
        "Recon",
        "Trap",
        "Trapper",
        "Redeem",
        "Code",
        "Script",
        "Writer",
        "Near",
        "Close",
        "Open",
        "Cube",
        "Circle",
        "Geo",
        "Genome",
        "Germ",
        "Spaz",
        "Shot",
        "Echo",
        "Beta",
        "Alpha",
        "Gamma",
        "Omega",
        "Seal",
        "Squid",
        "Money",
        "Cash",
        "Lord",
        "King",
        "Duke",
        "Rest",
        "Fire",
        "Flame",
        "Morrow",
        "Break",
        "Breaker",
        "Numb",
        "Ice",
        "Cold",
        "Rotten",
        "Sick",
        "Sickly",
        "Janitor",
        "Camel",
        "Rooster",
        "Sand",
        "Desert",
        "Dessert",
        "Hurdle",
        "Racer",
        "Eraser",
        "Erase",
        "Big",
        "Small",
        "Short",
        "Tall",
        "Sith",
        "Bounty",
        "Hunter",
        "Cracked",
        "Broken",
        "Sad",
        "Happy",
        "Joy",
        "Joyful",
        "Crimson",
        "Destiny",
        "Deceit",
        "Lies",
        "Lie",
        "Honest",
        "Destined",
        "Bloxxer",
        "Hawk",
        "Eagle",
        "Hawker",
        "Walker",
        "Zombie",
        "Sarge",
        "Capt",
        "Captain",
        "Punch",
        "One",
        "Two",
        "Uno",
        "Slice",
        "Slash",
        "Melt",
        "Melted",
        "Melting",
        "Fell",
        "Wolf",
        "Hound",
        "Legacy",
        "Sharp",
        "Dead",
        "Mew",
        "Chuckle",
        "Bubba",
        "Bubble",
        "Sandwich",
        "Smasher",
        "Extreme",
        "Multi",
        "Universe",
        "Ultimate",
        "Death",
        "Ready",
        "Monkey",
        "Elevator",
        "Wrench",
        "Grease",
        "Head",
        "Theme",
        "Grand",
        "Cool",
        "Kid",
        "Boy",
        "Girl",
        "Vortex",
        "Paradox",
      ];
      
      function generateRandomNames() {
        var finalName = nameList[Math.floor(Math.random() * nameList.length)];
        return finalName;
      }


    const fetchData =()=>{
        const data = [
            {
              name: generateRandomNames(),
              photo:"https://yt3.ggpht.com/ytc/AIdro_knFNg8Ovd9iFseBKSP6LWoaAkaIoXFTUDSrn_jxoQYll8=s600-c-k-c0x00ffffff-no-rj-rp-mo",
              message:
                "This is a live streaming chat video in Namaste Frontend System Design series.",
            },
        ];
        let temp;
        setMessages((messages)=>{
             temp=[...data,...messages];
             temp.slice(0,100)
            return temp;


    })
    }

    useEffect(()=>{
        let s=setInterval(fetchData,5000)
        return ()=>clearInterval(s)
    },[])


    return(
        <div class="msg-container">
            {
                messages.map((message,index)=>(
                    <ChatMessage name={message.name} photo={message.photo} message={message.message} key={index} />
                ))
            }
        </div>
    )
}
export default ChatWindow;
