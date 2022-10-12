import React from 'react';
import { useLoaderData } from 'react-router-dom';
import image from '../../download.jpg';
import Topics from '../Topics/Topics';
import './Home.css';

const Home = () => {
    const quizes = useLoaderData().data;
    
    console.log(quizes);
    return (
        <div className='bg-indigo-500'>
            <h2 className='text-center text-2xl '>Total Quiz Fields: {quizes.length} </h2>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
            <h1 className='text-center'>Test your inner strength</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed aut rerum pariatur rem sit fuga vero odio velit nobis labore mollitia eveniet id harum culpa dignissimos iusto, illum vitae.</p>
            </div>
         <div className='container-box'>
         {
                quizes.map(quiz => <Topics
                    key = {quiz.id}
                    quiz= {quiz}
                    ></Topics>
                )
            }
         </div>
         
        </div>
    );
};

export default Home;