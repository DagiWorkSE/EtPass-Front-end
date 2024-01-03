import React, { useEffect, useState } from 'react';
import Transport from "../../api/transport";
import {
  Typography,
  Button,
} from '@material-ui/core';

const Chapa = ({ fname, mname, lname, phone, type, amount, tx_num }) => {
  const [paid, setPaid] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      try {
        const response = await Transport.HTTP.checkPaid(tx_num);
        setPaid(response.data.success); // Assuming your response structure, adjust as needed
        console.log(response.data.success);
        if(response.data.success)
        {
          // route to successfull page
        }
      } catch (error) {
        console.error("Check failed:", error);
        setError(error.message || "An error occurred while fetching payment information.");
      }
    };

    fetchPaymentInfo();
  }, [tx_num]);

  return (
    <div className="container mt-5">
      <div>
        <Typography variant="h4" className="text-gray-900_03 text-center pb-4">
          Payment Information
        </Typography>
  
        <div className='ps-5'>
            <p><span className='fw-bold'>Transaction Amount: </span>{amount} ETB</p>
            <p><span className='fw-bold'>Item/Service Description: </span>{type}</p>
            <p><span className='fw-bold'>Payment Method: </span>Chapa</p>
            <p><span className='fw-bold'>Billing Information: </span>{fname} {mname}x {lname}, {phone}</p>
          </div>
        {error ? (
          <div className="text-center text-danger">
            <p>{error}</p>
          </div>
        ) : (
          <>
            {paid ? (
              <div className="text-center text-success my-4">
                <h4>Bill Successfully Paid!</h4>
                {/* Add any additional success-related information here */}
              </div>
            ) : (
              <>
              <form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
                <input type="hidden" name="public_key" value="CHAPUBK_TEST-Xps3XXw4Ke5IqdbhVOmK3YwX1V3bCsnv" />
                <input type="hidden" name="tx_ref" value={tx_num} />
                <input type="hidden" name="amount" value={amount} />
                <input type="hidden" name="currency" value="ETB" />
                <input type="hidden" name="email" value="israel@negade.et" />
                <input type="hidden" name="first_name" value={fname} />
                <input type="hidden" name="middle_name" value={mname} />
                <input type="hidden" name="last_name" value={lname} />
                <input type="hidden" name="phone" value={phone} />
                {/* <input type="hidden" name="Ptype" value={type} /> */}
                <input type="hidden" name="title" value="Let us do this" />
                <input type="hidden" name="description" value={type} />
                <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
                <input type="hidden" name="callback_url" value="http://localhost:8000/payment/payment/Pay" />
                <input type="hidden" name="return_url" value="http://localhost:5173/SuccessPage" />
                <input type="hidden" name="meta[title]" value="test" />
                <div className='text-center py-4'>
                  <Button type="submit" variant="contained" color="primary" className='py-2' style={{ backgroundColor: '#4CAF50', color: 'white' }}>
                    Pay Now
                  </Button>
                </div>
            </form>
          </>
            )}
        </>
      )}
    </div>
  </div>
);
}

export default Chapa;