import './loading.css'
export const Loading = () => {
  return (
    <div className="flex items-center h-full justify-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
