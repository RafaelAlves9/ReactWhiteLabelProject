import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootReducer } from "./combineReducers";

const store = configureStore({
  reducer: rootReducer,
});

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export type AppDispatch = typeof store.dispatch;

export default store;
