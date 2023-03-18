import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "../modules/userSlice";
import chatSlice from "../modules/chatSlice";

const reducer = combineReducers({
  userSlice,
  chatSlice,
});

const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
