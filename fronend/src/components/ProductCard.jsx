import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-800">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
    <h3 className="text-lg font-semibold">{product.name}</h3>
    <p className="text-gray-600 dark:text-gray-300">{product.specs}</p>
    <p className="text-xl font-bold">${product.price}</p>
    <Link to={`/product/${product.id}`} className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      View Details
    </Link>
  </div>
);

export default ProductCard;