import React from 'react'
import heroImage from '../assets/Images/otherimages/phoneholdinghand.jpg'
import secondImage from '../assets/Images/otherimages/cool.png'
import './style/About.css'
import map from '../assets/Images/otherimages/map.jpg'
function About() {
  return (
    <>
      <div className='heroImage'>
        <img src={heroImage} alt='heroimage' />
      </div>
      <div className='about  '>
        <p className='secondTitle center'>Our Story</p>
        <div className='ourStory flex'>
          <div className='leftContainer'>
            <p className='desctext'>
              Welcome to Everything Store, your one-stop destination for the
              latest and greatest in tech. Founded in 2023, we started with a
              simple mission: to bring the best gadgets and electronics to our
              customers at unbeatable prices. <p></p> From cutting-edge
              smartphones to powerful laptops and innovative smartwatches, we
              have everything you need to stay ahead in the digital age.<p></p>{' '}
              Our passion for technology drives us to constantly update our
              inventory with the newest products, ensuring you always have
              access to the latest innovations.
            </p>
          </div>
          <div className='rightContainer'>
            <p className='desctext'>
              We pride ourselves on our exceptional customer service, offering
              expert advice and support to help you find the perfect product for
              your needs. <p></p> At Everything Store, we believe in quality,
              affordability, and convenience. Join us on our journey as we
              continue to make technology accessible to everyone. Thank you for
              choosing Everything Store.
            </p>
          </div>
        </div>
        <div className='secondTitle center'>Our Promise</div>
        <div className='ourPromise flex'>
          <div className='leftContainer'>
            <img src={secondImage} alt='' />
          </div>
          <div className='rightContainer'>
            <div className='promise'>
              <h4>Fast Delivery</h4>
              <p className='desctext'>
                Get your orders delivered swiftly and on time, every time.
              </p>
            </div>
            <div className='promise'>
              <h4>Quality Products</h4>
              <p className='desctext'>
                We offer only the highest quality products from trusted brands.
              </p>
            </div>
            <div className='promise'>
              <h4>24/7 Customer Support</h4>
              <p className='desctext'>
                Our support team is here to assist you around the clock.
              </p>
            </div>
            <div className='promise'>
              <h4>Easy Returns</h4>
              <p className='desctext'>
                Enjoy hassle-free returns within 30 days of purchase.
              </p>
            </div>
            <div className='promise'>
              <h4>Secure Payments</h4>
              <p className='desctext'>
                Shop confidently with our secure and encrypted payment options.
              </p>
            </div>
          </div>
        </div>
        <div className='heroImage'>
          <img src={map} alt='' />
        </div>
      </div>
    </>
  )
}

export default About
