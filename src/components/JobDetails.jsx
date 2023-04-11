import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {BriefcaseIcon,CurrencyDollarIcon,EnvelopeIcon,MapPinIcon,PhoneIcon} from '@heroicons/react/24/solid'
import addToDb from '../utilitis/fakeDB';

const JobDetails = () => {
    const data = useLoaderData()
    // console.log(data)
    const {jobDesc,jobResponsibility,eduReq,experience,salary,postName,phone,email,streetAddress,id}= data;
    console.log(id)
    return (
        <div>
            <div className='bg-gray-100'>
                <img className='relative h-9 lg:h-[140px]' src="https://i.ibb.co/gjN3xK0/Vector.png" alt="" />
                <p className='text-3xl lg:absolute lg:top-32 end-1/2 text-gray-800 text-center font-bold'>Job Details</p>

               
            </div>
{/* main part */}
<div  className='sm:max-w-xl m-4 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex space-x-12'>
    {/* text */}
    <div className='mb-3 lg:w-[60%]'>
                <h3 className='text-base text-gray-500'>
                <span className='text-lg text-gray-950 font-semibold'>Job Description : </span>{jobDesc}
                </h3>

                <h3 className='text-base text-gray-500 mb-5'>
                <span className='text-lg text-gray-950 font-semibold'>Job Responsibility : </span>{jobResponsibility}
                </h3>

                <h3 className='text-base text-gray-500 mb-5'>
                <span className='text-lg text-gray-950 font-semibold'>Educational Requirements : </span> <br />
                {eduReq}
                </h3>

                <h3 className='text-base text-gray-500 mb-5'>
                <span className='text-lg text-gray-950 font-semibold'> Experiences : </span> <br />
                {experience}
                </h3>
            </div>
{/* box */}
            <div className='bg-gray-200 p-4 rounded-lg lg:w-[30%] '>
                  <h2 className='text-2xl font-semibold mb-2'>Job Details
                  </h2>
            <div className='flex items-center text-gray-500'>
                     <CurrencyDollarIcon className="h-6 w-6 text-gray-400 me-1" />
            <p>
                <span className='text-gray-950 text-lg font-semibold'>Salary :</span>{salary}
            </p>
            </div>
            <div className='flex items-center text-gray-500'>
                <BriefcaseIcon className="h-6 w-6 text-gray-400 me-1"/>
                <p>
                    <span className='text-gray-950 text-lg font-semibold'>Job Title :</span>
                     {postName}</p>
            </div>

            <h2 className='text-xl font-semibold mb-2 mt-3 py-2'>Contact Information
                  </h2>
           <div className='flex items-center text-gray-500  py-1'>
              <PhoneIcon className="h-6 w-6 text-gray-400 me-1"/>
              <p>
                <span className='text-gray-950 text-lg font-semibold'>Phone :</span>
                     {phone}</p>
           </div>

           <div className='flex items-center text-gray-500  py-1'>
              <EnvelopeIcon className="h-6 w-6 text-gray-400 me-1"/>
              <p>
                <span className='text-gray-950 text-lg font-semibold'>Email :</span>
                     {email}</p>
           </div>

           <div className='flex items-center text-gray-500  py-1'>
              <MapPinIcon className="h-6 w-6 text-gray-400 me-1"/>
              <p>
                <span className='text-gray-950 text-lg font-semibold'>Address :</span>
                    {streetAddress} </p>
           </div>


            </div>
{/*box end  */}
</div>

<button className='bg-purple-400 hover:bg-purple-900 mt-4 lg:ms-[40%] ms-[20%] text-white rounded-lg p-3 w-36 lg:w-56 mb-8'>Apply Now</button>
        </div>
    );
};

export default JobDetails;