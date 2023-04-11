import React from 'react';

const SingleCategory = ({singleCategory}) => {
    const {id,name,img,jobs}=singleCategory;
    return (
        <div>
            <div className='bg-gray-100  lg:h-52 lg:w-72 mb-3 rounded-lg p-5'>
                    <img className='lg:mt-6' src={img} alt="" />
                    <h3 className='text-lg font-semibold lg:text-2xl lg:font-bold text-gray-800 mt-3'>{name}</h3>
                    <p className='text-sm lg:text-base text-gray-400 my-3'>{jobs}</p>
                </div>
        </div>
    );
};

export default SingleCategory;