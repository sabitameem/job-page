import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
    Bars3BottomRightIcon,
    XMarkIcon,
    } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
       <div className='bg-gray-100'>
         <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex justify-between items-center rounded-md'>

     <Link to='/'><h2 className='text-2xl font-bold text-gray-900'>Job Page</h2></Link>


 {/* Nav Items Section */}
 <ul className='items-center hidden space-x-8 lg:flex'>
  <li>
    <NavLink
      to='/statistics'
      className={({ isActive }) => (isActive ? 'active' : 'default')}
    >
      Statistics
    </NavLink>
  </li>
  <li>
    <NavLink
      to='/appliedJob'
      className={({ isActive }) => (isActive ? 'active' : 'default')}
    >
      Applied Jobs
    </NavLink>
  </li>
  <li>
    <NavLink
      to='/blog'
      className={({ isActive }) => (isActive ? 'active' : 'default')}
    >
      Blog
    </NavLink>
  </li>
</ul>

{/* mobile navbar section */}
<div className='lg:hidden'>
     {/*dropdown open button  */}
         <button
         aria-label='Open Menu'
         title='Open Menu'
         onClick={() => setIsMenuOpen(true)}
         >
          <Bars3BottomRightIcon className='w-5 text-gray-600' />
         </button>

       {isMenuOpen &&(
        <div  className='absolute top-0 left-0 w-full z-10'>
                 <div className='p-5 bg-white border rounded shadow-sm'>
                   {/* Logo & Button section */}
                    <div className='flex items-center justify-between mb-4'>
                        <div>
                        <Link to='/' className='inline-flex items-center'>
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Job Page
                      </span>
                    </Link>
                        </div>
                        {/* Dropdown menu close button */}
                        <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                   <nav>
                   <ul className='space-y-4'>
                    <li>
                      <Link to='/statistics' className='default'>
                      Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/appliedJob'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400'
                      >
                        Applied Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400'
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                   </nav>
                    





                    </div>
                 </div>
           
        
       )

       }  

</div>






{/* btn section */}
<button className='btn'>Start Applying</button>
</div>
       </div>
    );
};

export default Header;