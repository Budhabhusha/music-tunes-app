import React from 'react'
import { useSelector } from 'react-redux';
import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa'
interface PlayPauseProp {
  activeSong?:any;
  isPlaying?:any;
  handlePause?(): any;
  handlePlay?():any;
  id?:number
}

const PlayPause:React.FC<PlayPauseProp> = (props) => {
  const {activeSong,id,isPlaying,handlePause,handlePlay} = props
  const {currentIndex} = useSelector((state:any)=> state.songs)
  return (
    <> 
    {
      isPlaying && activeSong && id === currentIndex ? 
      <FaPauseCircle
       size={35}
       className='text-gray-300'
       onClick={handlePause}
      /> : 
      <FaPlayCircle
      size={35}
      className='text-gray-300'
      onClick={handlePlay}
      />
    }
    </>
  )
}

export default PlayPause