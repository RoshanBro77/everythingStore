import React, { useState, ChangeEvent, FormEvent } from 'react'
import './style/logIn.css'
import './style/Form.css'
import { NavLink, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function LogIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username === 'admin' && password === 'password') {
      navigate('/')
    } else {
      alert('Invalid username or password')
      setUsername('')
      setPassword('')
    }
  }

  return (
    <>
      <div className='logIn middle'>
        <div className='form-container '>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                id='username'
                name='username'
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type='submit'>Login</button>
            <NavLink className='nav' to={'/signUp'}>
              <p className='text'>New Member? Register Here.</p>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  )
}

export default LogIn
