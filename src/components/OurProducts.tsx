import React from 'react'
import './style/HomeBody.css'
import dataProducts from '../dataProducts'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

function OurProducts() {
  const navigate = useNavigate()
  const handleCardProductClick = (product: string) => {
    navigate(`/products/product/${product}`)
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

              {<Button image='' name='Add to cart' />}
              <p></p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default OurProducts
