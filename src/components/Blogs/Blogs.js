import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section className='blog-row-container'>
            <div className='blog-row'>
                <div className='blog-column'>
                    <h1>QA: Purpose of context API</h1>
                    <p>এক component থেকে আর এক component এ data
                        পাঠাতে হলে props drilling করে data পাঠাতে পারি |
                        এ method immediat component এ data পাঠানোর জন্য সুবিধা জনক |
                        যদি component chain অনেক হয় তাহলে target component এ data পাঠাতে
                        Contex api প্রতিটি স্তরে manually props down না করেই component tree এর
                        মাধ্যমে data pass করে | </p>
                </div>
                <div className='blog-column'>
                    <h1>QA: Sementic tag</h1>
                    <p>
                        নন-সিমেন্টিক element তাদের content সম্পর্কে কিছুই বর্ণনা করে না।
                        সিমেন্টিক element গুলো দেখলেই বুঝতে পারি এর content এ কি থাকবে।
                        <p>Semantic Elements are</p>
                        <ul>
                            <li>header</li>
                            <li>nav</li>
                            <li>main</li>
                            <li>section</li>
                            <li>article</li>
                            <li>aside</li>
                            <li>footer</li>
                            <li>details</li>
                            <li>mark</li>
                            <li>time</li>
                            <li>summery</li>
                        </ul>
                    </p>
                </div>
            </div>
            <h1> QA: Different of Display inline, block, inline-block</h1>
            <div className='blog-row2'>
                <div className='blog-column2'>
                    <h4>Inline:</h4>
                    <p>1. Inline element শুরু হতে কোন new line প্রয়োজন হয় না</p>
                    <p>2. এই element শুধুমাত্র যতটুকু প্রয়োজন ততটুকু  প্রস্থ নেয়।</p>
                    <p></p>
                </div>
                <div className='blog-column2'>
                    <h4>Block:</h4>
                    <p>1. Block element শুরু হতে  new line প্রয়োজন হয় </p>
                    <p>2. এই element সম্পূর্ন প্রস্থ দখল করে নেয়।</p>
                    <p></p>
                </div>
                <div className='blog-column2'>
                    <h4>Inline-Block:</h4>
                    <p>Inline-block অনেকটা inline এর মতোই ,
                        পার্থক্য হচ্ছে Inline-block এ width এবং height কাজ করে ,
                        কিন্তু inline এ width এবং height কাজ করেনা।</p>
                    <p></p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;