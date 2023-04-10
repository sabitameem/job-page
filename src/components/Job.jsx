import React from 'react';
import {MapPinIcon,CurrencyDollarIcon} from '@heroicons/react/24/solid'

const Job = ({job}) => {
    console.log(job)
    const {postName,compName,type,city,country,salary,img}=job;
    console.log(type)
    return (
        <div className='border-2 border-slate-100 rounded-lg ps-3 py-5'>
            <img className='w-24 h-14 p-2' src={img} alt="" />
            <p className='text-xl font-semibold text-gray-800 '>{postName}</p>
            <p className='text-lg text-gray-500'>{compName}</p>
{/* job type button */}
            <div className='flex space-x-3'>
                <button className='btn-outline'>{type}</button>
                
                <button className='btn'>Full Time</button>
            </div>

{/*salary and city  */}
            <div className='flex space-x-3 my-2'>
            <div className='flex text-gray-500 '>
            <MapPinIcon className="h-6 w-6 text-gray-300 me-1" />
            <p>{city ? city : 'Dhaka'},</p><p>{country ? country : 'Bangladesh'}</p>
            </div>
            <div className='flex text-gray-500'>
            <CurrencyDollarIcon className="h-6 w-6 text-gray-300 me-1" />
            <p>Salary :{salary}</p>
            </div>
            </div>
{/* details btn */}
          <button className='btn'>View Details</button>
        </div>
    );
};

export default Job;