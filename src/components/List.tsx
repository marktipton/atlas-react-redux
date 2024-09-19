import React from 'react'
import  Card  from './Card'
import DeleteListButton from './DeleteListButton'

const List = () => {
  return (
    <div className='group relative p-1 flex flex-col justify-between'>
      <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <DeleteListButton />
      </div>
      <h1 className='text-center'>To Do</h1>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default List