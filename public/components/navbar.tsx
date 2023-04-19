import React from 'react'
type Props = {
    value:number,
}
type PropsObj = {
    counters:Props[]
}
const Navbar = (counterObj:PropsObj) => {
    const {counters} = counterObj;
    const newCounter = counters.filter(counter=>counter.value>0)
    const length = newCounter.length
  return (
    <nav className="bg-gray-200 px-12 py-5 mx-5 mb-6">
      <span className="font-bold text-2xl">Navbar</span>
      <span className="rounded px-3 py-1 m-3 font-medium bg-red-500 text-white">{length}</span>
    </nav>
  );
}

export default Navbar
