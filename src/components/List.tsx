import React from 'react'
import  Card  from './Card'
import DeleteListButton from './DeleteListButton'
import NewCardForm from './NewCardForm'
import { useAppSelector } from '../store';


const List = ({ title, listId }: { title: string, listId: string }) => {

  const cards = useAppSelector((state) =>
    state.cards.cards.filter((card) => card.listId === listId)
  );

  return (
    <div className='group/list h-full min-w-96 p-4'>
      <DeleteListButton listId={listId} />
      <h3 className='text-center'>{title}</h3>
      <div>
        {cards.map((card) => (
          <Card key={card.id} cardId={card.id} cardTitle={card.title} cardDescription={card.description}/>
        ))}
      </div>
      <NewCardForm listId={listId}/>
    </div>
  )
}

export default List