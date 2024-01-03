import React from 'react'

const Logout = () => {
 const handleLogout = () => {
    // Remove the "access_token" from sessionStorage
    sessionStorage.removeItem("access_token");

    // Redirect to the login page or any other route after logout
    
  };
  handleLogout();
  return (
    <div>
       
    </div>
  )
}

export default Logout
