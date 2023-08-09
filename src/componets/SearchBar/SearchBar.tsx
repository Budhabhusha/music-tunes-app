import React, { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
interface SearchBarProps {
  handleSearch:(arg:string)=> void
}
const SearchBar:React.FC<SearchBarProps> = (props) => {
  const [searchTerm,setSearchTerm ] = useState('')
  const {handleSearch} = props
   
  const handleChange = (e:any) =>{
    setSearchTerm(e.target.value)
    handleSearch && handleSearch(e.target.value)
  }

  return (
  <form onSubmit={(e:any)=> e.preventDefault()} autoComplete='off' className='p-2 text-gray-400 focus-within:text-gray-900'>
    <label htmlFor='search-field' className='sr-only'>
      Search all songs
    </label>
    <div className="flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-700 outline-none text-base text-white p-4"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
  </form>
  )
}

export default SearchBar