import { useState } from 'react';
import { useDispatch } from 'react-redux'
import PlayPause from '../PlayPause'
import { setActiveSong,playPause } from '../../store/features/songSlice'
import Modal from '../../componets/Modal'

interface SongsCardProps {
    activeSong?:any;
    isPlaying?:boolean;
    id?:number;
    song?:any;
}

const SongsCard: React.FC<SongsCardProps> = (props) => {
const {activeSong,isPlaying,id,song } = props
const [showModal,setShowModal] = useState(false)
// const {isActive} = useSelector((state:any)=>state.songs)

const dispatch = useDispatch()
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }
  const handlePlayClick = (e:any) => {
     e.stopPropagation()
    if(activeSong?.previewUrl === song?.previewUrl) {
      dispatch(setActiveSong(song));
    } else {
      dispatch(setActiveSong(song));
    }
    dispatch(playPause(true));
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
    <div className={`flex flex-col w-[250px] md:w-[200px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer ${activeSong?.trackId === id && isPlaying ? 'border-2 border-red-500' : ""}`} onClick={()=>setShowModal(true)}>
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong === song?.trackName ? 'flex bg-black bg-opacity-70 ' : 'hidden'}`}>
          <PlayPause 
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          activeSong={activeSong}
          isPlaying={isPlaying}
          id={id}
          />
        </div>
        <img alt="song_image" src={song?.artworkUrl100?.replace('100x100', '500x500')} className="w-full h-full rounded-lg"/>
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>{song?.trackName}</p>
        <p className='text-sm truncate text-gray-300 mt-1'>{song.artistName}</p>
      </div>
    </div>
     {showModal && <Modal showModal={showModal} activeSong={activeSong} onClose={handleCloseModal} song={song} />}  
     </>
  )
}

export default SongsCard