export const EmotionButton = ({ emotion, onInputChange }) => {
  return (
    <div
      className="flex flex-col gap-2 items-center hover:font-medium w-15 px-2"
      onClick={() =>
        onInputChange({ target: { name: 'emotion', value: emotion } })
      }
    >
      <span className={`p-6 rounded-full bg-${emotion}`}></span>
      <span className="text-black capitalize">{emotion}</span>
    </div>
  )
}
