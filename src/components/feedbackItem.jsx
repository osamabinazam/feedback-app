// import { useState } from "react"
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
import React from 'react'
import ReactDOM from 'react-dom'

function FeedBackItem({ item, handleDelete} ){


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
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() =>handleDelete(item.id)} > 
            <FaTimes color="purple"/></button>
            <div className="text-dispaly">{item.text}</div>
        </Card>
    )
}

 FeedBackItem.propType = {
    item:PropTypes.object.isRequired,
}

export default FeedBackItem