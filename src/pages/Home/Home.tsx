import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      Welcom to Home
      <Link to='/user/bhushan'>Bhushan</Link>
      <Link to='/user/amit'>Amit</Link>
    </div>
  )
}
export default Home