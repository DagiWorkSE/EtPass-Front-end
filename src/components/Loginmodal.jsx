import React  from 'react';
import Modals from "./Modals";
import { Link} from "react-router-dom";
import "../styles/homePageStyles";
import Signupmodal from './Signupmodal';
import Resetpassword from './Resetpassword';

const Loginmodal = () => {
 
  const modalContent = (
    <div className='login-container'>
      <form className='form-login'>
        <h3 className='text-center modal-title mb-4'>Welcome back!</h3>
        <div className="mb-3">
          <label for="email" className='mb-2'>Email address</label>
          <input
            type="email"
            className="form-control-h"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label for="password" className='mb-2'>Password</label>
          <input
            type="password"
            className="form-control-h"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3 d-flex justify-content-between align-items-center">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
          <p className="forgot-password text-right mb-0">
            Forgot <Link  href="#"><Resetpassword/> </Link>
          </p>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn login-form-btn">
            Login
          </button>
          <p className=" login-new text-centert pt-5 ms-5">
          
           New to ETPass?    
            <Link to="/" className='ms-2'>
              <Signupmodal/>
            </Link>
          </p>
        </div>
      </form>
      
    </div>
  );

  return (
    <Modals title='LOGIN' content={modalContent} />
  );
};
export default Loginmodal;