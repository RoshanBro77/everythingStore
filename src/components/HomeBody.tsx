import heroVideo from '../assets/Video/applepromo.mp4'
import './style/HomeBody.css'

import dataProducts from '../dataProducts'
import dataCategories from '../dataCategories'
import Card from './Card'

function HomeBody() {
  return (
    <>
      <div className='homeBody'>
        <div className='heroVideo'>
          <video src={heroVideo} autoPlay loop className='video'></video>
        </div>
        <p className='secondTitle'>Categories</p>
        <div className='categories'>
          {dataCategories.map((item, index) => (
            <Card
              name={item.name}
              image={item.image}
              price={''}
              description=''
              category={''}
            />
          ))}
        </div>
        <div className='secondTitle'>Suggestions For You</div>
        <div className='products'>
          {dataProducts.map((product, index) => (
            <Card
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
              category='Phones'
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default HomeBody
