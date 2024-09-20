import React from 'react'
import List from './List';
import { useAppSelector } from '../store';

const Board = () => {
  const lists = useAppSelector((state) => state.lists.lists);
  return (
    <div className='m-auto h-screen w-screen overflow-x-scroll text-center'>
      <div className='flex h-full space-x-4'>
        {lists.map((list) => (
          <List key={list.id} title={list.title} listId={list.id} />
        ))}
      </div>
    </div>
  )
}

export default Board