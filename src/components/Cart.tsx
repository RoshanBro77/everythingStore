import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

interface CartItem {
  name: string
  image: string
  price: string
  description: string
  category: string
}

interface CartContextType {
  cart: CartItem[]
  setCart: Dispatch<SetStateAction<CartItem[]>>

  addToCart: (product: CartItem) => void
  removeFromCart: (product: CartItem) => void
}
const CartContext = createContext<CartContextType | undefined>(undefined)

interface Props {
  children: ReactNode
}

const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const addToCart = (product: CartItem) => {
    setCart((prevCart) => [...prevCart, product])
  }

  const removeFromCart = (product: CartItem) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== product.name))
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }
