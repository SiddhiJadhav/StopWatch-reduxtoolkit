import { configureStore } from '@reduxjs/toolkit';
import stopWatchReducer from './StopWatch/stopWatchSlice';

const store = configureStore({
  reducer: {
    stopWatch: stopWatchReducer,
  },
});

export default store;
