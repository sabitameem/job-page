import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
 } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
       <div className='bg-gray-100'>
         <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex justify-between items-center rounded-md'>

<Link to='/'><h2 className='text-2xl font-bold'>Job Page</h2></Link>


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



<button className='btn'>Start Applying</button>
</div>
       </div>
    );
};

export default Header;