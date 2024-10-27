import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFetchUser } from '../../types/types';

interface InitialStateProps {
  userCredentials: IFetchUser | null;
}

const initialState: InitialStateProps = {
  userCredentials: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IFetchUser>) => {
      state.userCredentials = action.payload;
    },
    removeUser: (state) => {
      state.userCredentials = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
