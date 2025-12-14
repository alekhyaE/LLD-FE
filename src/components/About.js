import { LANG } from '../utils/langConstants';
const About = ({lang}) =>{
    return(
        <div>
           <h1>{LANG[lang].title}</h1>
           <h2>{LANG[lang].desc}</h2>
           <p>{LANG[lang].title2}</p>
           <p>{LANG[lang].title3}</p>
           <p>{LANG[lang].title4}</p>
        </div>
        
    );
}

export default About;
