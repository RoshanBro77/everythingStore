import React from 'react'
import './style/CategoriesContainer.css'
interface Props {
  name: string
  image: string
}
function CategoriesContainer({ name, image }: Props) {
  return (
    <>
      <div className='categoriesCard'>
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

export default CategoriesContainer
