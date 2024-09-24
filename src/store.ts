import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from "react-redux";
import listsSliceReducer from './slices/listsSlice';
import cardsSliceReducer from './slices/cardsSlice';
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistedListReducer = persistReducer(
  { key: "lists", storage },
  listsSliceReducer
);

const persistedCardReducer = persistReducer(
  { key: "cards", storage },
  cardsSliceReducer
);

export const store = configureStore({
  reducer: {
    lists: persistedListReducer,
    cards: persistedCardReducer,
  },
});

// These types are helpful for the typescript autocomplete
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Add types to dispatch and selector hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const persistor = persistStore(store);