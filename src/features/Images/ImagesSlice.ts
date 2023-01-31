import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageI } from '../../types/Image';
import { getImagesPage } from './ImagesAPI';

type ImagesState = {
  images: ImageI[];
  loading: boolean;
  error: string;
  page: number;
};

const initialState: ImagesState = {
  images: [],
  loading: false,
  error: '',
  page: 1,
};

const articlesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    increasePage: state => {
      state.page += 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetImages: state => {
      state.images = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(load.pending, state => {
      state.loading = true;
    });

    builder.addCase(
      load.fulfilled,
      (state, action: PayloadAction<ImageI[]>) => {
        state.images.push(...action.payload);
        state.loading = false;
      },
    );

    builder.addCase(load.rejected, state => {
      state.error = 'Can not load articles';
      state.loading = false;
    });
  },
});

export const load = createAsyncThunk(
  'images/fetch',
  ({ page, limit }: { page: number; limit: number }) => {
    return getImagesPage(page, limit);
  },
);

export const { reducer } = articlesSlice;
export const { increasePage, setPage, resetImages } = articlesSlice.actions;
