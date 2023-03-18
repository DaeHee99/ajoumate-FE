import { createSlice } from "@reduxjs/toolkit";
import socket from "../../api/socket";

const initialState = {
  Status: false,
  Gender: "",
  Nickname: "basic",
  UserID: "",
  ID: "",
};

const userSlice = createSlice({
  name: "user",
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.Status = action.payload.Status;
      state.Gender = action.payload.Gender;
      state.Nickname = action.payload.Nickname;
      state.UserID = action.payload.UserID;
      state.ID = action.payload.ID;
      socket.emit("set socketId", state.UserID);
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
