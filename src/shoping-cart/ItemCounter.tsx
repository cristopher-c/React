import { useState, type CSSProperties } from 'react'

import './ItemCounter.css';

interface Props{
  productName     : string
  productQuantity? : number
}

const ItemCounter = ( {productName:name, productQuantity:cant = 1}: Props) => {
  const [count, setCount] = useState(cant);

  const addNumber = () => {
    setCount(count + 1);
  }

  const subsNumber = () => {
    if(count === 1) return;
    setCount(count - 1);
  }

  return (
    <>
      <div
        className='product-row'
      >
        <span
          className="product-name"
        style={{ 
          // width: 100,
          color: count === 1 ? 'red' : 'black'
        }}
        >{name}</span>
        <button
          onClick={subsNumber}
        >-1</button>
        <span>{count}</span>
        <button
          onClick={addNumber}
        >+1</button>
      </div>
    </>
  )
}

export default ItemCounter
