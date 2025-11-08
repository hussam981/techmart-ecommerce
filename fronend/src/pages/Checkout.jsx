import { useState, useEffect } from 'react';

const Checkout = () => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [form, setForm] = useState({ name: '', email: '', address: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', { form, cart });
    alert('Order submitted! (Demo only)');
    local