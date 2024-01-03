import Modals from "./Modals";
import { Link} from "react-router-dom";
import "../styles/homePageStyles.css";
   
const CheckStatusWithoutLogin = () => { 
  const modalContent = (
    <div className='login-container'>
      <form className='form-login'>
        <h3 className='text-center modal-title mb-4'>Check Application Status</h3>
        <div className="mb-3">
          <label for="Text" className='mb-2'>Application Number</label>
          <input
            type="email"
            className="form-control-h"
            placeholder="Enter Application Number"
          />
        </div>
        <div className="d-grid">
            <Link to="/UserStatus">
          <button type="submit" className="btn login-form-btn mt-2 mx-auto px-auto w-100" >
           Check status
          </button>
          </Link>
        </div>
      </form>
      
    </div>
  );

  return (
    <Modals title='Check Status' content={modalContent} />
  );
};
export default CheckStatusWithoutLogin;