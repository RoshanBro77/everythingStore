// ProductPage.tsx
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dataProducts from '../dataProducts'
import './style/Product.css'
import Card from './Card'
import Button from './Button'
const Product: React.FC = () => {
  const { type, name } = useParams<{ type: string; name: string }>()
  const isCategory = type === 'category'
  const navigate = useNavigate()
  const filteredProducts = dataProducts.filter((product) => {
    return product.category === '' || product.category === name
  })
  const selectedProduct = dataProducts.find((product) => {
    return product.name === name
  })

  const handleCardProductClick = (product: string) => {
    navigate(`/products/product/${product}`)
  }
  return (
    <>
      <div className='showPage middle'>
        {isCategory ? (
          <div className='products'>
            {filteredProducts.map((product) => (
              <div className=' column box'>
                <Card
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                  onClick={() => handleCardProductClick(product.name)}
                />
                <div className='addToCart'>
                  {<Button image='' name='Add to cart' />}
                </div>
                <p></p>
              </div>
            ))}
          </div>
        ) : (
          <div className='showPage middle'>
            <div className=' flex'>
              <div className='productLeft'>
                <img
                  className='productImage'
                  src={selectedProduct?.image}
                  alt=''
                />
              </div>
              <div className='productRight'>
                <div className='promise'>
                  <p className='secondTitle'>{selectedProduct?.name}</p>
                </div>
                <div className='promise'>
                  <p className='desctext'>{selectedProduct?.description}</p>
                </div>
                <div className='promise'>
                  <p className='price'>{selectedProduct?.price}</p>
                </div>
                <div className='addToCart'>
                  {<Button image='' name='Add to cart' />}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Product
