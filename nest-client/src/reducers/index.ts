
import { combineReducers } from "redux";
import TestCounter from "./TestCounter";
import PlayerReducer from "./PlayerReducer";
import TracksReducer from "./TrackReducer";
export * from "./PlayerReducer";
export * from "./TrackReducer";

export const reducers = combineReducers({
    testCounter: TestCounter,
    playerReducer: PlayerReducer,
    trackReducer: TracksReducer,
})

export type RootState = ReturnType<typeof reducers>