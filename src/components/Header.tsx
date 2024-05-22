import './style/Header.css'
import logo from '../assets/Images/Logo/Logo.png'
import Button from './Button'
import cartImage from '../assets/Images/otherimages/shopping-cart.png'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from './Cart'
function Header() {
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider')
  }

  const { cart } = cartContext
  return (
    <div className='header'>
      <div className='middle'>
        <NavLink to={'/'}>
          <div className='logo'>
            <img src={logo} height={40} alt='Logo' />
          </div>
        </NavLink>
        <div className='search'>
          <textarea
            name='searchHere'
            id='searchBar'
            placeholder='search in everything Store'
            rows={1}
          ></textarea>
        </div>
        <NavLink className={'nav'} to={'/logIn'}>
          <div className='logIn'>
            <Button name={'Login'} image='' />
          </div>
        </NavLink>
        <NavLink className={'nav'} to={'/signUp'}>
          <div className='signUp'>
            <Button name={'Sign Up'} image='' />
          </div>
        </NavLink>
        <NavLink className={'nav'} to={'/cart'}>
          <div className='cart'>
            <Button name='' image={cartImage} />
          </div>
          <p className='counter'>{cart.length}</p>{' '}
        </NavLink>
      </div>
    </div>
  )
}

export default Header
