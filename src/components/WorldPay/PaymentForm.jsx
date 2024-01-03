import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [paymentDetails, setPaymentDetails] = useState({
    transactionReference: '',
    merchantEntity: '',
    narrative: 'Payment for Products',
    currency: 'GBP',
    amount: 0,
    paymentInstrumentType: 'card/plain',
    cardNumber: '',
    cardExpiryMonth: '',
    cardExpiryYear: '',
    base64EncodedCredentials: '',
    applicationNumber: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear validation error when input changes
  };

  const validateForm = () => {
    const newErrors = {};

    // Add validation rules here
    if (!paymentDetails.transactionReference.trim()) {
      newErrors.transactionReference = 'Transaction Reference is required';
    }
    if (!paymentDetails.merchantEntity.trim()) {
      newErrors.merchantEntity = 'Merchant Entity is required';
    }
    if (!paymentDetails.cardNumber.trim()) {
      newErrors.cardNumber = 'Card Number is required';
    }
    if (!paymentDetails.cardExpiryMonth.trim()) {
      newErrors.cardExpiryMonth = 'Card Expiry Month is required';
    }
    if (!paymentDetails.cardExpiryYear.trim()) {
      newErrors.cardExpiryYear = 'Card Expiry Year is required';
    }
    if (!paymentDetails.base64EncodedCredentials.trim()) {
      newErrors.base64EncodedCredentials = 'Base64 Encoded Credentials are required';
    }
    if (!paymentDetails.applicationNumber.trim()) {
      newErrors.applicationNumber = 'Application Number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (validateForm()) {
      try {
        // Make a request to your Express server
        const response = await axios.post('http://localhost:8000/payment/payment/make-payment', paymentDetails);

        // Handle the response from the server
        console.log(response.data.message); // You can customize this based on your needs
      } catch (error) {
        console.error('Error making payment:', error.message);
      }
    }
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold mb-8">Payment Integration</h1>
      <form >
        <div className="mb-4">
          <label className="block">
            Transaction Reference:
            <input
              type="text"
              name="transactionReference"
              value={paymentDetails.transactionReference}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full"
            />
            {errors.transactionReference && <span className="text-red-500 text-sm">{errors.transactionReference}</span>}
          </label>
        </div>
        <div className="mb-4">
          <label className="block">
            Merchant Entity:
            <input
              type="text"
              name="merchantEntity"
              value={paymentDetails.merchantEntity}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full"
            />
            {errors.merchantEntity && <span className="text-red-500 text-sm">{errors.merchantEntity}</span>}
          </label>
        </div>

        <button
          type="button"
          onClick={handlePayment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Make Payment
        </button>
      </form>
    </div>
  );
}

export default App;
