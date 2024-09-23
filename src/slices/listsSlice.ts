import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const listIds = [nanoid(), nanoid(), nanoid()];

const initialState = {
  lists: [
    { id: listIds[0], title: "To Do", cardIds: [] },
    { id: listIds[1], title: "In Progress", cardIds: [] },
    { id: listIds[2], title: "Completed", cardIds: [] },
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
    deleteList: (state, action) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload.id);
    },
    clearBoard: (state) => {
      state.lists = []; // Clear all lists
    },
  },
});

export const { addList, deleteList, clearBoard } = listsSlice.actions;

export default listsSlice.reducer;