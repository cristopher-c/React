import type { CSSProperties } from "react";
import ItemCounter from "./shoping-cart/ItemCounter";

const bodyItemCounter:CSSProperties = {
  backgroundColor: '#e4e4e4',
  fontSize: 20,
  borderRadius: 20,
  padding:15
}

interface productsInt {
    name      : string,
    quantity? : number
}

const productsCart : productsInt[] = [
    {name: 'Cebolla', quantity: 5},
    {name: 'Tomate', quantity: 8},
    {name: 'Pan', quantity: 23},
    {name: 'Lechuga'}
]

export function FirstSteps(){
    return (
        <>
            <h1>Ejercicio con ItemCounter</h1>
            <div style={bodyItemCounter}>Body del Item Counter</div> <br />

            {
                productsCart.map(
                    ({name, quantity}) => (
                        <ItemCounter key={name} productName={name} productQuantity={quantity}/>
                    )
                )
            }
        </>
    )
}