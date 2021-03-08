import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import BaseReducer from "../base/BaseReducer";
import { PlayerState } from "../types/players";
import { ITrack } from "../types/track";

const initialState: PlayerState = {
  currentTime: 0,
  duration: 0,
  active: null,
  volume: 50,
  pause: true
}


const playerReducer = createSlice({
  name: 'player',
  initialState,
  reducers: {
    pause: state => {
      state.pause = true
    },
    play: state => {
      state.pause = false
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload
    },
    setActive: (state, action: PayloadAction<ITrack>) => {
      state.duration = 0;
      state.active = action.payload;
      state.duration = 0;
      state.currentTime = 0;
    },
  }
});



export default playerReducer.reducer;
export const PlayerActions = { ...playerReducer.actions }
// export default playerReducer.reducer