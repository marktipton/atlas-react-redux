import React, { useState } from 'react'
import { useAppDispatch } from '../store';
import { addCard } from '../slices/cardsSlice';


const NewCardForm = () => {
  const [cardTitle, setCardTitle] = useState('');
  const [cardDescription, setCardDescription] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cardTitle.trim()) {
      dispatch(addCard({ title: cardTitle, description: cardDescription}));
      setCardTitle(''); // reset card title after submission
      setCardDescription(''); // reset description after submission
    }

  };
  return (
    <div className='group/new-card m-3 flex h-44 w-full justify-center'>
        <form
          onSubmit={handleSubmit}
          className="hidden min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex"
        >
          <input
            className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none"
            type="text"
            placeholder="Title"
            name="title"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
          />
          <textarea
            className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none"
            placeholder="Description"
            name="description"
            value={cardDescription}
            onChange={(e) => setCardDescription(e.target.value)}
          ></textarea>
          <div className="buttons w-full">
            <button type="submit" className="w-full p-4">Save</button>
          </div>
        </form>
    </div>
  )
}

export default NewCardForm