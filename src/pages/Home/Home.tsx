// import { useGetSongsQuery } from '../../store/services/songsApi'
import NavBar from '../../componets/NavBar/NavBar'
import SideBar from '../../componets/SideBar/SideBar'
import SearchBar from '../../componets/SearchBar/SearchBar'
import MusicPlayer from '../../componets/MusicPlayer'
import Songs from '../Songs/Songs'
import { useEffect, useState } from 'react'
import getSongsData from '../../store/services/songsApi'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveSong,seSongs } from '../../store/features/songSlice'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [offset, setOffset] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [searchTerm,setSearchTerm] = useState('100')
  const {activeSong, songs} = useSelector((state:any)=>state.songs)
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log("Hello");
    setIsLoading(true);
    (async () => {
      const songsData =  await getSongsData(searchTerm,offset)
      if(songsData?.length) {
        if(!activeSong?.previewUrl) {
          dispatch(setActiveSong(songsData[0]))
        }
      }
      dispatch(seSongs(songsData))
      setIsLoading(false)
      if(!songsData) {
        setError(true)
      }
    })()
  },[searchTerm,offset])  
  // const {data, isFetching, error} = useGetSongsQuery(0)
  
  return (
    <>
    <div className=''>
     <NavBar />
    </div>
    <div className="relative flex">
    {/* <SideBar /> */}
    <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#13064d]">
      <SearchBar />

      <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
        <div className="flex-1 h-fit pb-40">
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
      <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
        <MusicPlayer />
      </div>
  </div>
  </>
  )
}

export default Home