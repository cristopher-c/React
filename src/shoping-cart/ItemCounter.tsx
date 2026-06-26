import React, { useState, type CSSProperties } from 'react'

interface Props{
  productName     : string
  productQuantity? : number
}

const counterButtoms:CSSProperties = {
  backgroundColor: '#8CEDDB',
  padding: 7,
  marginTop: 7,
  display: 'flex',
  alignItems: 'center',
  gap: 10
}

const ItemCounter = ( {productName:name, productQuantity:cant = 0}: Props) => {
  const [count, setCount] = useState(10);

  const addNumber = () => {
    setCount(count + 1);
  }

  const subsNumber = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div
        style={counterButtoms}
      >
        <span>{name}</span>
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
