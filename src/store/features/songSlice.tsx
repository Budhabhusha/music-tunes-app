import {createSlice} from '@reduxjs/toolkit'


interface InitialUserState {
  songs?:Array<[]>;
  isActive?:boolean;
  isPlaying?:boolean
  activeSong?:any,
  id?:number
  currentSongs?:any
  currentIndex?:number
}

const initialState: InitialUserState = {
    songs: [],
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
        seSongs:(state,action)=> {
          state.songs = action.payload;
        },
        playPause: (state, action) =>{
        state.isPlaying = action.payload
        } 
    },
});

export const {setActiveSong,seSongs,playPause} = songSlice.actions
export default songSlice.reducer

