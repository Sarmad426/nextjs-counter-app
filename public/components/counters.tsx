"use client";
import React from "react";
import Counter from "./counter";
import Navbar from "./navbar";
import { useState } from "react";
interface CounterObj {
  value: number;
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
  const handleIncrement = (index: number): void => {
    const updatedCounter = counters.map((counter, id) => {
      if (id === index) {
        const newCounter = { ...counters, value: counter.value + 1 };
        return newCounter;
      }
      return counter;
    });
    setCounters(updatedCounter);
  };
 const handleDelete = (counterId:number):void =>{
  const updatedCounter = counters.filter((counter,index:number)=>{
    return index!==counterId
  })
  setCounters(updatedCounter);
 }
 const handleDecrement = (index:number):void =>{
  const updatedCounter = counters.map((counter,id:number)=>{
    return id === index ?  {...counters,value:counter.value - 1} :  counter
  })
  setCounters(updatedCounter);
 }
  return (
    <div>
      <Navbar counters={counters}/>
      {counters.map((counter: CounterObj, index: number) => {
        return (
          <div key={index}>
            <Counter
              value={counter.value}
              index={index}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDelete={handleDelete}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Counters;
