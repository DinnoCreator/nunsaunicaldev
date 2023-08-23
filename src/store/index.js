import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
// import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storageSession,
};

const reducer = combineReducers({
  auth: authSlice.reducer,
  //   cart: cartSlice.reducer,
  //   ui: uiSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;