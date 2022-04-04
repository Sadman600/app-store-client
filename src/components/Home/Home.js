import logo from '../img/img_app.jpg';
import React from 'react';
import './Home.css';
import useReviews from '../hook/useReviews';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviews();

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
            <div className='reviews-row'>
                <div className='reviews-column'>
                    <h1 style={{ fontSize: '25px', color: 'tomato' }}>Customers Reviews(3)</h1>
                    <div className='customers-reviews'>
                        {
                            reviews.slice(0, 3).map(review => <div className='review'>
                                <img src={review.image} alt="Avatar" style={{ width: "100px", height: '100px' }} />
                                <div>
                                    <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
                                    <p>John Doe saved us from a web disaster.</p>
                                </div>
                            </div>)
                        }
                    </div>
                    <button className="button"><Link to='/reviews'>See All Reviews</Link></button>
                </div>
            </div>
        </section>
    );
};

export default Home;
