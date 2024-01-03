// MultiStep.js
import React from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
  makeStyles,
} from '@material-ui/core';
import { useRecordWebcam } from 'react-record-webcam'
import { FormItem } from '../FormItem';
import VideoRecorder from '../viditure';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepContainer: {
    marginTop: theme.spacing(3),
    // width: '50%',
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


// export const length=6;




const ExpiredPassportForm = ({ formType, index, onPageUpdate, pagesAnswers, prevButton, nextButton, setStep, handleStart, submitted }) => {
  const classes = useStyles();
  const totalPagesCount = 6;
  // localStorage.setItem('pageLength',totalPagesCount);
  // settotalPagesCount(6);
  // console.log(totalPagesCount);
 const [errors, setErrors] = useState({});
   const isFormValid = () => {
       let isValid = true;
    const currentStepErrors = {};
    switch (index) {
  case 1:
    // Validate personal details form
    if (!pagesAnswers.firstName) {
      currentStepErrors.firstName = 'Please fill in the First Name';
      isValid = false;
    }
    if (!pagesAnswers.lastName) {
      currentStepErrors.lastName = 'Please fill in the Last Name';
      isValid = false;
    }
    if (!pagesAnswers.phone) {
      currentStepErrors.phone = 'Please fill in the Phone Number';
      isValid = false;
    }
    if (!pagesAnswers.dateOfBirth) {
      currentStepErrors.dateOfBirth = 'Please fill in the Date of Birth';
      isValid = false;
    }
    // Add other validations for step 1 if needed
    break;
  case 2:
    // Validate address form
    if (!pagesAnswers.region) {
      currentStepErrors.region = 'Please fill in the Region';
      isValid = false;
    }
    if (!pagesAnswers.city) {
      currentStepErrors.city = 'Please fill in the City';
      isValid = false;
    }
    // Add other validations for step 2 if needed
    break;
  case 3:
    // Validate passport information form
    if (!pagesAnswers.passportPageNumber) {
      currentStepErrors.passportPageNumber = 'Please fill in the Passport Page Number';
      isValid = false;
    }
    if (!pagesAnswers.oldPassportNumber) {
      currentStepErrors.oldPassportNumber = 'Please fill in the Old Passport Number';
      isValid = false;
    }
    if (!pagesAnswers.oldPassportIssueDate) {
      currentStepErrors.oldPassportIssueDate = 'Please fill in the Old Passport Issue Date';
      isValid = false;
    }
    if (!pagesAnswers.oldPassportExpirationDate) {
      currentStepErrors.oldPassportExpirationDate = 'Please fill in the Old Passport Expiration Date';
      isValid = false;
    }
    // Add other validations for step 3 if needed
    break;
  // Add cases for other steps if needed
  default:
    break;
}
 setErrors(currentStepErrors);
    return isValid;
  };


  const renderForm = () => {
    
    return (
      <div>
      
        {index === 1 && (
         // FormItems for the first step// FormItems for the first step
        <>
          <h4>For Expired Passport Renewal | Personal Details</h4>
          <div className="row">
            <div className="col-4">
            <FormItem
                item={{
                  label: 'First Name/ Given name',
                  type: 'text',
                  value: 'firstName',
                  required: true,
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.firstName}
                error={errors.firstName} // Display error for this field
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: "Middle Name/ Father’s name",
                  type: 'text',
                  value: 'middleName',
                  required: true,
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.middleName}
                error={errors.middleName} // Display error for this field
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: "Last Name/ Grandfather's name",
                  type: 'text',
                  value: 'lastName',
                  required: true,
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.lastName}
                error={errors.lastName} // Display error for this field
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Phone Number',
                  type: 'tel',
                  value: 'phone',
                  required: true,
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.phone}
                error={errors.phone} // Display error for this field
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Date of birth',
                  type: 'date',
                  value: 'dateOfBirth',
                  required: true,
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.dateOfBirth}
                error={errors.dateOfBirth} // Display error for this field
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Gender',
                  type: 'select',
                  value: 'gender',
                  options: ['Male', 'Female'],
                  required: true,
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.gender}
                error={errors.gender} // Display error for this field
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Place of birth',
                  type: 'text',
                  value: 'placeOfBirth',
                  required: true,
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.placeOfBirth}
                error={errors.placeOfBirth} // Display error for this field
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Nationality',
                  type: 'text',
                  value: 'nationality',
                  required: true,
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.nationality}
                error={errors.nationality} // Display error for this field
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Martial Status',
                  type: 'select',
                  value: 'martialStatus',
                  options: ['Married', 'Single'],
                  required: true,
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.martialStatus}
                error={errors.martialStatus} // Display error for this field
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Country Code',
                  type: 'text',
                  value: 'countryCode',
                  required: true,
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.countryCode}
                error={errors.countryCode} // Display error for this field
              />
            </div>
          </div>
        </>

        )}

        {index === 2 && (
          <>
            <h4>For Expired Passport Renewal | Address</h4>
          <div className="row">
            {/* Extrapolate the data for Step 2 from your object and generate FormItems */}
            <div className="col-4">
            <FormItem
              item={{
                label: 'Region',
                type: 'text',
                value: 'region',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.region}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'City',
                type: 'text',
                value: 'city',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.city}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'State',
                type: 'text',
                value: 'state',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.state}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'Zone',
                type: 'select',
                value: 'zone',
                options: ['Zone 1', 'Zone 2'],
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.zone}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'Woreda',
                type: 'text',
                value: 'woreda',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.woreda}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'Kebele',
                type: 'text',
                value: 'kebele',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.kebele}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'Street',
                type: 'text',
                value: 'street',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.street}
            />
            </div>
            <div className="col-4">
            <FormItem
              item={{
                label: 'House number',
                type: 'text',
                value: 'houseNumber',
              }}
              onChange={(value, name) => onPageUpdate(name, value)}
              answer={pagesAnswers.houseNumber}
            />
            </div>
          </div>
            {/* Add other address form items here */}
          </>
        )}

        {index === 3 && (
          <>
            <h4>For Expired Passport Renewal | Passport Information</h4>
            
          <div className="row">
            <div className="col-4">
              {/* Extrapolate the data for Step 3 from your object and generate FormItems */}
              <FormItem
                item={{
                  label: 'Passport page number',
                  type: 'number',
                  value: 'passportPageNumber',
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.passportPageNumber}
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Old passport number',
                  type: 'text',
                  value: 'oldPassportNumber',
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.oldPassportNumber}
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Old passport issue date',
                  type: 'date',
                  value: 'oldPassportIssueDate',
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.oldPassportIssueDate}
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Old passport expiration date',
                  type: 'date',
                  value: 'oldPassportExpirationDate',
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.oldPassportExpirationDate}
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Old passport photo',
                  type: 'file',
                  value: 'oldPassportPhoto',
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.oldPassportPhoto}
              />
            </div>
            <div className="col-4">
              <FormItem
                item={{
                  label: 'Recent passport size photo',
                  type: 'file',
                  value: 'recentPassportSizePhoto',
                }}
                onChange={(value, name) => onPageUpdate(name, value)}
                answer={pagesAnswers.recentPassportSizePhoto}
              />
            </div>
          </div>
            {/* Add other passport information form items here */}
          </>
        )}

        {index === 4 && (
          <>
            <h4>Record Video</h4>
            {/* <VideoRecorder/> */}
          </>
        )}
      </div>
    );
  };

  return (
    <Container>
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
              nextButton();
            }
          }}
          disabled={!isFormValid()}
        >
          {index === 1
            ? 'Start'
            : index === totalPagesCount + 1
            ? 'Submit'
            : 'Next'}
        </Button>
        </div>
      </Container>
    </Container>
  );
};

export default ExpiredPassportForm;
