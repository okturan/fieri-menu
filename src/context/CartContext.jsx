import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (item, price, variantSq, variantEn, variantTr) => {
    const nameSq = variantSq ? `${item.nameSq} (${variantSq})` : item.nameSq;
    const nameEn = variantEn ? `${item.nameEn} (${variantEn})` : item.nameEn;
    const nameTr = variantTr ? `${item.nameTr} (${variantTr})` : item.nameTr;
    const itemKey = nameSq;

    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.key === itemKey);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.key === itemKey
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, {
          key: itemKey,
          names: { sq: nameSq, en: nameEn, tr: nameTr },
          price: price,
          qty: 1
        }];
      }
    });
  };

  const removeFromCart = (key) => {
    setCart(prevCart => prevCart.filter(item => item.key !== key));
  };

  const changeQty = (key, delta) => {
    setCart(prevCart => {
      const item = prevCart.find(item => item.key === key);
      if (item) {
        const newQty = item.qty + delta;
        if (newQty <= 0) {
          return prevCart.filter(item => item.key !== key);
        }
        return prevCart.map(cartItem =>
          cartItem.key === key
            ? { ...cartItem, qty: newQty }
            : cartItem
        );
      }
      return prevCart;
    });
  };

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <CartContext.Provider value={{
      cart,
      cartCount,
      cartTotal,
      isModalOpen,
      addToCart,
      removeFromCart,
      changeQty,
      toggleModal,
      closeModal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
