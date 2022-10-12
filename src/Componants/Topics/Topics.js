import React from 'react';
import './topics.css';
import image from '../../download.jpg';
import { Link, useLoaderData } from 'react-router-dom';

const Topics = () => {
    // const {name}= quiz;
    const quiz = useLoaderData().data;
    
    console.log(quiz);
    return (
        
        <div className='container-box justify-items-center bg-[#097a55] text-white'>
        {
            quiz.map(quiz=><div>
                       <div className='w-100px card  rounded-lg p-6 shadow-xl'>
               
               <img className='image' src={quiz?.logo} alt="" />
               <h2 className='text-3xl'>{quiz?.name} </h2>
               <p>Total Quiz: {quiz?.total}</p>
               <button className='p-2 rounded bg-fuchsia-500'><Link to ={`/topics/${quiz?.id}`} >Click to start</Link></button>
           </div>
           
           
            </div>)
        }
          
         
        </div>
    );
};

export default Topics;