import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITrack, TrackState } from "../types/track"

const initialState: TrackState = {
  tracks: [{ "comments": [], "_id": "604654294d19410e2005cec1", "name": "Пиздатый трек", "text": "Заебись", "artist": "Никтолос", "listens": 0, "audio": "audio/cf7d5d85-72c6-4ffd-af9c-0d0393009bef.mp3", "picture": "picture/bd330727-2030-4255-a233-160beffb5926.png",  },
  { "comments": [], "_id": "604654bc4d19410e2005cec2", "name": "Тест", "text": "Абра", "artist": "Тестинг", "listens": 0, "audio": "audio/c6072896-5f5c-4df4-9992-e62f079b8bbf.mp3", "picture": "picture/d5e593b7-fe88-46c1-b193-91a5aa2a8b02.png", },
  { "comments": [], "_id": "604654fe5959b41c88fab3e0", "name": "Абраб", "text": "Квадритульки", "artist": "Тестовый квестовый исполнитель чудес", "listens": 0, "audio": "audio/36f1b4e6-494a-4a5e-b0a5-f674b7295025.mp3", "picture": "picture/5f55c42e-1182-488f-893c-7886628834fc.png",  }],
  error: ''
}

export const tracksReducer = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    fetchTracksError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    fetchTracks: (state, action: PayloadAction<ITrack[]>) => {
      state.tracks = action.payload;
      state.error = "";
    },
  }
})

export const TracksAction = { ...tracksReducer.actions }
export default tracksReducer.reducer