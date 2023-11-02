import { useEffect, useState } from 'react'

type CardDetailsProp = {
  title: string
  question: string
  answer: string
}

export function CardContent({ title, question, answer }: CardDetailsProp) {
  const [content, setContent] = useState('')

  useEffect(() => setContent(question), [question])

  function toggleContent() {
    content === question ? setContent(answer) : setContent(question)
  }
  return (
    <>
      <div className='card-title text-xl h-8'>{title}</div>
      <p className='text-lg h-32 overflow-y-auto'>{content}</p>
      <button className='btn btn-accent' onClick={toggleContent}>
        {content === question ? 'Reveal' : 'Hide'}
      </button>
    </>
  )
}
