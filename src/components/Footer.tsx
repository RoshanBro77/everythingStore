import React from 'react'
import logo from '../assets/Images/Logo/logo.jpeg'
import './style/Footer.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import CallIcon from '@mui/icons-material/Call'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Copyright } from '@mui/icons-material'

function Footer() {
  return (
    <div className=' middle'>
      <div className='footer '>
        <div className='footer__container column'>
          <div className='footer__logo'>
            <img src={logo} alt='' />
          </div>
          <div className='footer__contents__middle'>
            <div className=' footer__contents__middle__sub_Container'>
              <h4 className='subtitle'>Contact Us</h4>
              <div className='footer__contactUs__container'>
                <a href='tel:+610431855746' className='footer__subcontainer'>
                  <div className='footerlogoandtext'>
                    <CallIcon />
                    <p>{'0451817246'}</p>
                  </div>
                </a>
                <a
                  href='mailto:something@gmail.com'
                  target='_blank'
                  className='footer__subcontainer'
                >
                  <div className='footerlogoandtext'>
                    <MailOutlineIcon />
                    <p>{'something@gmail.com'}</p>
                  </div>
                </a>
                <a
                  href='https://maps.app.goo.gl/QYth1sRqEYxFruBY7'
                  className='footer__subcontainer'
                >
                  <div className='footerlogoandtext'>
                    <LocationOnIcon />
                    <p>{'Haymarket, Sydney'}</p>
                  </div>
                </a>
              </div>
            </div>
            <div className='footer__contents__middle__sub_Container'>
              <h4 className='subtitle'>Quick Links</h4>
              <div className='column'>
                <a href='/' className='footer__subcontainer'>
                  Home
                </a>
                <a href='/about' className=' footer__subcontainer'>
                  About
                </a>
                <a href='/ourProducts' className=' footer__subcontainer'>
                  Our products
                </a>
              </div>
            </div>
            <div className='footer__contents__middle__Find__Us footer__contents__middle__sub_Container'>
              <h4 className='subtitle'>Find Us</h4>
              <a
                href='https://www.facebook.com/Estoreshop1'
                target='_blank'
                className='footer__subcontainer'
              >
                <div className='footerlogoandtext'>
                  <FacebookIcon />
                  <p>{'Facebook'}</p>
                </div>
              </a>
              <a
                href='https://www.instagram.com/_everything_store_/'
                target='_blank'
                className='footer__subcontainer'
              >
                <div className='footerlogoandtext'>
                  <InstagramIcon />
                  <p>{'Instagram'}</p>
                </div>
              </a>
            </div>
          </div>
          <hr />
          <div className='footer__contents__bottom'>
            <Copyright /> <span>Everything Store</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
