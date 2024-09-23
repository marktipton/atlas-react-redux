import React from 'react'
import DeleteCardButton from './DeleteCardButton'
import { useDraggable } from "@dnd-kit/core";

const Card = ({ cardId, cardTitle, cardDescription, }: { cardId: string, cardTitle: string, cardDescription: string,}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: cardId, // Use cardId as the draggable ID
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <div
      ref={setNodeRef} // Assign the ref from useDraggable
      style={style} // Apply style transformation
      {...listeners} // listeners for dragging events
      {...attributes}
      className='card group/card m-3 flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue'
    >
      <h5 className='my-2 flex w-full items-end justify-between text-xl font-black'>
        <span>{cardTitle}</span>
        <DeleteCardButton cardId={cardId}/>
      </h5>
      <p>{cardDescription}</p>
    </div>
  )
}

export default Card