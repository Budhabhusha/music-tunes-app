import { useSearchParams } from "react-router-dom";
const Songs = () => {
    const [searchSong, setSearchSong] = useSearchParams()
    const songName = searchSong.get('name')
    // const handleSearch =()=>{

    // }

    return (
        <>
            <h1>
                <h1>Current Playing Song: {songName}</h1>
                <input className="placeholder:italic placeholder:text-slate-400 
                block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 
                focus:ring-1 sm:text-sm
                " placeholder="Search song" type="text" name="search" 
                onChange={(e)=>{setSearchSong({name:e.target.value})}}
                />
            </h1>
        </>
    )
}
export default Songs