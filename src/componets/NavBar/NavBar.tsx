import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './style.css'
const NavBar = () => {
  return (
    <div>
        <ul className='navbar'>
          {/* <li><Link to='/'>Login</Link></li> */}
          <li><NavLink to='/home'>Home</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar