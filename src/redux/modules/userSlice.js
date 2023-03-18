import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Status: false,
  Gender: '',
  Nickname: 'basic',
  UserID: ""
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.Status = action.payload.Status;
      state.Gender = action.payload.Gender;
      state.Nickname = action.payload.Nickname;
      state.UserID = action.payload.UserID;
    },
  },
});

export const { login } = userSlice.actions

export default userSlice.reducer