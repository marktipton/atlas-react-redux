import React from 'react'
import List from './List';
import { DndContext, DragEndEvent, useSensors, useSensor, PointerSensor } from '@dnd-kit/core';
import { useAppSelector, useAppDispatch } from '../store';
import { moveCard } from '../slices/cardsSlice';

const Board = () => {
  const lists = useAppSelector((state) => state.lists.lists);
  const dispatch = useAppDispatch();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10, // Minimum movement before drag starts
      },
    }),
  );
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      dispatch(moveCard({ cardId: active.id, newListId: over.id }));
    }
  };
  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className='m-auto h-screen w-screen overflow-x-scroll text-center'>
        <div className='flex h-full space-x-4'>
          {lists.map((list) => (
            <List key={list.id} title={list.title} listId={list.id} />
          ))}
        </div>
      </div>
    </DndContext>
  )
}

export default Board