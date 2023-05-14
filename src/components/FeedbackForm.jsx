
import { useState } from 'react'

import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [message , setMessage] = useState('')


    // Arrow function that handle change in field
    const handleTextChange = (e) =>{
        if (text === ''){
            setBtnDisabled (true)
            setMessage(null)
        }
        else if (text !== '' && text.trim().length <=10) {
            setMessage ('Text must be at least 10 characters long')
            setBtnDisabled(true)
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }
        console.log(e.target.value)
        setText(e.target.value)

    }

    // 
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (text.trim().length >=10){
            const newFeedback = {
                text,
                rating,
            }
            console.log(rating)
            handleAdd(newFeedback)
            setText('')
        }
    }

   

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service ?</h2>
                {/* todo- Rating select component */}
                <RatingSelect select={(rating)=>setRating(rating)}/>
                <div className="input-group">
                    <input 
                        onChange={handleTextChange} 
                        type="text" 
                        placeholder='Write a review.'
                        value={text} 
                    />
                    <Button 
                        type='submit'
                        version='primary'
                        isDisabled={btnDisabled}
                    >
                        Send
                    </Button>

                </div>
                {message && <div className='message '>{message}</div>}
            </form>
        </Card>
  )
}

export default FeedbackForm
