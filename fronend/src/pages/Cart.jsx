import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  const updateQuantity = (id, qty) => {
    if (qty <= 0) return;
    const updated = cart.map(item => item.id === id ? { ...item, quantity: qty } : item);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          {cart.map(item => <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />)}
          <p className="text-xl font-bold mt-4">Total: ${total}</p>
          <Link to="/checkout" className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded">Checkout</Link>
        </>
      )}
    </div>
  );
};

export default Cart;