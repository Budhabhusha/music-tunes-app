import Loader from '../../componets/Loader'
import Error from '../../componets/Error'
import SongsCard from '../../componets/SongsCard/SongsCard'
import {useSelector } from 'react-redux/es/hooks/useSelector'
import { useState } from 'react'
interface SongsDataProps {
  musicData?:any,
  isFetching?: boolean,
  error?:any
}
const Songs: React.FC<SongsDataProps> = (props) => {
  const {musicData, isFetching, error} = props
  const {activeSong,isPlaying} = useSelector((state:any)=> state.songs)

  // if(isFetching) {
  //   return <Loader title="Loding Songs...."/>
  // }
  if(error) {
    return <Error/>
  }

  return (
    <>
    <div className='flex flex-wrap justify-center gap-8 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
      {
        musicData?.length > 0 && musicData?.map((song:any, key:any)=>(
          <SongsCard
            key={key}
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            id={song?.trackId}
          />
        ))
      }
    </div>
    {isFetching && <Loader title="Loding Songs...."/>}
    </>
  )
}

export default Songs