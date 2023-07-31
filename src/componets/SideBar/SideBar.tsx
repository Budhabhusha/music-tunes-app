import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import {HiHeart,HiMusicNote } from 'react-icons/hi';
import logo from '../../assets/logo2.gif'
import {RiCloseLine} from 'react-icons/ri'

const links = [
  { name: 'Songs', to: '/', icon: HiMusicNote },
  { name: 'Favoirt', to: '/', icon: HiHeart },
]

interface SideBarPros {
  sideBarOpen?:boolean;
  setSideBarOpen?:any
}
interface NavlinksProps {
  handleClick?: () => void
}
const NavLinks: React.FC<NavlinksProps> = ({handleClick}) =>(
  <div className="mt-10">
    {
      links.map((link:any)=>(
       <NavLink 
       key={link.name}
       to={link.to}
       className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-white"
       onClick={() => handleClick && handleClick()}
       >
        <link.icon className="w-6 h-6 mr-2"/>
        {link.name}
       </NavLink>
      ))} 
  </div>
)

const SideBar: React.FC<SideBarPros> = ({sideBarOpen,setSideBarOpen}) => {
  return (
    <>
     <div className={`absolute top-0 h-screen w-80 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 smooth-transition ${sideBarOpen ? 'left-0' : '-left-full'}`}>
     <div className="absolute block top-6 right-3">
      {
        sideBarOpen && <RiCloseLine onClick={()=> setSideBarOpen(false)} className="w-6 h-6 text-white mr-2"/> 
      }
      </div>
      <NavLinks handleClick={()=> setSideBarOpen(false)}/>
     </div>
    </>
  )
}

export default SideBar