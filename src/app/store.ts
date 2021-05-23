import { configureStore, combineReducers } from '@reduxjs/toolkit'
import tracksReducer from '../features/tracks/tracksSlice'

const rootReducer = combineReducers({
  tracks: tracksReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export default store
