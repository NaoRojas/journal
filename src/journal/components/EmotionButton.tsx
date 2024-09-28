import React, { useState } from 'react'
export const EmotionButton = ({ emotion, onInputChange, className }) => {
  const [emotionSelected, setEmotionSelected] = useState(false)

  const handleClick = () => {
    onInputChange({ target: { name: 'emotion', value: emotion } })
    setEmotionSelected(!emotionSelected)
  }

  return (
    <div
      className={
        `flex flex-col gap-2 items-center hover:font-medium w-20 p-5 radius rounded-lg ` +
        className
      }
      onClick={() => handleClick()}
    >
      <div className={`p-6 rounded-full bg-${emotion}`}></div>
      <p className="text-black capitalize">{emotion}</p>
    </div>
  )
}
