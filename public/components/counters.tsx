"use client"
import React from 'react'
import Counter from './counter'
import { useState } from 'react'
interface CounterObj{
    value:number,
}
const Counters = () => {
    const [counters, setCounters] = useState<CounterObj[]>([
      {
        value: 4,
      },
      {
        value: 0,
      },
      {
        value: 0,
      },
      {
        value: 0,
      },
    ]);
  return (
    <div>
        {counters.map((counter:CounterObj,index:number)=>{
            return(
                <div key={index}>
                    <Counter value={counter.value}/>
                </div>
            )
        })}
    </div>
  )
}

export default Counters
