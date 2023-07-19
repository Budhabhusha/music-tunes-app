import React from 'react'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs'

interface ControlsProps {
  isPlaying?: boolean
  activeSong?: any;
  repeat?: boolean;
  setRepeat?: any;
  shuffle?: boolean;
  setShuffle?: any;
  handlePlayPause?: () => void
  handlePrevSong?: () => void
  handleNextSong?: () => void
}

const Controls: React.FC<ControlsProps> = (props) => {
  const { isPlaying, handlePlayPause, handlePrevSong, handleNextSong, repeat, setRepeat,shuffle,setShuffle } = props
  return (
    <div className='flex items-center justify-around md:w-36 lg:w-52 2xl:w-80"'>
      <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev: any) => !prev)} className="hidden sm:block cursor-pointer" />
      <MdSkipPrevious size={30} color='#FFF' className='cursor-pointer' onClick={handlePrevSong} />
      {isPlaying ? (
        <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      ) : (
        <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      )}
      <MdSkipNext size={30} color='#FFF' className='cursor-pointer' onClick={handleNextSong} />
      <BsShuffle size={20} color={shuffle ? 'red' : 'white'} onClick={()=> setShuffle((prev:any)=>!prev)} className='hidden sm:block cursor-pointer'/>
    </div>
  )
}

export default Controls