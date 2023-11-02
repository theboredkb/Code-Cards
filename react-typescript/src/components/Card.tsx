import { useState } from 'react'
import { CardContent } from './CardContent'
import { getJavaScriptCards } from '../services/javascript'

export function Card() {
  const cardList = getJavaScriptCards()
  const cardAmount = cardList.length
  const [currCardNum, setCurrCardNum] = useState(0)

  return (
    <div className='card bg-base-300 dark:text-white items-center p-3 w-full md:w-1/2'>
      <div className='card-body bg-base-200 rounded-lg gap-10 min-w-full'>
        <CardContent {...cardList[currCardNum]}></CardContent>
        <div className='card-actions'>
          <button
            className='btn btn-neutral'
            onClick={() =>
              currCardNum > 0 ? setCurrCardNum(currCardNum - 1) : null
            }
          >
            Prev card
          </button>
          <button
            className='btn btn-neutral'
            onClick={() =>
              currCardNum < cardAmount - 1
                ? setCurrCardNum(currCardNum + 1)
                : null
            }
          >
            Next card
          </button>
        </div>
        <progress
          className='progress'
          value={currCardNum}
          max={cardAmount-1}
        ></progress>
      </div>
    </div>
  )
}
