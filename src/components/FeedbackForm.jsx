
import { useState } from 'react'

import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    // Arrow function that handle change in field
    const handleTextChange = (e) =>{
        setText(e.target.value);
    }

    return (
        <Card>
            <form action="" >
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
                        version='secondary'
                    >
                        Send
                    </Button>

                </div>
            </form>
        </Card>
  )
}

export default FeedbackForm
