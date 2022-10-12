import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Topic = () => {
    const quizData = useLoaderData();
    const {name,total}= quizData.data
    console.log(quizData.data);
    return (
        <div>
            <h3>Quiz for {name}</h3>
            <p>Total Quiz for {name} :{total} </p>
            <Link to='/quiz'>Start quiz</Link>
                {

                }
        </div>
    );
};

export default Topic;