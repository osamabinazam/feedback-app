import React from 'react'
import ReactDOM from 'react-dom'
import FeedBackItem from "./feedbackItem";
import PropTypes from 'prop-types'



function FeedbackList({feedback, handleDelete}){

    if (!feedback || feedback.length === 0){
        return <>No feedback yet</>
    }


    return (
        <div className="feedback-list">
            {
                feedback.map((item) => (
                   <FeedBackItem 
                   key={item.id} 
                   item={item} 
                   handleDelete= {handleDelete}  />
                ))
            }
        </div>
    );

}

FeedbackList.propTypes = {
    feedback:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
        })
    )
}

export default FeedbackList;