import { useState } from 'react'
import './components/style/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeBody from './components/HomeBody'
import Contact from './components/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='app'>
        <Header />
        <div className='app__container'>
          <Routes>
            <Route path='/' element={<HomeBody />} />
            <Route path='/contactUs' element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
