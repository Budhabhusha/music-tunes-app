import { useDispatch } from 'react-redux'
import PlayPause from '../PlayPause'
import { setActiveSong,playPause } from '../../store/features/songSlice'
interface SongsCardProps {
    activeSong?:any;
    isPlaying?:boolean;
    id?:number;
    song?:any;
}

const SongsCard: React.FC<SongsCardProps> = (props) => {
const {activeSong,isPlaying,id,song } = props


const dispatch = useDispatch()
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }
  const handlePlayClick = () => {
    if(activeSong?.previewUrl === song?.previewUrl) {
      dispatch(setActiveSong(song));
    } else {
      dispatch(setActiveSong(song));
    }
    dispatch(playPause(true));
  }
  
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong === song?.trackName ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause 
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          activeSong={activeSong}
          isPlaying={isPlaying}
          id={id}
          />
        </div>
        <img alt="song_image" src={song?.artworkUrl100} className="w-full h-full rounded-lg" />
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>{song?.trackName}</p>
        <p className='text-sm truncate text-gray-300 mt-1'>{song.artistName}</p>
      </div>
    </div>
  )
}

export default SongsCard