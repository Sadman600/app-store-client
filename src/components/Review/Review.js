
import React from 'react';
import './Review.css';
const Review = props => {
    const { name, body, image } = props.review;
    return (
        <div className='review'>
            <img src={image} alt="Avatar" style={{ width: "100px", height: '100px' }} />
            <div>
                <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
                <p>John Doe saved us from a web disaster.</p>
            </div>
        </div>
    );
};

export default Review;