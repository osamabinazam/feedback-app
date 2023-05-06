import { useState } from "react"


function FeedBackItem(){


    // Component states
    const [rating , setRating] =  useState(0)
    const [text, setText] = useState("This is an example of feedback")

    const handleClick = () =>{
        setRating((prev) =>{
            return prev+1;
        })
    }

    return(
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-dispaly">{text}</div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default FeedBackItem