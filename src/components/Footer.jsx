import React from 'react';

const Footer = () => {
    return (
        <div className=' text-white bg-black flex justify-between items-center lg:p-12 sm:[h-50%] w-full'>
           <div className='lg:w-[30%] sm:me-2'>
            <h2 className='text-2xl font-bold sm:text-lg '>Job Page</h2>
            <p className='text-gray-500 sm:[h-30%] lg:text-base sm:text-sm'>Job Page is the world's leader in technical interviewing. We partner with organizations to increase capacity to interview</p>
            <img className='sm:w-[50%] sm:h-[50%] mt-1' src="/src/assets/Icons/Group 9969.png" alt="" />
           </div>

         <div className='lg:flex'>
              
           <div className='mb-4'>
              <h2>Company</h2>
              <p className='text-gray-500 lg:text-base'>About Us</p>
              <p className='text-gray-500 lg:text-base'>Work</p>
              <p className='text-gray-500 lg:text-base'>Latest news</p>
              <p className='text-gray-500 lg:text-base'>Careers</p>
           </div>

           <div>
              <h2>Product</h2>
              <p className='text-gray-500 lg:text-base'>Prototype</p>
              <p className='text-gray-500 lg:text-base'>Plans & Pricing</p>
              <p className='text-gray-500 lg:text-base'>Customers</p>
              <p className='text-gray-500 lg:text-base'>Integrations</p>
           </div>
         </div>

           <div className='lg:flex'>
           <div className='mb:4'>
              <h2>support</h2>
              <p className='text-gray-500 lg:text-base'>Help Desk</p>
              <p className='text-gray-500 lg:text-base'>Sales</p>
              <p className='text-gray-500 lg:text-base'>Become a Partner</p>
              <p className='text-gray-500 lg:text-base'>Developers</p>
           </div>
           <div>
            <h2>Contact</h2>
            <p className='text-gray-500 lg:text-base'>524 Broadway , NYC</p>
            <p className='text-gray-500 lg:text-base'>+1 777 - 978 - 5570</p>
           </div>
           </div>
           </div>
        
    );
};

export default Footer;