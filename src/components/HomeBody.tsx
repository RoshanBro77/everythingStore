import heroVideo from '../assets/Video/applepromo.mp4'
import './style/HomeBody.css'
import CategoriesContainer from './CategoriesContainer'
import airpods from '../assets/Images/categoriesImage/airpods.jpg'
import gpus from '../assets/Images/categoriesImage/gpus.jpg'
import laptop from '../assets/Images/categoriesImage/laptop.jpg'
import pendrive from '../assets/Images/categoriesImage/pendrive.jpg'
import phones from '../assets/Images/categoriesImage/phones.jpg'
import processors from '../assets/Images/categoriesImage/processors.jpg'
import smartwatch from '../assets/Images/categoriesImage/smartwatch.jpg'
import Speaker from '../assets/Images/categoriesImage/Speaker.jpg'
let categories = [
  { name: 'Airpods', Image: airpods },
  { name: "GPU's", Image: gpus },
  { name: 'Laptops', Image: laptop },
  { name: 'Pendrives', Image: pendrive },
  { name: 'Phones', Image: phones },
  { name: 'Processors', Image: processors },
  { name: 'Smartwatches', Image: smartwatch },
  { name: 'Speaker', Image: Speaker },
]
function HomeBody() {
  return (
    <>
      <div className='homeBody'>
        <div className='heroVideo'>
          <video src={heroVideo} autoPlay loop className='video'></video>
        </div>
        <p className='secondTitle'>Categories</p>
        <div className='categories'>
          {categories.map((item, index) => (
            <CategoriesContainer name={item.name} image={item.Image} />
          ))}
        </div>
      </div>
    </>
  )
}

export default HomeBody
