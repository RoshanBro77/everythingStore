import React from 'react'
import logo from '../assets/Images/Logo/Logo.png'
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
        <div className='footer__container'>
          <div className='footer__logo'>
            <img src={logo} alt='' />
          </div>
          <div className='footer__contents__middle'>
            <div className=' footer__contents__middle__sub_Container'>
              <h4 className='subtitle'>Contact Us</h4>
              <div className='footer__contactUs__container'>
                <div className='footer__subcontainer'>
                  <div className='footerlogoandtext'>
                    <CallIcon />
                    <p>{'+977 9812354321'}</p>
                  </div>
                </div>
                <div className='footer__subcontainer'>
                  <div className='footerlogoandtext'>
                    <MailOutlineIcon />
                    <p>{'something@gmail.com'}</p>
                  </div>
                </div>
                <div className='footer__subcontainer'>
                  <div className='footerlogoandtext'>
                    <LocationOnIcon />
                    <p>{'Newroad, pokhara'}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer__contents__middle__sub_Container'>
              <h4 className='subtitle'>Quick Links</h4>
              <div className='footer__subcontainer'>
                <a href='/'>Home</a>
              </div>
              <div className=' footer__subcontainer'>
                <a href='/about'>About</a>
              </div>
              <div className=' footer__subcontainer'>
                <a href='/products'>Our products</a>
              </div>
            </div>
            <div className='footer__contents__middle__Find__Us footer__contents__middle__sub_Container'>
              <h4 className='subtitle'>Find Us</h4>
              <div className='footer__subcontainer'>
                <div className='footerlogoandtext'>
                  <FacebookIcon />
                  <p>{'Facebook'}</p>
                </div>
              </div>
              <div className='footer__subcontainer'>
                <div className='footerlogoandtext'>
                  <InstagramIcon />
                  <p>{'Instagram'}</p>
                </div>
              </div>
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
