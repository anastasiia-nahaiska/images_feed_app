import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Image } from '../../types/Image';
import { getImagesPage } from './ImagesAPI';

type ImagesState = {
  images: Image[];
  loading: boolean;
  error: string;
};

const initialState: ImagesState = {
  images: [],
  loading: false,
  error: '',
};

const articlesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(init.pending, state => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.images = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, state => {
      state.error = 'Can not load articles';
      state.loading = false;
    });
  },
});

export const init = createAsyncThunk('images/fetch', (page: number) => {
  return getImagesPage(page);
});

export const { reducer } = articlesSlice;
export const actions = articlesSlice.actions;
