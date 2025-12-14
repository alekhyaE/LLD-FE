import CommentBox from "./CommentBox";

const comments=[
    {
        comment:'Lorem ipsum dolor sit amet consectetur adip occurence velit',
        name:'Alekhya',
        replies:[
            {
                comment:'Lorem ipsum dolor sit amet consectetur adip occurence velit',
                name:'Kavya',
            }
        ]
    },
    {
        comment:'Lorem ipsum dolor sit amet consectetur adip occurence velit',
        name:'Nagamani',
        replies:[
            {
                comment:'Lorem ipsum dolor sit amet consectetur adip occurence velit',
                name:'Kavya',
            },
            {
                comment:'Lorem ipsum dolor sit amet consectetur adip occurence velit',
                name:'Vishnu',
            },
            {
                comment:'Lorem ipsum dolor sit amet consectetur adip occurence velit',
                name:'Vivian',
                replies:[
                    {
                        comment:'Lorem ipsum dolor sit amet consectetur adip occurence velit',
                        name:'Kavya',
                    },
                    {
                        comment:'Lorem ipsum dolor sit amet consectetur adip occurence velit',
                        name:'Kavya',
                        replies:[
                            {
                                comment:'Lorem ipsum dolor sit amet consectetur adip occurence velit',
                                name:'Kavya',
                            }
                        ]
                    },
                    
                ]
            }
        ]
    },
    {
        name: "Sachin Tendulkar",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    }
]
const Comments=() =>{
    return (
        <div>
            
            <CommentBox props={comments}/>
        
        </div>
    )
}
export default Comments;
