import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'

function FeedbackStat({feedback}){

    // Calculate Average rating
    let averageRating = feedback.reduce((acc,cur) =>{
        return acc + cur.rating;
    }, 0) / feedback.length;

    // Fixing averageRating to one decimal place and removing trailing zero if average is like 9.0
    averageRating = averageRating.toFixed(1).replace('/[.,]0$/', '')
    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
        </div>
    )
}

// Setting Props
FeedbackStat.propTypes = {
    feedback:PropTypes.array.isRequired,
}

export default FeedbackStat;