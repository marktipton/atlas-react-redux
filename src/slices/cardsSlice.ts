import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { listIds } from './listsSlice';

const initialState = {
  cards: [
    { id: nanoid(), title: "Lorem ipsum dolor1", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, fugiat!", listId: listIds[0]},
    { id: nanoid(), title: "Lorem ipsum dolor2", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, fugiat!", listId: listIds[0]},
    { id: nanoid(), title: "Lorem ipsum dolor3", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, fugiat!", listId: listIds[0]},

    { id: nanoid(), title: "Lorem ipsum dolor1", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, fugiat!", listId: listIds[1]},
    { id: nanoid(), title: "Lorem ipsum dolor2", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, fugiat!", listId: listIds[1]},
    { id: nanoid(), title: "Lorem ipsum dolor3", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, fugiat!", listId: listIds[1]},

    { id: nanoid(), title: "Lorem ipsum dolor1", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, fugiat!", listId: listIds[2]},
    { id: nanoid(), title: "Lorem ipsum dolor2", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, fugiat!", listId: listIds[2]},
    { id: nanoid(), title: "Lorem ipsum dolor3", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, fugiat!", listId: listIds[2]},
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
        listId: action.payload.listId,
      });
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload.id);
    },
    moveCard: (state, action) => {
      const { cardId, newListId } = action.payload;
      const card = state.cards.find((card) => card.id === cardId);
      if (card) {
        card.listId = newListId;
      }
    },
  },
});

export const { addCard, deleteCard, moveCard } = cardsSlice.actions;

export default cardsSlice.reducer;