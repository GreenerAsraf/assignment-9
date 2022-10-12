import React from 'react';
import './topics.css';
import image from '../../download.jpg';
const Topics = () => {
    return (
        <div className='container-box justify-items-center bg-[#097a55] text-white'>
            <div className='w-100px card  rounded-lg p-6 shadow-xl'>
                <h2>React</h2>
                <img src={image} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                <button>Click to start</button>
                </div>
            <div className='w-100px card  rounded-lg p-6 shadow-xl'>
                <h2>React</h2>
                <img src={image} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                <button>Click to start</button>
                </div>
            <div className='w-100px card  rounded-lg p-6 shadow-xl'>
                <h2>React</h2>
                <img src={image} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                <button>Click to start</button>
                </div>
            <div className='w-100px card  rounded-lg p-6 shadow-xl'>
                <h2>React</h2>
                <img src={image} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                <button>Click to start</button>
                </div>
        </div>
    );
};

export default Topics;