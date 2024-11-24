import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  seconds: 0,
  minites: 0,
  hours: 0,
  status: 'idle',
};

const stopWatchSlice = createSlice({
  name: 'stopWatch',
  initialState,
  reducers: {
    increaseSeconds(state) {
      ++state.seconds;
    },
    increaseMinites(state) {
      ++state.minites;
    },
    increaseHours(state) {
      ++state.hours;
    },
    setSeconds(state) {
      state.seconds = 0;
    },
    setMinites(state) {
      state.minites = 0;
    },
    setHours(state) {
      state.hours = 0;
    },
    resetAll(state) {
      state.seconds = 0;
      state.minites = 0;
      state.hours = 0;
    },
    updateStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const {
  increaseSeconds,
  increaseMinites,
  increaseHours,
  setSeconds,
  setMinites,
  setHours,
  resetAll,
  updateStatus,
} = stopWatchSlice.actions;

export default stopWatchSlice.reducer;
