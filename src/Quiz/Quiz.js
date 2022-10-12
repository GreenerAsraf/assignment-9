import React from 'react';

const Quiz = ({question}) => {
    console.log(question);
    return (
        <div>
              <div className='text-white'>
             
                <p className='bg-violet-500'>{question.question}</p>
                
                {question.options.map(option =><p><input type="checkbox" name="" id="" /> {option} </p>)}
              </div>
        </div>
    );
};

export default Quiz;