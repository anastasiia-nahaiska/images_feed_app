import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ImageI } from '../../types/Image';
import { getImagesPage } from './ImagesAPI';

type ImagesState = {
  images: ImageI[];
  loading: boolean;
  error: string;
  page: number;
  isEndOfList: boolean;
};

const initialState: ImagesState = {
  images: [],
  loading: false,
  error: '',
  page: 1,
  isEndOfList: false,
};

const imagesSlice = createSlice({
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
        if (!action.payload.length) {
          state.isEndOfList = true;
        } else {
          state.images = [...state.images, ...action.payload];
        }

        state.loading = false;
      },
    );

    builder.addCase(load.rejected, state => {
      state.error = 'Can not load images';
      state.loading = false;
    });

    builder.addCase(resetImages.type, state => {
      state.page = 1;
    });
  },
});

export const load = createAsyncThunk(
  'images/fetch',
  ({ page, limit }: { page: number; limit: number }) => {
    return getImagesPage(page, limit);
  },
);

export const { reducer } = imagesSlice;
export const { increasePage, setPage, resetImages } = imagesSlice.actions;
