import { useDispatch } from 'react-redux'
import PlayPause from '../PlayPause'
import { setActiveSong,playPause } from '../../store/features/songSlice'
interface SongsCardProps {
    title?:string;
    songUrl?:string;
    imageUrl?:string;
    artistName?:string;
    activeSong?:any;
    isPlaying?:any;
    id?:any;
}

const SongsCard: React.FC<SongsCardProps> = (props) => {
  const {title,songUrl,imageUrl,artistName,activeSong,isPlaying,id } = props

const dispatch = useDispatch()
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({songUrl,id}));
    dispatch(playPause(true));
  }
  
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong === title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause 
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          activeSong={activeSong}
          isPlaying={isPlaying}
          id={id}
          />
        </div>
        <img alt="song_image" src={imageUrl} className="w-full h-full rounded-lg" />
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>{title}</p>
        <p className='text-sm truncate text-gray-300 mt-1'>{artistName}</p>
      </div>
    </div>
  )
}

export default SongsCard