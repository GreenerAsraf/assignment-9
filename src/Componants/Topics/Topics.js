import React from 'react';
import './topics.css';
import image from '../../download.jpg';
import { Link } from 'react-router-dom';

const Topics = ({quiz}) => {
    // const {name}= quiz;
    
    console.log(quiz?.name);
    return (
        <div className='container-box justify-items-center bg-[#097a55] text-white'>
          
            <div className='w-100px card  rounded-lg p-6 shadow-xl'>
               
                <img className='image' src={quiz?.logo} alt="" />
                <h2 className='text-3xl'>{quiz?.name} </h2>
                <p>Total Quiz: {quiz?.total}</p>
                <br />
                <Link className='p-2 rounded bg-fuchsia-500'>Click to start</Link>
            </div>
        </div>
    );
};

export default Topics;