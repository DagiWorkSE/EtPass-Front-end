import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import SideNav from '../components/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from '../components/TopBar';
import ProfileCard from '../components/ProfileCard';
import Notification from '../components/Notification';
import ServiceCards from '../components/ServiceCards';
import SuccessPage from '../components/SuccessPage';
import AllServiceCards from '../components/AllServiceCards';
import OrignCards from '../components/OrginCards';
import VisaCards from '../components/VisaCards';
import UserCheckStatus from '../components/UserCheckStatus';
import ActiveApplicationTabs from '../components/ActiveApplicationTabs';
import LaissezPasserForm from '../components/LaissezPasser/LaissezPasser';
// import ExpiredPassportForm from '../components/LaissezPasser/Expi';


function User() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  // const isAuthenticated = document.cookie.includes('access_token=') && sessionStorage.getItem('access_token') !== null;
  const isAuthenticated =  sessionStorage.getItem('access_token') !== null;
 
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    } else {
      // Call your server to fetch user data after successful authentication
      fetchUserData();
    }
  }, [isAuthenticated]);

  const fetchUserData = async () => {
    try {
      const response = await fetch('/User', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
          'Content-Type': 'application/json',
          // Include any other headers your server expects
        },
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle server errors
        console.error(`Server error: ${response.status} - ${response.statusText}`);
        navigate('/');
        return;
      }

      // Check if the user is verified
      if (!data.user.verified) {
        // Redirect to the homepage if not verified
        console.error('User is not verified. Redirecting to homepage.');
        navigate('/');
        return;
      }

      // Set user data if verified
      setUserData(data.user);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }


  return (
    <>
      <TopBar />
      <SideNav isSidebarOpen={isSidebarOpen} onToggle={setIsSidebarOpen} />
      <div style={{ marginLeft: isSidebarOpen ? '250px' : '50px', padding: isSidebarOpen ? '0px 30px' : '0px' }}>
        <Routes>
          <Route path="/dashboard" element={<Notification />} />
          <Route
            path="/profile"
            element={
              <ProfileCard
                firstName="Nati"
                lastName="Chombe"
                city="Addis Ababa"
                address="Addis Ababa, Ethiopia"
                zipCode="1000"
                phone="+251922136030"
                email="natichoaye@gmail.com"
              />
            }
          />
          <Route path="/ServiceCards" element={<ServiceCards />} />
          <Route path="/SuccessPage" element={<SuccessPage />} />
          <Route path="/OrignCards" element={<OrignCards />} />
          <Route path="/AllServiceCards" element={<AllServiceCards />} />
          {/* <Route path="/LaissezPasser" element={<LaissezPasserForm />} /> */}
          <Route path="/VisaCards" element={<VisaCards />} />
          <Route path="UserCheckStatus" element={<ActiveApplicationTabs />} />
        
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </>
  );
}

export default User;
