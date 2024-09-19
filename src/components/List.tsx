import React from 'react'
import  Card  from './Card'
import DeleteListButton from './DeleteListButton'

const List = () => {
  return (
    <div className='group/list h-full min-w-96 p-4'>
      <DeleteListButton />
      <h3 className='text-center'>To Do</h3>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default List