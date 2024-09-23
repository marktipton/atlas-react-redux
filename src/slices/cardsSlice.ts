import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  cards: [
    { id: nanoid(), title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, fugiat!" },
    { id: nanoid(), title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, fugiat!" },
    { id: nanoid(), title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, fugiat!" },
  ],
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push({
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    // deleteCard: (state, action) => {
    //   state.lists = state.lists.filter((list) => list.id !== action.payload.id);
    // },
    // clearBoard: (state) => {
    //   state.lists = []; // Clear all lists
    // },
  },
});

export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;