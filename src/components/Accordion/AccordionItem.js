
const AccordionItem = ({title,body,showBody,setOpen}) =>{
    //const [showBody,setShowBody]=useState(false);
    return (
        <div class="accordion-container">
            <div class='title-accordion' onClick={(e)=>setOpen()}>
                <span>{title}</span>
                <span>⬇️</span>
            </div> 
            <div class="accordion-body">{showBody && body}</div>
       </div>
    )
}
export default AccordionItem;
