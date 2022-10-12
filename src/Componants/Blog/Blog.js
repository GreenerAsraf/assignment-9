import React from 'react';

const Blog = () => {
    return (
        <div className='container-blog p-10 m-6 bg-orange-300'>
           <h3 className='text-center bg-slate-300 p-4 text-5xl'>Welcome  to our Tech Blog</h3>

           <div className='m-5'>
         <div className='text-center'>
          
           <p className='text-2xl text-center'>What is the purpose of React Router?</p>
         </div>
           <hr />
         
           <p>
           React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
           </p>
           </div>
           <div  className='m-5'>
          
           <p className='text-2xl text-center'>How does Context API work?</p>
           <hr />
       
           <p>
           Context API is a kind of new feature added in version 16.3 of React that allows one to share state across the entire app or part of it lightly and with ease.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
           </p>
           </div>
           <div  className='m-5'>
          
           <p className='text-2xl text-center'>Describe UseRef Hook</p>
           <hr />
         
           <p>
           The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
           </p>
           </div>

        </div>
    );
};

export default Blog;