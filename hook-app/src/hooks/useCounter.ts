import { useState } from 'react'

export const useCounter = (init: number = 1) => {
  
  const [counter, setCounter] = useState(init);


  const increment = () => {
    setCounter((prev) => prev + 1);
  }

  const decrement = () => {
    if(counter === 1) return;
    setCounter((prev) => prev - 1);
  }

  return {
    // Props
    counter,

    // Methods
    increment,
    decrement,
  }

}
