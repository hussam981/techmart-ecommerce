const CartItem = ({ item, updateQuantity, removeItem }) => (
  <div className="flex justify-between items-center border-b py-4">
    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
    <div>
      <h3>{item.name}</h3>
      <p>${item.price} x {item.quantity}</p>
    </div>
    <div>
      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2">-</button>
      <span>{item.quantity}</span>
      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2">+</button>
      <button onClick={() => removeItem(item.id)} className="ml-4 text-red-600">Remove</button>
    </div>
  </div>
);

export default CartItem;