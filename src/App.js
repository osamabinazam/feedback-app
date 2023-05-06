
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStat from "./components/FeedbackStat";

function App(){

    // App Level State
    const [feedback , setFeedback] = useState(FeedbackData);
    const deleteFeedback = (id) => {
        
        if (window.confirm("Are you sure you want to delete ? "))
        {
            setFeedback(feedback.filter((item) => item.id !== id ))
        }
        
    }
    return (
        <>
            <Header/>
            <div className="container">
                <FeedbackStat feedback = {feedback}/>
                <FeedbackList 
                feedback = {feedback}
                handleDelete={deleteFeedback}/>
            </div>
        </>
    );
}
export default App;