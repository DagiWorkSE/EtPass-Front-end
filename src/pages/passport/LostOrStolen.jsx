import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from '../components/Navs';
import Intro from '../components/Intro';
import Service from '../components/Service';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import MultiStepForm from '../../components/LostOrStoeln';
import Faqs from '../components/faqs';
import ErrorBoundary from '../components/ErrorBoundary';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Resetpassword from '../components/Resetpassword';
import Signupmodal from '../components/Signupmodal';
import MultiStepProgressBar from '../components/MultiStepProgressBar';
function App() {  
  return (
    <>
        <ErrorBoundary>
            <Navs/>
        <MultiStepForm/>
        </ErrorBoundary> 

    </>
  );
}

export default App;