import React from 'react'
import { useAppDispatch } from '../store';
import { deleteList } from '../slices/listsSlice';


const DeleteListButton = ({ listId }: { listId: string}) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteList({ id: listId }));
  };

  return (
      <button onClick={handleDelete} className="h-[30px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden h-[30px] w-[30px] cursor-pointer group-hover/list:block">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
  )
}

export default DeleteListButton