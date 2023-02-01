import { configureStore } from '@reduxjs/toolkit';
import { reducer as imagesReducer } from '../features/Images/ImagesSlice';
import { reducer as userReducer } from '../features/User/UserSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
