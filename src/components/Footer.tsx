import React, { useState } from 'react'
import { useAppDispatch } from '../store';
import { addList } from '../slices/listsSlice';

const Footer = () => {
  const [listTitle, setListTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (listTitle.trim()) {
      dispatch(addList({ title: listTitle })); // Dispatch addList action with the title
      setListTitle(''); // Clear input after submission
    }
  };
  return (
    <div className='sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="List title"
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
          className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light mr-2"
        >
          Save
        </button>
        <button
          type="button"
          className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
        >
          Clear Board
        </button>
      </form>
    </div>
  )
}

export default Footer