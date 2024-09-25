import { test, expect, vi } from 'vitest';
import listsReducer, { addList, deleteList, clearBoard } from '../slices/listsSlice';

// mock only nanoid function and use the actual nanoid import for other uses.
vi.mock('nanoid', async () => {
  const actual = await vi.importActual<typeof import('nanoid')>('nanoid');
  return {
    ...actual, // Use actual nanoid for other cases
    nanoid: vi.fn(() => 'new-id'), // Mock nanoid for test cases
  };
});

const initialState = {
  lists: [
    { id: '1', title: 'To Do', cardIds: [] },
    { id: '2', title: 'In Progress', cardIds: [] },
    { id: '3', title: 'Completed', cardIds: [] },
  ],
};

test('should handle adding a list', () => {
  const action = addList({ title: 'New List' });
  const nextState = listsReducer(initialState, action);

  expect(nextState.lists).toHaveLength(4); // Expect 4 lists after adding a new list
  expect(nextState.lists[3]).toEqual({
    id: 'new-id',
    title: 'New List',
    cardIds: [],
  });
});

test('deleting a list removes the list', () => {
  const action = deleteList({ id: '2' });
  const nextState = listsReducer(initialState, action);

  expect(nextState.lists).toHaveLength(2); // Expect 2 lists after deleting
  expect(nextState.lists.find((list) => list.id === '2')).toBeUndefined();
});

test('should handle clearing the board', () => {
  const action = clearBoard();
  const nextState = listsReducer(initialState, action);

  expect(nextState.lists).toHaveLength(0); // Expect all lists to be cleared
});