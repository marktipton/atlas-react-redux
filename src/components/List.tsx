import React from 'react'
import  Card  from './Card'
import DeleteListButton from './DeleteListButton'
import NewCardForm from './NewCardForm'

const List = ({ title }: { title: string }) => {
  return (
    <div className='group/list h-full min-w-96 p-4'>
      <DeleteListButton />
      <h3 className='text-center'>{title}</h3>
      <Card />
      <Card />
      <Card />
      <NewCardForm />
    </div>
  )
}

export default List