import React, { useEffect, useState } from 'react';
import ShowAppJobs from './ShowAppJobs';


const AppliedJob = () => {
         const [data,setData]= useState([])

         useEffect(()=>{
            const storedData=localStorage.getItem("jobs");

            if(storedData){
                setData(JSON.parse(storedData));
            }
         },[])

    return (
        <div >
            {/* Banner */}
             <div className='bg-gray-100'>
                <img className='relative h-9 lg:h-[140px]' src="https://i.ibb.co/gjN3xK0/Vector.png" alt="" />
                <p className='text-3xl lg:absolute lg:top-32 end-1/2 text-gray-800 text-center font-bold'>Applied Jobs</p>
                </div>
                {
                    data?.map(appliedjobs =>
                        //console.log(appliedjobs)
                        <ShowAppJobs
                        appliedjobs={appliedjobs}
                        key={appliedjobs.id}
                        ></ShowAppJobs>
                    
                    )
                }
           
            
        </div>
    );
};

export default AppliedJob;