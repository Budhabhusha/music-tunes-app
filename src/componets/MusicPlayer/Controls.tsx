import React from 'react'
import {MdSkipNext,MdSkipPrevious} from 'react-icons/md'
import {BsArrowRepeat, BsFillPauseFill,BsFillPlayFill,BsShuffle} from 'react-icons/bs'

interface ControlsProps {
  isPlaying?: boolean
  activeSong?:any;
  handlePlayPause?: ()=>void
}

const Controls:React.FC <ControlsProps> = (props) => {
  const {isPlaying,handlePlayPause} = props
  return (
    <div className='flex flex-item justify-around md:w-36 lg:w-52 2xl:w-80'>
      {/* <BsArrowRepeat size={20} className="hidden sm:block cursor-pointer"/> */}
      {isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    ) : (
      <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
    )}
      {/* <BsShuffle/> */}
    </div>
  )
}

export default Controls