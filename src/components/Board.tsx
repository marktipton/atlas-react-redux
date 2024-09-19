import React from 'react'
import List from './List'

const Board = () => {
  return (
    <div className='m-auto h-screen w-screen overflow-x-scroll text-center'>
      <List />
      <List />
      <List />
    </div>
  )
}

export default Board