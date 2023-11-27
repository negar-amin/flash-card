import { useState } from 'react'

function FlashCard({ flashCard }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className={`flashcard${isFlipped ? ' flip' : ''}`} onMouseEnter={e => setIsFlipped(true)} onMouseLeave={e => setIsFlipped(false)}>
      <div className="front-side">{flashCard.word}</div>
      <div className="back-side">{flashCard.persianEquivalent}</div>
    </div>
  )
}

export default FlashCard
