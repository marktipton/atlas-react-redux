import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "1", name: "Item 1", completed: false },
    { id: "2", name: "Item 2", completed: true },
  ],
};

export const listsSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
});

export default listsSlice.reducer;