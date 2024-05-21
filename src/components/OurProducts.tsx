import React from 'react'
import './style/HomeBody.css'
import dataProducts from '../dataProducts'
import dataCategories from '../dataCategories'
import Card from './Card'

function OurProducts() {
  return (
    <>
      <div className='ourProducts'>
        <div className='secondTitle'>Our Products</div>
        <div className='ourproducts'>
          {dataProducts.map((product, index) => (
            <>
              <Card
                name={product.name}
                image={product.image}
                price={product.price}
                description={product.description}
                category='Phones'
              />
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default OurProducts
