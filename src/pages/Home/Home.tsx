import SearchBar from '../../componets/SearchBar/SearchBar'
import MusicPlayer from '../../componets/MusicPlayer/index'
import Songs from '../Songs/Songs'
import { useCallback, useEffect, useRef, useState } from 'react'
import getSongsData from '../../store/services/songsApi'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveSong, seSongs } from '../../store/features/songSlice'
// import TopPlay from '../../componets/TopPlay/TopPlay'
import {debounce}  from "lodash";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [offset, setOffset] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState()
  const { activeSong, songs, isPlaying } = useSelector((state: any) => state.songs)
  const dispatch = useDispatch()
  const containerRef=useRef(null);


  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const songsData = await getSongsData(searchTerm, offset)
      if (songsData?.length) {
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

  const handleSearchSubmit = (e: any) => {
    e.preventDefault()
  }
  const handelInfiniteScroll = useCallback(
    debounce(async () => {
      try {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
        ) {
          if (!isLoading) {
            setIsLoading(true);
            setOffset((prevOffset) => prevOffset + 1);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }, 200),
    [isLoading]
  );

  useEffect(() => {
     if(containerRef.current){
      //@ts-ignore
      containerRef.current.addEventListener('scroll',handelInfiniteScroll)
    }
  }, []);

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
                musicData={songs}
                isFetching={isLoading}
                error={error}
              />
            </div>
            {/* <div className="xl:sticky relative top-0 h-fit">
          <TopPlay />
        </div> */}
          </div>
        </div>
        {activeSong?.trackId && isPlaying && (
          <div 
          className={`absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10 ${isPlaying ? 'transition-all ease-in-out duration-500 delay-[200ms]' : ''}`}
          >
            <MusicPlayer />
          </div>
        )}
      </div>
    </>
  )
}

export default Home
