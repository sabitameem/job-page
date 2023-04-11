import React from 'react';

const Blog = () => {
    return (
        <div className='my-container'>
            <div>
                <h2 className='text-xl font-semibold lg:text-3xl lg:font-bold text-gray-950'>When should you use context API?</h2>
                <p className='text-lg lg:text-xl font-medium lg:font-semibold text-gray-600 mb-3'>When the state is changed by many components, in this case, it's complicated for each change to deliver the new data to other components manually. Making them connected to the same global state (one source of truth) will make the code cleaner and easy to maintain and debug.</p>
            </div>
            <div>
                <h2 className='text-xl font-semibold lg:text-3xl lg:font-bold text-gray-950'>
                What is a custom hook?
                </h2>
                <p className='text-lg lg:text-xl font-medium lg:font-semibold text-gray-600 mb-3'>
                Custom Hook is a feature in React that allow you to create reusable logic that can be shared across multiple components.
                </p>
            </div>
            <div>
                <h2 className='text-xl font-semibold lg:text-3xl lg:font-bold text-gray-950'>What is useRef?</h2>
                <p className='text-lg lg:text-xl font-medium lg:font-semibold text-gray-600 mb-3'>useRef is a mutable hook which returns you a space where you can mutate and it will not affect the React lifecycle which means when you change some data in there, it does not provoke any reactiveness.</p>
            </div>
            <div>
                <h2 className='text-xl font-semibold lg:text-3xl lg:font-bold text-gray-950'>What is useMemo?</h2>
                <p className='text-lg lg:text-xl font-medium lg:font-semibold text-gray-600'>This hook is very similar to useCallback, the difference is that useCallback returns a memoized callback and useMemo returns a memoized value, the result of that function call.</p>
            </div>
        </div>
    );
};

export default Blog;