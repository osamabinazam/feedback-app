
import { useState } from "react";
import Header from "./components/Header";
import FeedBackItem from "./components/feedbackItem";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App(){

    // App Level State
    const [feedback , setFeedback] = useState(FeedbackData);

    return (
        <>
            <Header/>
            <div className="container">
               <FeedbackList feedback = {feedback}/>
            </div>
        </>
    );
}
export default App;