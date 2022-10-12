import React from 'react';
import { useLoaderData } from 'react-router-dom';
import image from '../../download.jpg';
import Topics from '../Topics/Topics';
import './Home.css';

const Home = () => {
    // const quizes = useLoaderData().data;
    
    // console.log(quizes);
    return (
        <div className='bg-indigo-500 title-container'>
            {/* <h2 className='text-center text-2xl '>Total Quiz Fields: {quizes.length} </h2> */}
            <div>
                <img src={image} alt="" />
            </div>
            <div>
            <h1 className='text-center'>Test your inner strength</h1>

            <p>Quiz is one of the best way ti judge ourselves in a simliest way. In our website,you can check 
                your programming knowledge with our standard multiple choice questions.
            </p>
            </div>
         <div className='container-box'>
         {/* {
                quizes.map(quiz => <Topics
                    key = {quiz.id}
                    quiz= {quiz}
                    ></Topics>
                )
            } */}
         </div>
         
        </div>
    );
};

export default Home;