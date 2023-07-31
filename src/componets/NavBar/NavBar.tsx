import React, { useState } from 'react'
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import {RiCloseLine} from 'react-icons/ri'
import {NavLink} from 'react-router-dom'
import MusicLogo from '../../assets/logo2.gif'
import UserLogo from '../../assets/userlogo.jpeg'
import { useDispatch } from 'react-redux'
import { setToken } from '../../store/auth/autgSlice'
import SideBar from '../SideBar/SideBar'
const NavBar = () => { 
  const dispatch = useDispatch()
  const [isOpen,setIsOpen] = useState(false)
  const [sideBarOpen,setSideBarOpen] =useState(false)
  const handleLogut = () =>{
    dispatch(setToken(null))
  }

  return (
    <nav className="bg-gradient-to-br bg-neutral-950	rounded-t-sm top-0 z-50 fixed inset-x-0">
   <div className="max-w-8xl px-4 sm:px-6 lg:px-8">
     <div className="flex items-center justify-between h-16">
       <div className="flex items-center">
       {
        sideBarOpen ? (
          <RiCloseLine onClick={()=> setSideBarOpen(false)} className="w-6 h-6 text-white mr-2"/> 
        ) : <HiOutlineMenu onClick={()=> setSideBarOpen(true)} className="w-6 h-6 text-white mr-2"/>
       }
       {sideBarOpen && <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>}
        <img className="h-10 w-auto" src={MusicLogo} alt="Logo" />
       </div>
       <div className="md:block d-flez">
         <div className="ml-4 flex items-center md:ml-30">
           <div className="ml-3 relative">
             <div className='flex justify-end'>
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
                   className="h-10 w-10 rounded-full"
                   src={UserLogo}
                   alt="User Avatar"
                 />
                 
               </button>
             </div>
            {
              isOpen &&
              <div
              className="origin-top-right absolute right-0 mt-2 w-22 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50"
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
                onClick={handleLogut}
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
  )
}

export default NavBar