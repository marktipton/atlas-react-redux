import React from 'react'
import  Card  from './Card'
import DeleteListButton from './DeleteListButton'
import NewCardForm from './NewCardForm'

const List = ({ title, listId }: { title: string, listId: string }) => {
  return (
    <div className='group/list h-full min-w-96 p-4'>
      <DeleteListButton listId={listId} />
      <h3 className='text-center'>{title}</h3>
      <Card />
      <Card />
      <Card />
      <NewCardForm />
    </div>
  )
}

export default List