import React, { useState } from 'react';
import { data } from '../data/data.js';

const FoodOrder = () => {
  const [foods, setFoods] = useState(data);
  const [cart, setCart] = useState([]);

  // Filter Type function
  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category));
  };

  // Filter Price function
  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };

  // Handle adding to cart
  const addToCart = (food, quantity, drink, sauce) => {
    const newItem = { ...food, quantity, drink, sauce };
    setCart([...cart, newItem]);
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Customize Your Order
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
            <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
            <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
            <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
            <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button onClick={() => filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
            <button onClick={() => filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
            <button onClick={() => filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
            <button onClick={() => filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
          </div>
        </div>
      </div>

      {/* Display foods with customization options */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className='px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p><span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
              
              {/* Quantity Selector */}
              <div className='mt-2'>
                <label className='text-gray-700 font-bold'>Quantity: </label>
                <input type='number' min='1' defaultValue='1' className='border rounded p-1 w-16' />
              </div>

              {/* Drinks Selector */}
              <div className='mt-2'>
                <label className='text-gray-700 font-bold'>Drink: </label>
                <select className='border rounded p-1 w-full'>
                  <option value='Coke'>Coke</option>
                  <option value='Pepsi'>Pepsi</option>
                  <option value='Sprite'>Sprite</option>
                </select>
              </div>

              {/* Sauce Selector */}
              <div className='mt-2'>
                <label className='text-gray-700 font-bold'>Sauce: </label>
                <select className='border rounded p-1 w-full'>
                  <option value='Ketchup'>Ketchup</option>
                  <option value='Mayo'>Mayo</option>
                  <option value='BBQ'>BBQ</option>
                </select>
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={() => addToCart(item, 1, 'Coke', 'Ketchup')} 
                className='mt-4 bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 w-full'
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodOrder;
