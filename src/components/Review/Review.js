
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import './Review.css';
const Review = props => {
    const [rating, setRating] = useState(50)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // other logic
    }
    const { name, body, image } = props.review;
    return (
        <div className='review'>
            <img src={image} alt="Avatar" style={{ width: "100px", height: '100px' }} />
            <div>
                <p><span>Name: {name}</span></p>
                <p>Comment:- {body.slice(0, 70)}</p>
                <div>
                    <Rating onClick={handleRating} ratingValue={rating}></Rating>
                </div>
            </div>

        </div>
    );
};

export default Review;