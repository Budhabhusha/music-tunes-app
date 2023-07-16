import { useGetSongsQuery } from '../../store/services/songsApi'
import NavBar from '../../componets/NavBar/NavBar'
import SideBar from '../../componets/SideBar/SideBar'
import SearchBar from '../../componets/SearchBar/SearchBar'
import TopPlay from '../../componets/TopPlay/TopPlay'
import MusicPlayer from '../../componets/MusicPlayer'
import Songs from '../Songs/Songs'

const Home = () => {
  const {data, isFetching, error} = useGetSongsQuery(0)
  return (
    <>
    <div className=''>
     <NavBar />
    </div>
    <div className="relative flex">
    <SideBar />
    <div className="flex-1 flex flex-col bg-gradient-to-r from-purple-500 to-purple-300">
      <SearchBar />

      <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
        <div className="flex-1 h-fit pb-40">
          <Songs 
          musicData={data?.results} 
          isFetching={isFetching} 
          error={error}
          />
        </div>
        <div className="xl:sticky relative top-0 h-fit">
          <TopPlay />
        </div>
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