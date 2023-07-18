import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import MusicLogo from '../../assets/logo2.gif'
import UserLogo from '../../assets/userlogo.jpeg'

const NavBar = () => { 
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div>
    <nav className="bg-gradient-to-r from-purple-800 to-purple-500">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div className="flex items-center justify-between h-16">
       <div className="flex items-center">
         <img className="h-12 w-auto rounded-full" src={MusicLogo} alt="Logo" />
       </div>
       <div className="hidden md:block">
         <div className="ml-4 flex items-center md:ml-6">
           <div className="ml-3 relative">
             <div>
               <button
                 className="max-w-xs bg-gray-800 flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                 id="user-menu"
                 aria-haspopup="true"
                 onClick={()=>{
                  setIsOpen(!isOpen)
                 }}
               >
                 <span className="sr-only">Open user menu</span>
                 <img
                   className="h-8 w-8 rounded-full"
                   src={UserLogo}
                   alt="User Avatar"
                 />
                 
               </button>
             </div>
            {
              isOpen &&
              <div
              className="origin-top-right absolute right-15 mt-2 w-22 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              {/* Dropdown items */}
              <NavLink 
                to="/"
                // href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Logout
              </NavLink>
            </div>
            }
           </div>
         </div>
       </div>
     </div>
   </div>
 </nav>
</div>
  )
}

export default NavBar