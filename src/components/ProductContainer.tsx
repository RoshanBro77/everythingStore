import React from 'react'
interface Props {
  name: string
  image: string
  price: Float32Array
  description: string
}

function ProductContainer({ name, image, price, description }: Props) {
  return (
    <>
      <div className='productCard'>
        <div className='card'>
          <div className='cardImage'>
            <img src={image} alt='Category image' />
          </div>
          <p className='cardName'>{name}</p>
        </div>
      </div>
    </>
  )
}

export default ProductContainer
