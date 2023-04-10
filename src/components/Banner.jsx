import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gray-100 w-100 lg:mb-7 mb-3'>
            <div className='lg:flex py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <img className='lg:w-[50%] mx-auto pt-0 lg:h-96 h-56 rounded-lg' src="https://i.ibb.co/vDFYm2D/P3-OLGJ1-copy-1.png" alt="" />

           
                <div className='lg:w-[50%] lg:text-end ms-3 mt-4'>
                   <h3 className='text-gray-900 text-2xl font-bold lg:text-7xl lg:font-bold'>One Step <br />
                    Closer To Your <br />
                    <span className='text-purple-400 text-2xl font-bold lg:text-7xl lg:font-bold'>Dream Job</span>
                    </h3>
                    <p className='text-gray-400 mb-2 sm:text-base lg:mb-5 lg:mt-3 sm:mt-1 '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn'>Get Started</button>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;