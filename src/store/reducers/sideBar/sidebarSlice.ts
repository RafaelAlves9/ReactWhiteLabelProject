import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  isSidebarOpen: boolean;
};

const initialState: InitialState = {
  isSidebarOpen: false,
};

const sideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState,
  reducers: {
    setOpenSideBar(state, { payload }: PayloadAction<boolean>) {
      state.isSidebarOpen = payload;
    },
  },
});

export const { setOpenSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
