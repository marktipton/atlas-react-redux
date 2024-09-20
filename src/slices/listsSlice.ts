import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  lists: [
    { id: nanoid(), title: "To Do", cardIds: [] },
    { id: nanoid(), title: "In Progress", cardIds: [] },
    { id: nanoid(), title: "Completed", cardIds: [] },
  ],
};

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.lists.push({
        id: nanoid(),
        title: action.payload.title,
        cardIds: [],
      });
    },
  },
});

export const { addList } = listsSlice.actions;

export default listsSlice.reducer;