import SearchBar from '../../componets/SearchBar/SearchBar'
import MusicPlayer from '../../componets/MusicPlayer/index'
import Songs from '../Songs/Songs'
import {useEffect, useRef, useState } from 'react'
import getSongsData from '../../store/services/songsApi'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveSong, setSongs,playPause } from '../../store/features/songSlice'
import useInfiniteScroll from '../../customHooks/useInfiniteScroll'
import Error from '../../componets/Error'
import './style.css'
const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [offset, setOffset] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [noSongsFound, setNoSongsFound] = useState(false)
  const { activeSong, songs, isPlaying,isActive,search } = useSelector((state: any) => state.songs)
  const dispatch = useDispatch()
  const containerRef = useRef<null | HTMLDivElement>(null) ;

  useEffect(() => {
     feacthSongs()
  }, [search,offset])

  const feacthSongs = async() =>{
    setIsLoading(true);
    const songsData = await getSongsData(search, offset)
    if (songsData?.length > 0) {
      if (!activeSong?.previewUrl) {
        dispatch(setActiveSong(songsData[0]))
      }
    } else {
      setNoSongsFound(true)
    }
    dispatch(setSongs(songsData))
    setIsLoading(false)
    if (!songsData) {
      setError(true)
    }
  }
  const loadSongsData = async() => {
    setOffset((prevOffset) => prevOffset + 15);
  }


  const handleNextSongClick = () => {
    const currentSongIndex = songs.findIndex((song:any) =>song?.trackId === activeSong?.trackId);
    if(currentSongIndex === songs.length - 1){
      dispatch(setActiveSong(songs[0]));
    } else {
      dispatch(setActiveSong(songs[currentSongIndex + 1]));
    }
  };
  
  const handlePrevSongClick = () => {
    const currentSongIndex = songs.findIndex((song:any) =>song?.trackId === activeSong?.trackId);
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

  useInfiniteScroll({containerRef, callBack:loadSongsData,isLoading:isLoading})

  useEffect(()=>{
    containerRef.current?.scrollIntoView({ behavior: "smooth"});
  },[])

  return (
    <>
      <div className="fixed flex rounded-tl-lg rounded-2xl w-full">
        <div className="flex-1 flex flex-col bg-gradient-to-br bg-gray-800 pt-12 rounded-2xl">
          <div id={'container'} ref={containerRef} className="px-6 h-[calc(94vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row">
            <div className="flex-1 h-fit pb-40 ">
              <Songs
                musicData={songs}
                isFetching={isLoading}
                error={error}
                noSongsFound={noSongsFound}
              />
            </div>
          </div>
        </div>
        {activeSong?.trackId && isPlaying && (
          <div 
          className={`animate-fade-in-out absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10 ${isPlaying ? 'transition-opacity duration-500 ease-in-out' : ''}`}
          // style={{
          //   display:activeSong?.trackId && isPlaying ?'block':'none'
          // }}
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
