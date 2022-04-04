import logo from '../img/img_app.jpg';
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <section className="container">
            <div className='row'>
                <div className='left-column'>
                    <h1 className='xlarge-font'><b>The App</b></h1>
                    <h1 className='large-font'><b>Why buy it?</b></h1>
                    <p><span style={{ fontSize: '30px' }}>Take photos like a pro.</span>
                        Flippa is the app entrepreneur's marketplace;
                        buy, sell and browse thousands of iOS and Android
                        app businesses for sale.
                        Easily sell your products or services through your web site.
                        Add a "Now On Sale" or "Buy It Now" widget with PayPal button.</p>
                    <button className="button">Download Application</button>
                </div>
                <div className='right-column'>
                    <img src={logo} alt='img'></img>
                </div>
            </div>
        </section>
    );
};

export default Home;
