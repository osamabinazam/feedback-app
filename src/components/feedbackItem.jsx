// import { useState } from "react"


function FeedBackItem({ item } ){


    //  Component level states
    // const [rating , setRating] =  useState(0)
    // const [text, setText] = useState("This is an example of feedback")

    // Handle modification of button of each list item
    // const handleClick = () =>{
    //     setRating((prev) =>{
    //         return prev+1;
    //     })
    // }

    return(
        <div className="card">
            <div className="num-display">{item.rating}</div>
            <div className="text-dispaly">{item.text}</div>
        </div>
    )
}

export default FeedBackItem