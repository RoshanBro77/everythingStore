// ProductPage.tsx
import React from 'react'
import { useParams } from 'react-router-dom'

const Product: React.FC = () => {
  const { type, name } = useParams<{ type: string; name: string }>()

  // Placeholder data fetching logic based on type and name
  const isCategory = type === 'category'

  return (
    <>
      <div>{isCategory ? <div> {name}</div> : <div></div>}</div>
      <div className='showPage'></div>
    </>
  )
}

export default Product
