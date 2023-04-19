import React from 'react'
type Props = {
    value:number,
}
const Counter = (counter:Props) => {
  const {value} = counter;
  const badgeStyles = "rounded px-3 py-2 m-3 font-medium bg-yellow-500";
  return (
    <div>
      <span className={badgeStyles}>{value}</span>
    </div>
  )
}

export default Counter
