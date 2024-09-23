import React from 'react'
import DeleteCardButton from './DeleteCardButton'

const Card = ({ cardId, cardTitle, cardDescription, }: { cardId: string, cardTitle: string, cardDescription: string,}) => {
  return (
    <div className='card group/card m-3 flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue'>
      <h5 className='my-2 flex w-full items-end justify-between text-xl font-black'>
        <span>{cardTitle}</span>
        <DeleteCardButton cardId={cardId}/>
      </h5>
      <p>{cardDescription}</p>
    </div>
  )
}

export default Card