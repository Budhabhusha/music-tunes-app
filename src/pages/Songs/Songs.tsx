import Loader from '../../componets/Loader'
import Error from '../../componets/Error'
import SongsCard from '../../componets/SongsCard/SongsCard'
import {useSelector } from 'react-redux/es/hooks/useSelector'
import { useState } from 'react'
import Modal from '../../componets/Modal'
import { useDispatch } from 'react-redux'
import { playPause, setActiveSong } from '../../store/features/songSlice'

interface SongsDataProps {
  musicData?:any,
  isFetching?: boolean,
  error?:any;
  noSongsFound?: boolean
}
const Songs: React.FC<SongsDataProps> = (props) => {
  const {musicData, isFetching, error,noSongsFound} = props
  const [showModal,setShowModal] = useState(false)
  const {activeSong,isPlaying} = useSelector((state:any)=> state.songs)
  const dispatch = useDispatch()

  // if(isFetching) {
  //   return <Loader title="Loding Songs...."/>
  // }
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (e:any,song:any) => {
    e.stopPropagation()
   if(activeSong?.previewUrl !== song?.previewUrl) {
     dispatch(setActiveSong(song));
   } else {
     dispatch(setActiveSong(activeSong));
   }
   dispatch(playPause(true));
 }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  if(error) {
    return <Error/>
  }

  return (
    <>
    <div className='flex flex-wrap justify-center gap-8 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
      {
        musicData?.length > 0 && musicData?.map((song:any, key:any)=>(
          <div onClick={()=>{setShowModal(true);
           dispatch(setActiveSong(song))
           dispatch(playPause(true))}}>
          <SongsCard
            key={key}
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            onPlayClick={(e:any)=>handlePlayClick(e,song)}
            onPauseClick={handlePauseClick}
          />
          </div>
        ))
      }
    </div>
    {isFetching && <Loader title="Loding Songs...."/>}
    {!isFetching && noSongsFound && <Error message='No Songs Found'/>}
    {showModal && 
       <Modal 
          showModal={showModal} 
          activeSong={activeSong}  
          onPlayClick={(e:any)=>handlePlayClick(e,activeSong)}
          onPauseClick={handlePauseClick}
          onClose={handleCloseModal}/>}  
    </>
  )
}

export default Songs