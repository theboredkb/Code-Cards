import { useState } from 'react'

type CardDetailsProp = {
  title: string
  question: string
  answer: string
}

export function Card({ title, question, answer }: CardDetailsProp) {
  const [content, setContent] = useState(question)

  return (
    <div className='card bg-base-300 text-white items-center p-5 md:w-1/2'>
      <div className='card-body bg-base-200 rounded-lg gap-5'>
        <div className='card-title text-xl'>{title}</div>
        <p className='text-lg'>{content}</p>
        <div className='card-actions'>
          {content === question ? (
            <div className='btn btn-neutral' onClick={() => setContent(answer)}>
              Reveal back
            </div>
          ) : (
            <div
              className='btn btn-neutral'
              onClick={() => setContent(question)}
            >
              Reveal front
            </div>
          )}
          <div className='btn btn-neutral'>Next card</div>
        </div><progress className="progress" value="10" max="100"></progress>
      </div>
    </div>
  )
}
