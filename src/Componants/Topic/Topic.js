import React from 'react';
import './topic.css';
import { Link, useLoaderData } from 'react-router-dom';
import Quiz from '../../Quiz/Quiz';

const Topic = () => {
    const quizData = useLoaderData();
    const {name,total,logo,questions}= quizData.data
    console.log(quizData.data);
    return (
        <div className='text-center half-width border bg-black text-lime-50'>
            <div className='align-middle justify-center'>
            <h3>Quiz for {name}</h3>
            <p>Total Quiz for {name} :{total} </p>
          <button className='bg-red-400 p-2 rounded-sm '>  <Link  to='/quiz'>Start quiz</Link></button>
            </div>
            <div>
            <img className='  w-72' src={logo} alt="" />
            </div>
            
             {

                questions.map(question=><Quiz
                question={question}
                key={question.id}></Quiz>)
                }
        </div>
    );
};

export default Topic;