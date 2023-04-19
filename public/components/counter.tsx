import React from 'react'
type Props = {
    value:number,
    index:number,
    handleIncrement:Function,
    handleDecrement:Function,
    handleDelete:Function,
}
const Counter = (counter:Props) => {
  const {value,handleIncrement,index,handleDelete,handleDecrement} = counter;
  let badgeStyles = "rounded px-3 py-2 m-3 font-medium ";
  badgeStyles+= value >0 ? 'bg-yellow-500' : 'bg-black text-white'
  return (
    <div className="my-3 py-3">
      <span className={badgeStyles}>{value}</span>
      <button
        className="bg-green-500 px-3 py-2 rounded font-semibold mx-5 hover:bg-green-600"
        onClick={() => handleIncrement(index)}
      >
        Increment
      </button>
      <button
        className="bg-gray-300 px-3 py-2 rounded font-semibold mx-5 hover:bg-gray-400"
        onClick={() => handleDecrement(index)}
      >
        Decrement
      </button>
      <button
        className="bg-red-500 px-3 py-2 rounded font-semibold mx-5 hover:bg-red-600 text-white"
        onClick={() => handleDelete(index)}
      >
        Delete
      </button>
    </div>
  );
}

export default Counter
