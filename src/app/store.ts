import { configureStore } from '@reduxjs/toolkit';
import { reducer as imagesReducer } from '../features/Images/ImagesSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
