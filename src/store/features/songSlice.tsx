import {createSlice} from '@reduxjs/toolkit'


interface InitialUserState {
  songs?:Array<[]>;
  currentIndex?:number;
  isActive?:boolean;
  isPlaying?:boolean
  activeSong?:any,
  id?:number

}

const initialState: InitialUserState = {
    songs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: null,
  }
  
const songSlice = createSlice({
    name:'songs',
    initialState,
    reducers: {
        setActiveSong: (state, action) => {
          state.activeSong = action.payload;
          state.currentIndex = action.payload.id;
          state.isActive = true;
        },
        playPause: (state, action) =>{
        state.isPlaying = action.payload
        } 
    },
});

export const {setActiveSong,playPause} = songSlice.actions
export default songSlice.reducer

