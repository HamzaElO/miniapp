import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { data } from '../data/data.js';
import ArrowLeftIcon from './ArrowLeftIcon.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowLeft } from 'react-icons/fa';


const CustomizeOrder = ({ cart, setCart }) => {
  const { mealId } = useParams();
  

  const meal = data.find((item) => item.id === parseInt(mealId));
  const [quantity, setQuantity] = useState(1);
  const [drink, setDrink] = useState('Coke');
  const [sauce, setSauce] = useState('Ketchup');
  const [totalPrice, setTotalPrice] = useState(0); // State for total price
  const navigate = useNavigate();

  // Prices for drinks and sauces
  const drinkPrices = {
    Coke: 1,
    Pepsi: 1.2,
    Sprite: 1.1,
  };

  const saucePrices = {
    Ketchup: 0.5,
    Mayo: 0.7,
    BBQ: 0.6,
  };

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    const mealPrice = meal.price * quantity;
    const drinkPrice = drinkPrices[drink] * quantity;
    const saucePrice = saucePrices[sauce] * quantity;
    return mealPrice + drinkPrice + saucePrice;
  };

  // Update total price when quantity, drink, or sauce changes
  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [quantity, drink, sauce]);

  const addToCart = () => {
    const order = { ...meal, quantity, drink, sauce, totalPrice };
    cart = cart ? cart : []
    console.log("cart",cart)
    setCart([...cart, order]);
    navigate('/');
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className='max-w-[1400px] mx-auto  relative'>
      
      {/* Mobile Return Button */}
    

      <div className='bg-white shadow-2xl rounded-3xl p-10 md:flex transition-all duration-300 transform hover:scale-105'>
        {/* Left Side - Meal Info */}
        <button
        onClick={goBack}
        className='border-transparent bg-transparent block lg:hidden absolute top-4 left-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md transition-all'
      >
<FaArrowLeft />

      </button> 
      <br/>
        <div className='md:w-1/2'>
          <img
            src={meal.image}
            alt={meal.name}
            className='w-full h-[350px] object-cover rounded-xl shadow-md'
          />
          <h2 className='text-4xl font-extrabold text-gray-900 mt-8'>
            {meal.name}
          </h2>
          <p className='text-base text-gray-500 mt-2 capitalize'>
            {meal.category}
          </p>
          <p className='text-lg text-gray-700 mt-4 leading-relaxed'>
            {meal.description}
          </p>
          <p className='text-orange-600 text-3xl font-bold mt-6'>
            {meal.price?.toFixed(2)} DH
          </p>
        </div>

        {/* Right Side - Customization Form */}
        <div className='md:w-1/2 md:ml-12 mt-8 md:mt-0'>
          <h3 className='text-2xl font-semibold text-gray-900 mb-6'>
            Customize Your Order
          </h3>

          {/* Quantity Selector */}
          <div className='mb-8'>
            <label className='block text-sm font-medium text-gray-700'>
              Quantity
            </label>
            <div className='flex items-center mt-3'>
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className='w-12 h-12 bg-gray-200 text-gray-800 text-xl font-bold rounded-full flex items-center justify-center hover:bg-gray-300 transition-all'
              >
                –
              </button>
              <input
                type='number'
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className='mx-4 w-16 h-12 text-center text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all'
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className='w-12 h-12 bg-gray-200 text-gray-800 text-xl font-bold rounded-full flex items-center justify-center hover:bg-gray-300 transition-all'
              >
                +
              </button>
            </div>
          </div>

          {/* Drink Selector */}
          <div className='mb-8'>
            <label className='block text-sm font-medium text-gray-700'>
              Select Drink
            </label>
            <div className='relative mt-3'>
              <select
                value={drink}
                onChange={(e) => setDrink(e.target.value)}
                className='block w-full bg-gray-100 border border-gray-300 text-gray-800 py-3 px-4 pr-8 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all'
              >
                <option value='Coke'>Coke (+1)</option>
                <option value='Pepsi'>Pepsi (+1.20)</option>
                <option value='Sprite'>Sprite (+1.10)</option>
              </select>
              <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Sauce Selector */}
          <div className='mb-8'>
            <label className='block text-sm font-medium text-gray-700'>
              Select Sauce
            </label>
            <div className='relative mt-3'>
              <select
                value={sauce}
                onChange={(e) => setSauce(e.target.value)}
                className='block w-full bg-gray-100 border border-gray-300 text-gray-800 py-3 px-4 pr-8 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all'
              >
                <option value='Ketchup'>Ketchup (+0.50)</option>
                <option value='Mayo'>Mayo (+0.70)</option>
                <option value='BBQ'>BBQ (+0.60)</option>
              </select>
              <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Add to Cart Button with Total Price */}
          <button
            onClick={addToCart}
            className='border-transparent w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-lg font-bold py-4 rounded-xl shadow-md hover:from-orange-600 hover:to-yellow-600 transition-all duration-300'
          >
            Add to Cart (${totalPrice.toFixed(2)})
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeOrder;
