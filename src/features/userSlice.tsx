import {createSlice} from '@reduxjs/toolkit'


interface InitialStateType {
   user:any
}
const initialState: InitialStateType = {
  user : null
}
        
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login: (state,action) => {
        console.log({state});
          state.user = action.payload
        },
        logout: (state) =>{
        state.user = null
        }
    }
})
console.log({userSlice});

// Export Actions
export const {login,logout} = userSlice.actions

// // Geting State
// export const selectUser = (state:any) => state.user.user

export default userSlice.reducer