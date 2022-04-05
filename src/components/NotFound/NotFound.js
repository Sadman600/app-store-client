import React from 'react';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="container">
            <h1 className='opps'>Oops!</h1>
            <h2>404 Not Found</h2>
            <div>
                <b>Sorry, an error has occured, Requested page not found!</b>
            </div>
        </div>
    );
};

export default NotFound;