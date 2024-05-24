import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeBody from './components/HomeBody'
import OurProducts from './components/OurProducts'
import About from './components/About'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Product from './components/Product'
import { CartProvider } from './components/Cart'
import CartPage from './components/CartPage'
import './components/style/App.css'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className='app'>
          <Header />
          <div className='app__container'>
            <Routes>
              <Route path='/' element={<HomeBody />} />
              <Route path='/ourProducts' element={<OurProducts />} />
              <Route path='/about' element={<About />} />
              <Route path='/logIn' element={<LogIn />} />
              <Route path='/signUp' element={<SignUp />} />
              <Route path='/products/:type/:name' element={<Product />} />
              <Route path='/cart' element={<CartPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
