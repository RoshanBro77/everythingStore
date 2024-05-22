import React, { useContext, useState } from 'react'
import { CartContext } from './Cart'
import './style/CartPage.css'
import Button from './Button'
function CartPage() {
  const cartContext = useContext(CartContext)
  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider')
  }

  const { cart, addToCart, removeFromCart } = cartContext
  return (
    <>
      <div className='middle'>
        {cart.map((product) => (
          <div className='myCartList '>
            <div className='cartLeftContainer'>
              <img src={product.image} alt='' />
            </div>
            <div className='cartRightContainer '>
              <p className='productName'>{product.name}</p>
              <div className='descContainer'>
                <p className='productdesc'>{product.description}</p>
              </div>
              <div className='productButton'>
                <button>
                  <div className='checkout'>
                    {<Button image='' name='Checkout' />}
                  </div>
                </button>
                <button onClick={() => addToCart(product)}>
                  <div className='addItem'>{<Button image='' name='+' />}</div>
                </button>
                <button onClick={() => removeFromCart(product)}>
                  <div className='removeItem'>
                    {<Button image='' name='-' />}
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CartPage
