/* eslint-disable */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { AiFillCreditCard } from 'react-icons/ai';
import { FaMoneyBillWave, FaWallet } from 'react-icons/fa';
const PaymentMethodModal = ({ isOpen, onClose,clearCart,amount }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const [success, setSuccess] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
     clearCart();
      onClose(); // Close the modal when clicking outside
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

 


  const handlePaymentMethodSelect = (method) => {
    if(method=='balance'){
       //Handle the payment process using balance
    }
    
   setSuccess(true);
  
  };

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
  };

  const handleConfirm = () => {
    alert(`You selected: ${selectedMethod}`);
    onClose(); // Close the modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-end justify-center z-50 bg-black bg-opacity-50">
        <div ref={modalRef} className="bg-white rounded-t-lg w-full max-w-lg shadow-lg">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Choose Payment Method</h2>
          <div className="flex flex-col mt-4 space-y-2">
            <div onClick={() => handlePaymentMethodSelect('balance')} className="flex items-center p-3 border-b cursor-pointer hover:bg-gray-100 transition">
              <FaWallet className="text-gray-600 text-2xl" />
              <span className="ml-4 text-gray-700">My Balance</span>
            </div>
            <div onClick={() => handlePaymentMethodSelect('card')} className="flex items-center p-3 border-b cursor-pointer hover:bg-gray-100 transition">
              <AiFillCreditCard className="text-gray-600 text-2xl" />
              <span className="ml-4 text-gray-700">Debit Card</span>
            </div>
            <div onClick={() => handlePaymentMethodSelect('cash')} className="flex items-center p-3 cursor-pointer hover:bg-gray-100 transition">
              <FaMoneyBillWave className="text-gray-600 text-2xl" />
              <span className="ml-4 text-gray-700">Pay Cash</span>
            </div>
          </div>
        </div>
        </div>
      {success && (
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-3/4 bg-white rounded-lg p-6 max-w-sm text-center">
            <h2 className="text-lg font-semibold text-green-600">Payment Successful!</h2>
            <p className="text-gray-600">Your payment has been processed successfully.</p>
            <button onClick={() => {onClose();setSuccess(false);}} className="border-transparent mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethodModal;
