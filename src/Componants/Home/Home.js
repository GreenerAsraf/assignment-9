import React from 'react';
import image from '../../download.jpg';
import Topics from '../Topics/Topics';

const Home = () => {
    return (
        <div className='bg-indigo-500'>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
            <h1 className='text-center'>Test your inner strength</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed aut rerum pariatur rem sit fuga vero odio velit nobis labore mollitia eveniet id harum culpa dignissimos iusto, illum vitae.</p>
            </div>
            <Topics></Topics>
        </div>
    );
};

export default Home;