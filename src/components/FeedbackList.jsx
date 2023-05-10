// import { motion } from 'framer-motion';
// import { AnimatePresence } from 'framer-motion';
// import AnimatePresence from './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs';


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
            {/* <AnimatePresence> */}
            {
            feedback.map((item) => (
                    // <motion.div 
                        // key={item.id}
                        // initial={{ opacity: 0}}
                        // animate={{ opacity: 1}}
                        // exit={{opacity:0}}
                    // >
                    <FeedBackItem 
                    key={item.id} 
                    item={item} 
                    handleDelete= {handleDelete}  />
                    // </motion.div> 
                ))
            }
            {/* </AnimatePresence> */}
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