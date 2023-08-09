import PlayPause from '../PlayPause'

interface SongsCardProps {
    activeSong?:any;
    isPlaying?:boolean;
    song?:any;
    onPlayClick?:(e:any)=> void;
    onPauseClick?: () => void;
}

const SongsCard: React.FC<SongsCardProps> = (props) => {
const {activeSong,isPlaying,song,onPlayClick,onPauseClick } = props
  return (
    <>
    <div className={`flex flex-col w-[250px] md:w-[200px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer ${activeSong?.trackId === song?.trackId && isPlaying ? 'drop-shadow-sm  shadow-red-500 md:shadow-xl md:shadow-red-500' : "bg-opacity-50 drop-shadow-sm  shadow-cyan-500 md:shadow-xl md:shadow-cyan-500"}`}>
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong === song?.trackName ? 'flex bg-black bg-opacity-70 ' : 'hidden'}`}>
          <PlayPause 
          handlePause={onPauseClick}
          handlePlay={onPlayClick}
          activeSong={activeSong}
          isPlaying={isPlaying}
          id={song?.trackId}
          />
        </div>
        <img alt="song_image" src={song?.artworkUrl100?.replace('100x100', '500x500')} className="w-full h-full rounded-lg"/>
      </div>
      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>{song?.trackName}</p>
        <p className='text-sm truncate text-gray-300 mt-1'>{song.artistName}</p>
      </div>
    </div>
    </>
  )
}

export default SongsCard