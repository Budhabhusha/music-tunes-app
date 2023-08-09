import React from 'react'
import './style.css'

interface TrackProps {
  isActive?:boolean;
  isPlaying?:boolean;
  activeSong?:any
}
const Track: React.FC<TrackProps> = (props) => {
  const {isActive,isPlaying,activeSong} = props
  return (
    <div className='flex-1 flex items-center justify-center sm:w-[50%]'>
        <div className={`active-song-img ${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]':''} hidden sm:block mr-4`} style={{backgroundImage: `url(${activeSong?.artworkUrl100})`}}></div> 
        <div className='w-[100%]'>
           <p className='truncate text-white font-bold text-lg'>{activeSong?.trackName ? activeSong?.trackName : "No Active Song"}</p>
           <p className='truncate text-gray-300'>{activeSong?.primaryGenreName ? activeSong?.primaryGenreName : "No Active Song"}</p>
        </div>
   </div>
  )
}

export default Track