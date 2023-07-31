import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../componets/NavBar/NavBar'
import SideBar from '../../componets/SideBar/SideBar'
import {FaBars} from 'react-icons/fa'

const AppLayout = () => {
  return (
    <div>
      <div className='flex h-screen fixed mt-10 inset-x-0 bg-black w-full'>
        <main className="flex-1">
          <NavBar/>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout