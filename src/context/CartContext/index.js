import React from 'react'

const CartContext = React.createContext({
  isDark: false,
  changeDarkMode: () => {},
})

export default CartContext
