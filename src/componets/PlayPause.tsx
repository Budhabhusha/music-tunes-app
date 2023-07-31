import React from 'react'
import { useSelector } from 'react-redux';
import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa'
interface PlayPauseProp {
  activeSong?:any;
  isPlaying?:any;
  handlePause?(e:any): any;
  handlePlay?(e:any):any;
  id?:number
}

const PlayPause:React.FC<PlayPauseProp> = (props) => {
  const {id,isPlaying,handlePause,handlePlay,activeSong} = props
  return (
    <> 
    {
      isPlaying && activeSong?.trackId === id ? 
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