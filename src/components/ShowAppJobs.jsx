import React from 'react';
import {MapPinIcon,CurrencyDollarIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const ShowAppJobs = ({appliedjobs}) => {
    //console.log(appliedjobs)
    const {img,postName,compName,type,system,city,country,id,salary}=appliedjobs;
    return (
        <div className='ps-3 mt-8 h-auto py-5  lg:flex items-center justify-around bg-white my-4'>
            <div><img className='w-12 h-12 lg:w-28 lg:h-28' src={img} alt="" /></div>
            <div>
                <p className='text-lg lg:text-xl font-medium lg:font-semibold text-gray-800 '>{postName}</p>
                <p className='text-lg lg:text-xl text-gray-500'>{compName}</p>
                <div className='flex space-x-3'>
                <button className='btn-outline'>{type}</button>
                <button className='btn-outline'>{system}</button>
                </div>
                <div className='flex space-x-3 my-2'>
            <div className='flex text-gray-500 '>
            <MapPinIcon className="h-6 w-6 text-gray-400 me-1" />
            <p>{city ? city : 'Dhaka'},</p><p>{country ? country : 'Bangladesh'}</p>
            </div>
            <div className='flex text-gray-500'>
            <CurrencyDollarIcon className="h-6 w-6 text-gray-400 me-1" />
            <p>Salary :{salary}</p>
            </div>
            </div>
            </div>
            <Link to={`/job/${id}`}> <button className='btn'>View Details</button> </Link>
        </div>
    );
};

export default ShowAppJobs;