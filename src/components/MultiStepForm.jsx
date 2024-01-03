// MultiStepForm.js
import React, { useState } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import ExpiredPassportForm from './passport/ExpiredPassport'; 
import LostOrStoelnForm from './passport/LostOrStoeln';
 // Update the path as needed
import Transport from '../api/transport';
import { questions } from './Questions';
import { useEffect } from 'react';
import DamagedForm from './passport/DamagedForm';
import PassportCorrectionForm from './passport/PassportCorrection';
import ConferenceVisaForm from './visa/ConferenceVisa';
import PageRunOutForm from './passport/PageRunOutForm';
import WillExpireForm from './passport/willExpireForm';

import GIVVisaForm from './visa/GIV';
import InvestmentVisaForm from './visa/InvestmentVisa';
import TouristVisaForm from './visa/TouristVisa';
import NGOWorkVisaForm from './visa/NGOWorkVisa';
import JournalistVisaForm from './visa/JournalistVisa';
import LaissezPasserForm from './LaissezPasser/LaissezPasser';
const MultiStepForm = ({formType,category,dataForm=""}) => {
  const insertion = category == 'Passport'?Transport.HTTP.createPassportRequest:Transport.HTTP.createVisaRequest;
  const updateForms = category == 'Passport'?Transport.HTTP.updatePassportRequest:Transport.HTTP.updateVisaRequest;

  const content = (dataForm=="")?{"status":"Phase 1","application_type":formType}:dataForm;
  const indexVal = (dataForm=="")?1:parseInt((dataForm.status || "").split(" ")[1]);
  const [index, setIndex] = useState(indexVal);
  const [submitted, setSubmitted] = useState(false);
  var totalPagesCount = 6;
  // if(formType=='ExpiredPassport'){
  //  totalPagesCount =6;
  // }
  // else if(formType=="LostOrStolen"){
  //  totalPagesCount=8;
  // }
  // console.log(totalPagesCount);
  const [pagesAnswers, setPagesAnswers] = useState(content);
  // if(dataForm) setPagesAnswers(dataForm);
  const [applicationNumber, setApplicationNumber] = useState({});
  const [viditure, setViditure] = useState(null);
  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  const uploadViditure = async (data) => {
    // console.log('Uploading data:', data);  
    return await Transport.HTTP.uploadPassportViditure(data)
      .then((res) => {
        const url = res.data.url;
        // console.log('Upload successful. URL:', url);
        setPagesAnswers({ ...pagesAnswers, "viditure": url});
      })
      .catch((error) => {
        console.error('Error uploading video:', error);
        alert('Error uploading video. Please try again.');
        throw error;
      });
  };
  const [submition,setSubmition] = useState(dataForm!="");
  const nextButton = () => {
    setPagesAnswers({ ...pagesAnswers, "status": "Phase "+(index+1)});
    console.log(pagesAnswers)
    if(viditure)
    {
      const viditureformData = new FormData();
      viditureformData.append("file", viditure, "recording.webm");
      uploadViditure(viditureformData)
      .catch((error) => {
        console.error('Error uploading video:', error);
        alert('Error uploading video. Please try again.');
      });
    }
    if(!submition)
    {
      setSubmition(true);
      insertion(pagesAnswers)
      .then((res) => {
        if (res.data.success) {
          const appNum = res.data.data.applicationNumber;
          setApplicationNumber(appNum);
          console.log(appNum);
        }
      })
      .catch((error) => console.log(error.message));
    }
    else
    {
      updateForms(pagesAnswers,applicationNumber)
      .then((res) => {
        if (res.data.success) {
          console.log(pagesAnswers);
        }
      })
      .catch((error) => console.log(error.message));
    }
    if (index === totalPagesCount + 1) {
      setPagesAnswers({});
      setSubmitted(true);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answersObj });
  };

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  };
  
  const setStep = (stepNo) => {
    if (stepNo !== index) {
      setIndex(stepNo);
    }
  };

  return (
        // <div className="mx-auto">
          <div className="mt-4 carder py-4"     >
            <Card.Body className="card-body-step pt-4">

                {formType === "ExpiredPassport" && (
                  <ExpiredPassportForm
                   formType={formType}// Update this with your actual formType
                   index={index}
                   totalPagesCount={totalPagesCount}
                   onPageUpdate={onPageAnswerUpdate}
                   setViditure={setViditure}
                   pagesAnswers={pagesAnswers}
                   setStep={setStep}
                   prevButton={prevButton}
                   nextButton={nextButton}
                   handleStart={handleStart}
                   submitted={submitted}
                   applicationNumber={applicationNumber}
                  />
                )}
                {formType === "LostOrStolen" && (
                  <LostOrStoelnForm
                   formType={formType}// Update this with your actual formType
                   index={index}
                   totalPagesCount={totalPagesCount}
                   onPageUpdate={onPageAnswerUpdate}
                   pagesAnswers={pagesAnswers}
                   setStep={setStep}
                   prevButton={prevButton}
                   nextButton={nextButton}
                   handleStart={handleStart}
                   submitted={submitted}
                   applicationNumber={applicationNumber}
                  />
                )}
                 {formType === "DamagedForm" && (
                  <DamagedForm
                   formType={formType}// Update this with your actual formType
                   index={index}
                   totalPagesCount={totalPagesCount}
                   onPageUpdate={onPageAnswerUpdate}
                   pagesAnswers={pagesAnswers}
                   setStep={setStep}
                   prevButton={prevButton}
                   nextButton={nextButton}
                   handleStart={handleStart}
                   submitted={submitted}
                   applicationNumber={applicationNumber}
                  />

                )}
                {formType === "PassportCorrection" && (
                 <PassportCorrectionForm
                  formType={formType}// Update this with your actual formType
                  index={index}
                  totalPagesCount={totalPagesCount}
                  onPageUpdate={onPageAnswerUpdate}
                  pagesAnswers={pagesAnswers}
                   setStep={setStep}
                  prevButton={prevButton}
                  nextButton={nextButton}
                  handleStart={handleStart}
                  submitted={submitted}
                 />

               )}
                 {formType === "ConferenceVisa" && (
                  <ConferenceVisaForm
                   formType={formType}// Update this with your actual formType
                   index={index}
                   totalPagesCount={totalPagesCount}
                   onPageUpdate={onPageAnswerUpdate}
                   pagesAnswers={pagesAnswers}
                   setStep={setStep}
                   prevButton={prevButton}
                   nextButton={nextButton}
                   handleStart={handleStart}
                   submitted={submitted}
                   applicationNumber={applicationNumber}
                  />
                )}

                {formType === "PageRunOut" && (
                  <PageRunOutForm
                   formType={formType}// Update this with your actual formType
                   index={index}
                   totalPagesCount={totalPagesCount}
                   onPageUpdate={onPageAnswerUpdate}
                   pagesAnswers={pagesAnswers}
                   setStep={setStep}
                   prevButton={prevButton}
                   nextButton={nextButton}
                   handleStart={handleStart}
                   submitted={submitted}
                   applicationNumber={applicationNumber}
                  />
                )}

                {formType === "WillExpire" && (
                  <WillExpireForm
                   formType={formType}// Update this with your actual formType
                   index={index}
                   totalPagesCount={totalPagesCount}
                   onPageUpdate={onPageAnswerUpdate}
                   pagesAnswers={pagesAnswers}
                   setStep={setStep}
                   prevButton={prevButton}
                   nextButton={nextButton}
                   handleStart={handleStart}
                   submitted={submitted}
                   applicationNumber={applicationNumber}
                  />
                )}
                
                {formType === "TouristVisa" && (
                  <TouristVisaForm
                   formType={formType}// Update this with your actual formType
                   index={index}
                   totalPagesCount={totalPagesCount}
                   onPageUpdate={onPageAnswerUpdate}
                   pagesAnswers={pagesAnswers}
                   setStep={setStep}
                   prevButton={prevButton}
                   nextButton={nextButton}
                   handleStart={handleStart}
                   submitted={submitted}
                   applicationNumber={applicationNumber}
                  />
                )}
                
                {formType === "NGOWorkVisa" && (
                  <NGOWorkVisaForm
                   formType={formType}// Update this with your actual formType
                   index={index}
                   totalPagesCount={totalPagesCount}
                   onPageUpdate={onPageAnswerUpdate}
                   pagesAnswers={pagesAnswers}
                   setStep={setStep}
                   prevButton={prevButton}
                   nextButton={nextButton}
                   handleStart={handleStart}
                   submitted={submitted}
                   applicationNumber={applicationNumber}
                  />
                )}
                   
                {formType === "GIV" && (
                  <GIVVisaForm
                   formType={formType}// Update this with your actual formType
                   index={index}
                   totalPagesCount={totalPagesCount}
                   onPageUpdate={onPageAnswerUpdate}
                   pagesAnswers={pagesAnswers}
                   setStep={setStep}
                   prevButton={prevButton}
                   nextButton={nextButton}
                   handleStart={handleStart}
                   submitted={submitted}
                   applicationNumber={applicationNumber}
                  />
                )}
                {formType === "InvestmentVisa" && (
                  <InvestmentVisaForm
                   formType={formType}// Update this with your actual formType
                   index={index}
                   totalPagesCount={totalPagesCount}
                   onPageUpdate={onPageAnswerUpdate}
                   pagesAnswers={pagesAnswers}
                   setStep={setStep}
                   prevButton={prevButton}
                   nextButton={nextButton}
                   handleStart={handleStart}
                   submitted={submitted}
                   applicationNumber={applicationNumber}
                  />
                )}
                    {formType === "JournalistVisa" && (
                  <JournalistVisaForm
                   formType={formType}// Update this with your actual formType
                   index={index}
                   totalPagesCount={totalPagesCount}
                   onPageUpdate={onPageAnswerUpdate}
                   pagesAnswers={pagesAnswers}
                   setStep={setStep}
                   prevButton={prevButton}
                   nextButton={nextButton}
                   handleStart={handleStart}
                   submitted={submitted}
                   applicationNumber={applicationNumber}
                  />
                )}
                  {formType === "LaissezPasser" && (
                  <LaissezPasserForm
                   formType={formType}// Update this with your actual formType
                   index={index}
                   totalPagesCount={totalPagesCount}
                   onPageUpdate={onPageAnswerUpdate}
                   pagesAnswers={pagesAnswers}
                   setStep={setStep}
                   prevButton={prevButton}
                   nextButton={nextButton}
                   handleStart={handleStart}
                   submitted={submitted}
                   applicationNumber={applicationNumber}
                  />
                )}
                
            </Card.Body>
          </div>
        // </div>
  );
};

export default MultiStepForm;