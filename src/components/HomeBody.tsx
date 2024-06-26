import heroVideo from '../assets/Video/applepromo.mp4'
import './style/HomeBody.css'

import dataProducts from '../dataProducts'
import categories from '../dataCategories'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { useContext } from 'react'
import { CartContext } from './Cart'
function HomeBody() {
  const navigate = useNavigate()
  const handleCardCategoryClick = (category: string) => {
    navigate(`/products/category/${category}`)
  }
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
      <div className='homeBody'>
        <div className='heroVideo'>
          <video
            src={heroVideo}
            autoPlay
            muted
            playsInline
            loop
            preload='true'
            className='video'
          ></video>
        </div>
        <p className='secondTitle'>Categories</p>
        <div className='categories'>
          {categories.map((item, index) => (
            <div className='box'>
              <Card
                name={item.name}
                image={item.image}
                price={''}
                description=''
                category={''}
                onClick={() => handleCardCategoryClick(item.name)}
              />
            </div>
          ))}
        </div>
        <div className='secondTitle'>Suggestions For You</div>
        <div className='products'>
          {dataProducts.map((product, index) => (
            <div className='column box'>
              <Card
                name={product.name}
                image={product.image}
                price={product.price}
                description={product.description}
                category={product.category}
                onClick={() => handleCardProductClick(product.name)}
              />
              <button onClick={() => handleAddToCart(product)}>
                <div className='addToCart'>
                  {<Button image='' name='Add to cart' />}
                </div>
              </button>
              <p></p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomeBody
