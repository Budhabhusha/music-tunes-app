import Loader from '../../componets/Loader'
import Error from '../../componets/Error'
import SongsCard from '../../componets/SongsCard/SongsCard'
import {useSelector } from 'react-redux/es/hooks/useSelector'

interface SongsDataProps {
  musicData?:any,
  isFetching?: boolean,
  error?:any
}
const Songs: React.FC<SongsDataProps> = (props) => {
  const {musicData, isFetching, error} = props
  const {activeSong,isPlaying} = useSelector((state:any)=> state.songs)
 console.log({musicData});
 
  if(isFetching) {
    return <Loader title="Loding Songs...."/>
  }
  if(error) {
    return <Error/>
  }

  return (
    <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
      {
        musicData.map((song:any, key:any)=>(
          <SongsCard
            key={key}
            songUrl={song.previewUrl}
            title={song.trackName}
            imageUrl={song.artworkUrl100}
            artistName={song.artistName}
            activeSong={activeSong}
            isPlaying={isPlaying}
            id={song.trackId}
          />
        ))
      }
    </div>
  )
}

export default Songs