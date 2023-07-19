import React from 'react'

interface TrackProps {
  isActive?:boolean;
  isPlaying?:boolean;
  activeSong?:any
}
const Track: React.FC<TrackProps> = (props) => {
  const {isActive,isPlaying,activeSong} = props
  return (
    <div className='flex-1 flex items-center justify-center '>
        <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]':''} hidden sm:block h-16 w-16 mr-4`}>
         <img src={activeSong?.artworkUrl100} alt="cover art" className="rounded-full" />
        </div>
        <div className='w-[50%]'>
           <p className='truncate text-white font-bold text-lg'>{activeSong?.trackName ? activeSong?.trackName : "No Active Song"}</p>
           <p className='truncate text-gray-300'>{activeSong?.primaryGenreName ? activeSong?.primaryGenreName : "No Active Song"}</p>
        </div>
   </div>
  )
}

export default Track