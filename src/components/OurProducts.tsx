import React, { useContext } from 'react'
import './style/HomeBody.css'
import dataProducts from '../dataProducts'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { CartContext } from './Cart'

function OurProducts() {
  const navigate = useNavigate()
  const handleCardProductClick = (product: string) => {
    navigate(`/products/product/${product}`)
  }
  const cartContext = useContext(CartContext)
  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider')
  }
  const { cart, setCart } = cartContext
  const handleAddToCart = (product: any) => {
    setCart([...cart, product])
  }
  return (
    <>
      <div className='ourProducts'>
        <div className='secondTitle'>Our Products</div>
        <div className='ourproducts'>
          {dataProducts.map((product, index) => (
            <div className='box column'>
              <Card
                name={product.name}
                image={product.image}
                price={product.price}
                description={product.description}
                category='Phones'
                onClick={() => handleCardProductClick(product.name)}
              />
              <button onClick={() => handleAddToCart(product)}>
                <div className='addToCart'>
                  {<Button image='' name='Add to cart' />}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default OurProducts
