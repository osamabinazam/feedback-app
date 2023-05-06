
import FeedBackItem from "./feedbackItem";



function FeedbackList({feedback}){

    if (!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }


    return (
        <div className="feedback-list">
            {
                feedback.map((item) => (
                   <FeedBackItem key={item.id} item={item}  />
                ))
            }
        </div>
    );

}

export default FeedbackList;