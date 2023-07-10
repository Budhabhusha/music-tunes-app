import { createSlice } from '@reduxjs/toolkit';

interface InitialUserState {
  user: any;
}

const initialState: InitialUserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});
console.log(userSlice.actions);

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
