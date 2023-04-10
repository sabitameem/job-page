import React from 'react';

const CatergoryJob = () => {
    return (
        <div>
            <h2 className='text-center text-2xl lg:text-4xl lg:mt-12 font-bold lg:mb-3 mb-2'>Job Category List</h2>
            <p className='text-gray-400 text-sm text-center lg:text-base mb-3 lg:mb-5'>Explore thousands of job opportunities with all the information you need. Its your future.</p>
            <div className='lg:flex justify-between sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:mb-12  gap-x-7 mx-3'>

                <div className='bg-gray-100  lg:h-52 lg:w-80 mb-3 rounded-lg p-5'>
                    <img className='lg:mt-6' src="/src/assets/Icons/accounts 1.png" alt="" />
                    <h3 className='text-lg font-semibold lg:text-2xl lg:font-bold text-gray-800 mt-3'>Account & Finance</h3>
                    <p className='text-sm lg:text-base text-gray-400 my-3'>300 Jobs Available</p>
                </div>

                <div className='bg-gray-100  lg:h-52 lg:w-72 mb-3 rounded-lg p-5'>
                    <img className='lg:mt-6' src="/src/assets/Icons/business 1.png" alt="" />
                    <h3 className='text-lg font-semibold lg:text-2xl lg:font-bold text-gray-800 mt-3'>Creative Design</h3>
                    <p className='text-sm lg:text-base text-gray-400 my-3'>100+ Jobs Available</p>
                </div>

                <div className='bg-gray-100  lg:h-52 lg:w-80 mb-3 rounded-lg p-5'>
                    <img className='lg:mt-6' src="/src/assets/Icons/social-media 1.png" alt="" />
                    <h3 className='text-lg font-semibold lg:text-2xl lg:font-bold text-gray-800 mt-3'>Marketing & Sales</h3>
                    <p className='text-sm lg:text-base text-gray-400 my-3'>150 Jobs Available</p>
                </div>
                <div className='bg-gray-100  lg:h-52 lg:w-80 mb-3 rounded-lg p-5'>
                    <img className='lg:mt-6' src="/src/assets/Icons/chip 1.png" alt="" />
                    <h3 className='text-lg font-semibold lg:text-2xl lg:font-bold text-gray-800 mt-3'>Engineering Job</h3>
                    <p className='text-sm lg:text-base text-gray-400 my-3'>224 Jobs Available</p>
                </div>
                
                

            </div>
             
        </div>
    );
};

export default CatergoryJob;