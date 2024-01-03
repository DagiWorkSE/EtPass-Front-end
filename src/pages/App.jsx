import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from '../components/Navs';

import Intro from '../components/Intro';
import Service from '../components/Service';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Faqs from '../components/Faqs';
import ErrorBoundary from '../components/ErrorBoundary';
import { Route,  Routes } from 'react-router-dom';
import Resetpassword from '../components/Resetpassword';
import Signupmodal from '../components/Signupmodal';
import MultiStepProgressBar from '../components/MultiStepProgressBar';
import MultiStepForm from '../components/MultiStepForm';
function App() {  
  return (
    <Routes>
        <ErrorBoundary>
            <Navs/>
        <MultiStepForm/>
        </ErrorBoundary> 
      </Routes>
  );
}

export default App;