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

import iphone15promax from '../assets/Images/Products/Phones/Apple iPhone 15 Pro Max (256 GB) - Natural Titanium.jpg'
let products = [
  {
    name: 'Apple iPhone 15 Pro Max (256 GB) - Natural Titanium',
    Image: { iphone15promax },
    price: 2143,
    description: `
    About this item
FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.
ADVANCED DISPLAY — The 6.7” Super Retina XDR display with ProMotion ramps up refresh rates to 120Hz when you need exceptional graphics performance. Dynamic Island bubbles up alerts and Live Notifications. Plus, with Always-On display, your Lock Screen stays glanceable, so you don’t have to tap it to stay in the know.
GAME-CHANGING A17 PRO CHIP — A Pro-class GPU makes mobile games feel so immersive, with rich environments and realistic characters. A17 Pro is also incredibly efficient and helps to deliver amazing all-day battery life.
POWERFUL PRO CAMERA SYSTEM — Get incredible framing flexibility with 7 pro lenses. Capture super high-resolution photos with more color and detail using the 48MP Main camera. And take sharper close-ups from farther away with the 5x Telephoto camera on iPhone 15 Pro Max.
CUSTOMIZABLE ACTION BUTTON — Action button is a fast track to your favorite feature. Just set the one you want, like Silent mode, Camera, Voice Memo, Shortcut, and more. Then press and hold to launch the action. 
`,
  },
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
