import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then(res => {
      setHighlights(res.data.slice(0, 3)); // Show first 3 as highlights
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Welcome to TechMart</h1>
        <p className="mt-4">Discover the latest mobile phones at unbeatable prices.</p>
      </section>
      {/* Product Highlights */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Phones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </div>
  );
};

export default Home;