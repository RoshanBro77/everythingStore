import React from 'react'
import '../components/style/Card.css'
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
        <div className='descriptions'>
          <span>{price}</span>
        </div>
      </div>
    </>
  )
}

export default Card
