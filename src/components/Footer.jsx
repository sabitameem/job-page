import React from 'react';

const Footer = () => {
    return (
        <div className=' text-white bg-black flex justify-between items-center lg:p-12 sm:[h-50%]'>
           <div className='lg:w-[30%] sm:[h-50%]'>
            <h2 className='text-2xl font-bold sm:text-lg'>Job Page</h2>
            <p className='text-gray-500 sm:[h-30%]'>Job Page is the world's leader in technical interviewing. We partner with organizations to increase capacity to interview, unlock software engineering productivity, and deliver an exceptional candidate experience</p>
            <img className='sm:w-[50%] sm:h-[50%] mt-1' src="/src/assets/Icons/Group 9969.png" alt="" />
           </div>

           
           <div>
              <h2>Company</h2>
              <p className='text-gray-500'>About Us</p>
              <p className='text-gray-500'>Work</p>
              <p className='text-gray-500'>Latest news</p>
              <p className='text-gray-500'>Careers</p>
           </div>

           <div>
              <h2>Product</h2>
              <p className='text-gray-500'>Prototype</p>
              <p className='text-gray-500'>Plans & Pricing</p>
              <p className='text-gray-500'>Customers</p>
              <p className='text-gray-500'>Integrations</p>
           </div>

           <div>
              <h2>support</h2>
              <p className='text-gray-500'>Help Desk</p>
              <p className='text-gray-500'>Sales</p>
              <p className='text-gray-500'>Become a Partner</p>
              <p className='text-gray-500'>Developers</p>
           </div>
           <div>
            <h2>Contact</h2>
            <p className='text-gray-500'>524 Broadway , NYC</p>
            <p className='text-gray-500'>+1 777 - 978 - 5570</p>
           </div>
           </div>
        
    );
};

export default Footer;