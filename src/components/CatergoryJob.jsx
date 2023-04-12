import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';

const CatergoryJob = () => {

    const [data,setData] = useState();

    useEffect(()=>{
        const loadData =async()=>{
            const res = await fetch('category.json')
            const data = await res.json();
            setData(data)
        }
        loadData()
    },[])


    return (
        <div>
            <h2 className='text-center text-2xl lg:text-4xl lg:mt-12 font-bold lg:mb-3 mb-2'>Job Category List</h2>
            <p className='text-gray-400 text-sm text-center lg:text-base mb-3 lg:mb-5'>Explore thousands of job opportunities with all the information you need. Its your future.</p>

            <div className='lg:flex justify-between sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:mb-12  gap-x-7 mx-3'>
            {
                data?.map((singleCategory) =>{
                    return <SingleCategory
                    key={singleCategory.id}
                    singleCategory={singleCategory}
                    ></SingleCategory>
                })
            }
                

               
                
                

            </div>
             
        </div>
    );
};

export default CatergoryJob;