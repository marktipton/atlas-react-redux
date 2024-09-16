import React from 'react'
import  Card  from './Card'

const List = () => {
  return (
    <div className='p-1 flex flex-col justify-between'>
      <h1 className='text-center'>To Do</h1>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default List