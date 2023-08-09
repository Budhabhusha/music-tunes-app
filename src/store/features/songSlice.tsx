import {createSlice} from '@reduxjs/toolkit'

interface InitialUserState {
  songs:Array<[]>;
  isActive?:boolean;
  isPlaying?:boolean;
  activeSong?:any;
  id?:number;
  currentSongs?:any
  currentIndex?:number;
  search:string;
}

const initialState: InitialUserState = {
    songs: [],
    search:'',
    isActive: false,
    isPlaying: false,
    activeSong: null,
    currentSongs: null,
    currentIndex:0
  }
  
const songSlice = createSlice({
    name:'songs',
    initialState,
    reducers: {
        setActiveSong: (state, action) => {{}
          state.activeSong = action.payload;
          state.isActive = true;
        },
        setSongs:(state,action)=> {
          state.songs.push(...action.payload);
        },
        setSearchSong:(state,action)=>{
          state.songs = action.payload
        },
        setSearch:(state,action)=>{
          state.search = action.payload
        },
        playPause: (state, action) =>{
        state.isPlaying = action.payload
        } 
    },
});

export const {setActiveSong,setSongs,playPause,setSearchSong,setSearch} = songSlice.actions
export default songSlice.reducer

