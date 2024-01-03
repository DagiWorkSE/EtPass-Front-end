import Modals from "./Modals";
import { Link} from "react-router-dom";
import "../styles/homePageStyles.css";
import Signupmodal from './Signupmodal';

const Resetpassword = () => {
 
  const modalContent = (
    <div className='login-container'>
      <form className='form-login'>
        <h3 className='text-center modal-title mb-4'>Password reset</h3>
        <div className="mb-3">
          <label for="email" className='mb-2'>Email address</label>
          <input
            type="email"
            className="form-control-h"
            placeholder="Enter email"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn login-form-btn">
            Send Confirmation
          </button>
          <p className=" login-new text-centert pt-5">
          
            New to ETPass? 
            <Link to="/"  style={{textDecoration:"none"}} >
              <Signupmodal/>
            </Link>
          </p>
        </div>
      </form>
      
    </div>
  );

  return (
    <Modals title='password' content={modalContent} />
  );
};
export default Resetpassword;