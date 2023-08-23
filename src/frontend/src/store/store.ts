import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import nodalAnalysisReducer from "./NodalAnalysis/Slices";

export const store = configureStore({
  reducer: {
    nodalAnalysis: nodalAnalysisReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();