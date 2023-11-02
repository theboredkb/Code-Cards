import { useState } from 'react'

type CardDetailsProp = {
  title: string
  question: string
  answer: string
}


export function Card({ title, question, answer }: CardDetailsProp) {
  const [currCardNum, setCurrCardNum] = useState(1)
  const [cardAmount, setCardAmount] = useState(10)
  const [content, setContent] = useState(question)

  function toggleContent() {
    content === question ? setContent(answer) : setContent(question)
  }

  return (
    <div className='card bg-base-300 text-white items-center p-3 w-full md:w-1/2'>
      <div className='card-body bg-base-200 rounded-lg gap-10 min-w-full'>
        <div className='card-title text-xl'>{title}</div>
        <p className='text-lg h-48 overflow-y-auto'>{content}</p>
        <button className='btn btn-accent' onClick={toggleContent}>
          {content === question ? 'Reveal' : 'Hide'}
        </button>
        <div className='card-actions'>
          <div className='btn btn-neutral'>Prev card</div>
          <div className='btn btn-neutral'>Next card</div>
        </div>
        <progress
          className='progress'
          value={currCardNum}
          max={cardAmount}
        ></progress>
      </div>
    </div>
  )
}
