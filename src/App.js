import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStat from "./components/FeedbackStat";
import FeedbackForm from "./components/FeedbackForm";
import About from './pages/About';
import AboutLinkIcon from './components/AboutLinkIcon';
import Post from './components/Post';


function App(){

    // App Level State
    const [feedback , setFeedback] = useState(FeedbackData);

    // 
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        // Setting feedback to global state
        setFeedback([newFeedback, ...feedback])
    }

    // 
    const deleteFeedback = (id) => {
        
        if (window.confirm("Are you sure you want to delete ? "))
        {
            setFeedback(feedback.filter((item) => item.id !== id ))
        }
        
    }


    return (

        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                        <FeedbackForm handleAdd={addFeedback} />
                        <FeedbackStat feedback={feedback}/>
                        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                    {/*  Path parameters and redirecting*/}
                    {/* <Route path="/post/:id/:name" element={<Post />} /> */}
                    
                </Routes>
                
            </div>
            <AboutLinkIcon />
        </Router>


    );
}
export default App;