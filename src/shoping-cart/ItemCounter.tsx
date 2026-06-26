import React, { type CSSProperties } from 'react'

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
  return (
    <>

      <div
        style={counterButtoms}
      >
        <span>{name}</span>
        <button>-1</button>
        <span>{cant}</span>
        <button>+1</button>
      </div>
    </>
  )
}

export default ItemCounter
