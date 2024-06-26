import React, { ChangeEvent, FormEvent, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function SignUp() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    alert('Sign up successful')
    navigate('/logIn')
  }

  return (
    <div className='form-container'>
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
        <div className='form-group'>
          <label htmlFor='confirm-password'>Confirm Password:</label>
          <input
            type='password'
            id='confirm-password'
            name='confirm-password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type='submit'>Sign Up</button>
        <NavLink className='nav' to={'/logIn'}>
          <p className='text'>Already a Member? Log In Here.</p>
        </NavLink>
      </form>
    </div>
  )
}

export default SignUp
