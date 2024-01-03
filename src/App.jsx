import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import ErrorBoundary from './components/ErrorBoundary';
import { Route,  Routes, Navigate } from 'react-router-dom';
import ServiceCards from './components/ServiceCards';
import Navs from './components/Navs'
import Service from './components/Service';
import Intro from './components/Intro';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import CheckStatusWithoutLogin from './components/CheckaStatusWithoutLogin';
import ActiveApplicationTabs from './components/ActiveApplicationTabs';
import UserStatus from './util/UserStatus';

function App() {  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // setIsAuthenticated(true);
  return (
    <Routes>
    <Route
      path="/"
      element={!isAuthenticated?
        <ErrorBoundary>
          <React.Fragment>
            <Navs />
            <Intro />
            <Service />
            <Faqs />
            <Footer/>
          </React.Fragment>
        </ErrorBoundary>
        :<Navigate to='/User'/>
      }
    />
    <Route path='/UserStatus' element={<UserStatus/>}></Route>
    {/* <Route path='/check-status-without-login' element={<CheckStatusWithoutLogin/>}/> */}
  </Routes>
  );

}

export default App;

