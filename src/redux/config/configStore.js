import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "../modules/userSlice";

const reducer = combineReducers({
  userSlice,
});

const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;