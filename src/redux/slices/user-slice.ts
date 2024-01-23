import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUser {
  name: string;
}

const user: IUser = {
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: user,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      return action?.payload;
    },
  },
});

export default userSlice.reducer;
export const {setUser} = userSlice.actions;
