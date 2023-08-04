import SearchBar from '../../componets/SearchBar/SearchBar'
import MusicPlayer from '../../componets/MusicPlayer/index'
import Songs from '../Songs/Songs'
import {useEffect, useRef, useState } from 'react'
import getSongsData from '../../store/services/songsApi'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveSong, seSongs,playPause } from '../../store/features/songSlice'
// import Loader from '../../componets/Loader'
import useInfiniteScroll from '../../customHooks/useInfiniteScroll'
const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [offset, setOffset] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState()
  const [allSongs, setAllSongs] = useState<string[]>([])
  const { activeSong, songs, isPlaying,isActive } = useSelector((state: any) => state.songs)
  const dispatch = useDispatch()
  const containerRef = useRef(null);
 
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const songsData = await getSongsData(searchTerm, offset)
      console.log({songsData});
      if (songsData?.length) {
        setAllSongs(prev => [...prev, ...songsData])
        if (!activeSong?.previewUrl) {
          dispatch(setActiveSong(songsData[0]))
        }
      }
      dispatch(seSongs(songsData))
      setIsLoading(false)
      if (!songsData) {
        setError(true)
      }
    })()
  }, [searchTerm, offset])

  const loadSongsData = async() => {
    setOffset((prevOffset) => prevOffset + 1);
  }


  const handleNextSongClick = () => {
    const currentSongIndex = songs.findIndex((song:any) =>song?.previewUrl === activeSong?.previewUrl);
    dispatch(setActiveSong(songs[currentSongIndex + 1]));
  };
  
  const handlePrevSongClick = () => {
    const currentSongIndex = songs.findIndex((song:any) =>song?.previewUrl === activeSong?.previewUrl);
    dispatch(setActiveSong(songs[currentSongIndex - 1]));
  }

  const handlePlayPauseClick = () => {
    if(!isActive) return
    if(isPlaying) {
      dispatch(playPause(false))
    } else {
      dispatch(playPause(true))
    }
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault()
  }

  useInfiniteScroll({containerRef, callBack:loadSongsData})

  return (
    <>
      <div className="fixed flex rounded-tl-lg rounded-2xl w-full">
        <div className="flex-1 flex flex-col bg-gradient-to-br bg-gray-800 pt-4 rounded-2xl">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSubmit={handleSearchSubmit}
          />
          <div id={'container'} ref={containerRef} className="px-6 h-[calc(94vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40 ">
              <Songs
                musicData={allSongs}
                isFetching={isLoading}
                error={error}
              />
            </div>
            {/* {isLoading && <Loader/>} */}
          </div>
        </div>
        {activeSong?.trackId && isPlaying && (
          <div 
          className={`absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10 ${isPlaying ? 'transition-all ease-in-out duration-500 delay-[200ms]' : ''}`}
          >
            <MusicPlayer
              handleNextSongClick={handleNextSongClick}
              handlePrevSongClick={handlePrevSongClick}
              handlePlayPauseClick={handlePlayPauseClick}
              activeSong={activeSong}
              isPlaying={isPlaying}
              isActive={isActive}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default Home
