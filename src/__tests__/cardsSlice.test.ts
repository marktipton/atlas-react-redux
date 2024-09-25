import { test, expect, vi } from 'vitest';
import cardsReducer, { addCard, deleteCard, moveCard } from '../slices/cardsSlice';

vi.mock('nanoid', async () => {
  const actual = await vi.importActual<typeof import('nanoid')>('nanoid');
  return {
    ...actual, // Use actual nanoid for other cases
    nanoid: vi.fn(() => 'new-card-id'), // Mock nanoid for test cases
  };
});

const initialState = {
  cards: [
    { id: '1', title: 'Task 1', description: 'Description 1', listId: 'list-1' },
    { id: '2', title: 'Task 2', description: 'Description 2', listId: 'list-1' },
    { id: '3', title: 'Task 3', description: 'Description 3', listId: 'list-2' },
  ],
};

test('should handle adding a card', () => {
  const action = addCard({ title: 'New Card', description: 'New Description', listId: 'list-1' });
  const nextState = cardsReducer(initialState, action);

  expect(nextState.cards).toHaveLength(4); // There should now be 4 cards
  expect(nextState.cards[3]).toEqual({
    id: 'new-card-id',
    title: 'New Card',
    description: 'New Description',
    listId: 'list-1',
  });
});

test('should handle deleting a card', () => {
  const action = deleteCard({ id: '2' });
  const nextState = cardsReducer(initialState, action);

  expect(nextState.cards).toHaveLength(2); // Card 2 should be deleted
  expect(nextState.cards.find(card => card.id === '2')).toBeUndefined(); // Ensure card 2 is gone
});

// Test moving a card
test('should handle moving a card to a different list', () => {
  const action = moveCard({ cardId: '3', newListId: 'list-1' });
  const nextState = cardsReducer(initialState, action);

  expect(nextState.cards.find(card => card.id === '3')?.listId).toBe('list-1'); // Card 3 should be in list-1 now
});