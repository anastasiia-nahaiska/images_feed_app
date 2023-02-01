import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../types/User';

type userState = {
  user: User | null;
};

const initialState: userState = { user: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    reset: state => {
      state.user = null;
    },
  },
});

export const { reducer } = userSlice;
export const actions = userSlice.actions;
