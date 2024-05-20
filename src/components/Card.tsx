import React from 'react'
import '../components/style/Card.css'
import Button from './Button'
interface Props {
  name: string
  category: string
  image: string
  price: string
  description: string
}
function Card({ name, image, price, description, category }: Props) {
  return (
    <>
      <div className='card'>
        <div className='cardImage'>
          <img src={image} alt='image' />
        </div>
        <p className='cardName'>{name}</p>
        <span className='price'>{price} </span>
        <p className='description'>{description}</p>
        {price.length != 0 && <Button image='' name='Add to cart' />}
      </div>
    </>
  )
}

export default Card
