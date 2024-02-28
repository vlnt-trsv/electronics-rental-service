import { createSlice } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// const loadUserFromLocalStorage = () => {
//   const storedUser = Cookies.get("connect.user");
//   return storedUser ? JSON.parse(storedUser) : null;
// };

interface UserState {
  user: object;
}

const initialState: UserState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  // user: loadUserFromLocalStorage(),
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
