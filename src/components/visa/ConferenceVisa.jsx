// MultiStep.js
import React, { useRef, useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
  makeStyles,
  Grid,
  Typography,
  Hidden,
  Card, 
 
} from '@material-ui/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { FormItem } from '../FormItem';
import {  Row, Col, Form } from "react-bootstrap";
import VideoRecording from '../viditure';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Sign from '../Signature';
import DateSelector from '../DateSelector';
import Chapa from '../Chapa/Chapa';


const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepContainer: {
    marginTop: theme.spacing(3),
    width: '100%', // Set Heightto 100%
    transition: 'width 0.5s', // Add a transition for the width property
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3),
  },
}));




const ConferenceVisaForm = ({ formType, index, onPageUpdate, pagesAnswers, setViditure, prevButton, nextButton, setStep, handleStart, submitted, applicationNumber }) => {
  const classes = useStyles();
  const totalPagesCount = 6;
  localStorage.setItem('pageLength',totalPagesCount);


  const pdfRef = useRef();

  const downloadPDF = () => {
    
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
     let pdf = new jsPDF('p', 'px', [1600, 1131]);
			pdf.addImage(imgData, 'PNG', 15, 15, 1040, 996);
			pdf.save('etpass-conference-visa-application.pdf');
   
     

    })
  }

 



  const steplabel = ['Information','Personal Details', 'Address',  'Viditure', 'Summary', 'Payment'];
   const isFormValid = () => {

    
    switch (index) {
      case 1:
        // Validate personal details form
        return (
          pagesAnswers.arrivalDate &&
          pagesAnswers.departureCountry &&
          pagesAnswers.departureCity &&
          pagesAnswers.airline &&
          pagesAnswers.flightNo &&
          pagesAnswers.accType &&
          pagesAnswers.accName &&
          pagesAnswers.accCity &&
          pagesAnswers.accStreetAddress &&
          pagesAnswers.accPhone 
      
        );
      case 2:
        // Validate address form
        return (
          pagesAnswers.firstName &&
          pagesAnswers.firstNameAmharic &&
          pagesAnswers.middleName &&
          pagesAnswers.middleNameAmharic &&
          pagesAnswers.lastName &&
          pagesAnswers.lastNameAmharic &&
          pagesAnswers.dateOfBirth &&
          pagesAnswers.gender &&
          pagesAnswers.email &&
          pagesAnswers.phone &&
          pagesAnswers.addressCity &&
          pagesAnswers.streetAddress &&
          pagesAnswers.placeOfBirth &&
          pagesAnswers.countryOfBirth
          
        );
      case 3:
        // Validate passport information form
        return (
          pagesAnswers.passType &&
          pagesAnswers.passNum&&
          pagesAnswers.passIssDate&&
          pagesAnswers.passExpDate&&
          pagesAnswers.passIssCountry&&
          pagesAnswers.passIssAuth
        );
      // Add cases for other steps if needed
      default:
        return true;
    }
  };
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const renderForm = () => {
    
    return (
      
      <>
      
        {index === 1 && (
         // FormItems for the first step// FormItems for the first step
        <>
          <h4>Conference Visa -| Information</h4>
          <div className="row">
             <Col xs={12} sm={6} md={6} lg={4}>
                {/* add date here */}
                <DateSelector label="Arrival Date" name="arrivalDate" onPageUpdate={onPageUpdate}/>
              </Col>
              
              
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: "Departure Country",
                type: 'select',
                value: 'departureCountry',
                options: [ 'USA', 'UK']  
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.departureCountry}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Departure City',
                type: 'text',
                value: 'departureCity',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.departureCity}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Airline',
                type: 'text',
                value: 'airline'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.airline}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Flight Number',
                type: 'text',
                value: 'flightNo'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.flightNo}
            />
            </Col>
            <div>
            <h4 className='my-4'>Conference Visa -| Address In Ethiopia</h4>
            </div>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Accommodation Type',
                type: 'select',
                value: 'accType',
                options: [ 'type 2', 'type 1']
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.accType}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Accommodation Name',
                type: 'text',
                value: 'accName'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.accName}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Accommodation City',
                type: 'text',
                value: 'accCity'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.accCity}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Accommodation Street Address',
                type: 'text',
                value: 'accStreetAddress'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.accStreetAddress}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Accommodation Phone Number',
                type: 'phone',
                value: 'accPhone'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.accPhone}
            />
            </Col>
          </div>
        </>

        )}

        {index === 2 && (
          <>
            <h4>For Conference Visa -| Personal Details</h4>
            <div className="row">
            {/* Extrapolate the data for Step 2 from your object and generate FormItems */}
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'First Name/ Given name',
                type: 'text',
                value: 'firstName'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.firstName}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'ስም',
                type: 'text',
                value: 'firstNameAmharic'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.firstNameAmharic}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: "Middle Name/ Father’s name",
                type: 'text',
                value: 'middleName'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.middleName}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: "የአባት ስም",
                type: 'text',
                value: 'middleNameAmharic'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.middleNameAmharic}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: "Last Name/ Grandfather's name",
                type: 'text',
                value: 'lastName'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.lastName}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: "የአያት ስም",
                type: 'text',
                value: 'lastNameAmharic'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.lastNameAmharic}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
                {/* add date here */}
                <DateSelector label="Date of Birth" name="dateOfBirth" onPageUpdate={onPageUpdate}/>
              </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Gender',
                type: 'select',
                value: 'gender',
                options: [ 'Male', 'Female']
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.gender}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Occupation',
                type: 'text',
                value: 'occupation'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.occupation}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Email Address',
                type: 'email',
                value: 'email'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.email}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Phone Number',
                type: 'phone',
                value: 'phone'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.phone}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Citzenship',
                type: 'text',
                value: 'citzenship'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.citzenship}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Address City',
                type: 'text',
                value: 'addressCity'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.addressCity}
            />
            </Col>
            
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Steet Address',
                type: 'text',
                value: 'streetAddress'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.streetAddress}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Place Of Birth',
                type: 'text',
                value: 'placeOfBirth'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.placeOfBirth}
            />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
            <FormItem
              item={{
                label: 'Country Of Birth',
                type: 'text',
                value: 'countryOfBirth'
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.countryOfBirth}
            />
            </Col>
          </div>
            {/* Add other address form items here */}
          </>
        )}

        {index === 3 && (
          <>
            <h4>For Conference Visa | Address</h4>
            
            <div className="row">
            <Col xs={12} sm={6} md={6} lg={4}>
              {/* Extrapolate the data for Step 3 from your object and generate FormItems */}
              <FormItem
                item={{
                  label: 'Passport Type',
                  type: 'text',
                  value: 'passType'
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.passType}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              <FormItem
                item={{
                  label: 'Passport Number',
                  type: 'text',
                  value: 'passNum'
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.passNum}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
                {/* add date here */}
                <DateSelector label="Passport Issue Date" name="passIssDate" onPageUpdate={onPageUpdate}/>
              </Col>
              <Col xs={12} sm={6} md={6} lg={4}>
                {/* add date here */}
                <DateSelector label="Passport Expire Date" name="passExpDate" onPageUpdate={onPageUpdate}/>
              </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              <FormItem
                item={{
                  label: 'Passport Issuing Country',
                  type: 'text',
                  value: 'passIssCountry'
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.passIssCountry}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              <FormItem
                item={{
                  label: 'Passport Issuing Authority',
                  type: 'text',
                  value: 'passIssAuth'
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.passIssAuth}
              />
            </Col>
          </div>
            {/* Add other passport information form items here */}
          </>
        )}

        {index === 4 && (
          <>
           
            <h4>Record Video</h4>
            <VideoRecording setViditure={setViditure}/>
           
            <h2 style={{fontWeight:'900px'}}>Sign here</h2>
            <div style={{maxWidth:'495px'}}>
            <Sign onPageUpdate={onPageUpdate}/>
            
            </div>
        
          </>
        )}
          {index === 5 && (
          <>
      
    <div ref={pdfRef}>
 {/* <VideoRecorder/> */}
 <Container className="d-flex row align-items-center justify-content-center p-3 h-100" >
                
                <div className=" flex flex-col font-lato items-center justify-start ml-4" >
                
                  <div className=" flex flex-col gap-4 justify-end w-100 h-100 rounded-md" >
                  <Typography variant="h3" className="text-gray-900_03 text-center pt-4" >
                     Summary
                    </Typography>
                    <hr style={{'width':'50%', 'alignSelf':'center'}}></hr>
                    <Typography variant="h4" className="text-gray-900_03  pt-1" >
                        Information
                    </Typography>
                    <div className=" border-black-900_19 border-solid border-t-2 flex flex-col items-center justify-start px-4 py-6" style={{'background-color':'#eaeef8'}}>
                    
                      <Grid container spacing={6}>
                        
                      <Grid item xs={12} md={6} className=" border-l-2 border-solid">

                        
                          <ProfileInfo label="Arrival Date" value={pagesAnswers.arrivalDate} />
                          <ProfileInfo label="Departure Country" value={pagesAnswers.departureCountry} />
                          <ProfileInfo label="Departure City" value={pagesAnswers.departureCity} />
                           <ProfileInfo label="Airline" value={pagesAnswers.airline} />
                          <ProfileInfo label="Flight Number" value={pagesAnswers.flightNo} />
                          <ProfileInfo label="Accommodation Type" value={pagesAnswers.accType} />
                          <ProfileInfo label="Accommodation Name" value={pagesAnswers.accName} />
                          <ProfileInfo label="Accommodation City" value={pagesAnswers.accCity} />
                          <ProfileInfo label="Accommodation StreetAddress" value={pagesAnswers.accStreetAddress} />
                          <ProfileInfo label="Accommodation Phone Number" value={pagesAnswers.accPhone} />
                         
                        </Grid>
                    
                        
                        <Grid item xs={12} md={6} className=" border-l-2 border-solid">
                          <div className="flex flex-col gap-4 items-center justify-start mb-4"></div>
                          <ProfileInfo label="First Name" value={pagesAnswers.firstName} />
                          <ProfileInfo label="ስም" value={pagesAnswers.firstNameAmharic} />
                          <ProfileInfo label="Middle Name / Father's Name" value={pagesAnswers.middleName} />
                          <ProfileInfo label="የአባት ስም" value={pagesAnswers.middleNameAmharic} />
                          <ProfileInfo label="Last Name/ Grandfather's name" value={pagesAnswers.lastName} />
                          <ProfileInfo label="የአያት ስም" value={pagesAnswers.lastNameAmharic} />
                          <ProfileInfo label="Date of Birth" value={pagesAnswers.dateOfBirth} />
                           <ProfileInfo label="Gender" value={pagesAnswers.gender} />
                           <ProfileInfo label="Occupation" value={pagesAnswers.occupation} />
                           
                           </Grid>
                           </Grid>
                           </div>
                           </div>
                           </div>
                       </Container>  
                           <Container className="d-flex row align-items-center justify-content-center p-3 h-100" style={{ height: 'auto' }}>
                    
  <div className="flex flex-col font-lato items-center justify-start ml-4">
    <div className="flex flex-col gap-4 justify-end w-100 h-100 rounded-md">
      <Typography variant="h4" className="text-gray-900_03 pt-1">
                        Personal Details
                    </Typography>
      <div className=" border-black-900_19 border-solid border-t-2 flex flex-col justify-start px-4 py-6" style={{'background-color':'#eaeef8'}}>
                           <Grid item xs={12} md={6}>

                           <div className="flex flex-col gap-4 items-center justify-start mb-4"></div>
                           <ProfileInfo label="Email Address" value={pagesAnswers.email} />
                           <ProfileInfo label="Phone" value={pagesAnswers.phone} />
                           <ProfileInfo label="Citzenship" value={pagesAnswers.citzenship} />
                           <ProfileInfo label="Address City" value={pagesAnswers.addressCity} />
                           <ProfileInfo label="Street Address" value={pagesAnswers.streetAddress} />
                          <ProfileInfo label="Place of Birth" value={pagesAnswers.placeOfBirth} />
                          <ProfileInfo label="Country of Birth" value={pagesAnswers.countryOfBirth} />
                      
                        </Grid>
                      </div>
                    </div>
                    </div>
                  </Container>
                 
               <Container className="d-flex row align-items-center justify-content-center p-3 h-100" style={{height:'auto'}}>
                <div className=" flex flex-col font-lato items-center justify-start ml-4">
                  <div className=" flex flex-col gap-4 justify-end w-100 h-100 rounded-md">
                  <Typography variant="h4" className="text-gray-900_03  pt-1" >
                        Passport Details
                    </Typography>
                    <div className=" border-black-900_19 border-solid border-t-2 flex flex-col items-center justify-start px-4 py-6" style={{'background-color':'#eaeef8'}}>
                    
                      <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
            
                          <ProfileInfo label="Passport Type" value={pagesAnswers.passType} />
                          <ProfileInfo label="Passport Number" value={pagesAnswers.passNum} />
                          <ProfileInfo label="Passport Issue Date" value={pagesAnswers.passIssDate} />
                          <ProfileInfo label="Passport Expire Date" value={pagesAnswers.passExpDate} />
                          <ProfileInfo label="Passport Issuing Country" value={pagesAnswers.passIssCountry} />
                          <ProfileInfo label="Passport Issuing Authority" value={pagesAnswers.passIssAuth} />
                        </Grid>
                    
                      </Grid>
                    </div>
                  </div>
                </div>
              </Container>
             
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <p className='mt-2 fw-bold '>N.B Now you have to download the summary, print and sign the paper. after doing that you will have to upload it.</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            </div> 
          </div>
 


    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          
          <Button  variant="contained"
                  color="primary"
                 
                  className=" align-center mt-3" onClick={downloadPDF}>
                        Download PDF
            </Button> 
                </div> 
             
          </>
        )}
        {index === 6 && (
          <>
          <Chapa 
            fname={pagesAnswers.firstName}
            mname={pagesAnswers.middleName}
            lname={pagesAnswers.lastName}
            phone={pagesAnswers.phone}
            type='Conference Visa'
            amount='3000'
            tx_num={applicationNumber}
           />
          </>
        )}
      </>
   
    );
  };
 
    
const ProfileInfo = ({ label, value }) => (
  <div className="flex flex-row gap-4 items-center justify-start mt-4">
    <Typography variant="h6" className="text-gray-900_a3 w-32">
      {label}
    </Typography>
    <Typography variant="body1" className="text-gray-900_03">
      {value}
    </Typography>
  </div>
);

  return (
    <Container>
    <Hidden smDown>
        <Stepper activeStep={index - 1} alternativeLabel>
          {steplabel.map((val, step) => (
            <Step key={step} 
            onClick={()=>
            {
              if (isFormValid()) 
              setStep(step+1)}}>
              <StepLabel>{`${val}`}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Hidden>
      <Container className={classes.stepContainer}>
        {submitted ? (
          <div>
            <h3>Your request has been submitted!</h3>
            <h6>Thank You For Using ETPASS 🙏 🙏 🙏</h6>
            <Button variant="contained" color="primary" onClick={handleStart}>
              Start Over
            </Button>
          </div>
        ) : (
          <div>
            {index === totalPagesCount + 1 ? (
              <div>
                <h3>Summary</h3>
                <h4>Please Check Your Answers</h4>
                {/* ... Display a summary of answers */}
                {/* The existing code for displaying answers can be used here */}
              </div>
            ) : (
              <div>{renderForm()}</div>
            )}
          </div>
        )}
         <div className={classes.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          className="back-button"
          onClick={prevButton}
          disabled={index === 1}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="next-button"
          onClick={() => {
            if (isFormValid()) {
              setStep((prevStep) => prevStep + 1);  // Update the step using setStep
            } else {
              setOpen(true);
            }
          }}
          disabled={!isFormValid}
        >
          {index === 1 ? 'Start' : index === totalPagesCount + 1 ? 'Submit' : 'Next'}
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle></DialogTitle>
          <DialogContent>
            <p style={{ color: 'red' }}>Please fill all the required fields.</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      </Container>
    </Container>
    
  );
};

export default ConferenceVisaForm;