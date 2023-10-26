const { createSlice } = require('@reduxjs/toolkit');

const userInit = {
  email: null,
  token: null,
  id: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState: userInit,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
