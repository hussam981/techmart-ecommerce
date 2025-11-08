import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  const addToCart = () => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Added to cart!');
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover mb-4" />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-600 dark:text-gray-300">{product.specs}</p>
      <p className="text-xl font-bold">${product.price}</p>
      <p>{product.description}</p>
      <button onClick={addToCart} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Add to Cart
      </button>
      {/* Related products: Simplified, show all for demo */}
      <h2 className="mt-8 text-2xl">Related Products</h2>
      {/* Add logic to fetch related if needed */}
    </div>
  );
};

export default ProductDetail;