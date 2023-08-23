import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import nodalAnalysisReducer from "./Slices";

const store = configureStore({
  reducer: {
    nodalAnalysis: nodalAnalysisReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;