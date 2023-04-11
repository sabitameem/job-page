import React, { useState } from 'react';
import CatergoryJob from './CatergoryJob';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Job from './Job';


const Home = () => {
    const jobs = useLoaderData();
    const [showAll,setShowAll]=useState(false)
    // console.log(jobs)

    
    const handleShowAll=() =>{
      setShowAll(true);
                            }


    return (
        <div>
            <Banner></Banner>
           <CatergoryJob></CatergoryJob> 
          <div className='my-container'>
            <h3 className='text-gray-900 text-2xl font-bold lg:text-5xl lg:font-bold text-center'>Featured Jobs</h3>
            <p className='text-gray-400 mb-2 sm:text-base lg:mb-5 lg:mt-3 sm:mt-1  text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
              <div className='lg:grid gap-6 lg:grid-cols-2 space-y-4 lg:space-y-0'>
            
            {jobs.slice(0, showAll? 9: 4).map(job=> 
                // console.log(job)
                <Job 
                key={job.id}
                job={job}
                ></Job>
                )
           }
           
              </div>
             {!showAll &&(
              <span onClick={handleShowAll}>
                 <button className='btn mt-5 lg:ms-[50%]'>See All Jobs</button>
              </span>
             )}
          </div>
           
        </div>
    );
};

export default Home;