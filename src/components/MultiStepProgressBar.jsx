import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "../styles/multistepform.css";

const MultiStepProgressBar = (props) => {
  let steps = [];
  let totalSteps = 0;

  if (
    props.formType === "ExpiredPassport" ||
    props.formType === "LostOrStolen" ||
    props.formType === "PageRunOut" ||
    props.formType === "PassportCorrection" ||
    props.formType === "WillExpire" ||
    props.formType === "Damaged"
  ) {
    steps = [
      { label: "Information", completed: props.step > 1 },
      { label: "Personal Details", completed: props.step > 2 },
      { label: "Address", completed: props.step > 3 },
      { label: "Passport Info", completed: props.step > 4 },
      { label: "Signature", completed: props.step > 5 },
      { label: "Summary", completed: props.step > 6 }
    ];
    totalSteps = 6;
  } else if (props.formType === "newOriginId") {
    steps = [
      { label: "Personal details", completed: props.step > 1 },
      { label: "Parental details", completed: props.step > 2 },
      { label: "Address", completed: props.step > 3 },
      { label: "Passport details", completed: props.step > 4 },
       { label: "Signature", completed: props.step > 5 },
      { label: "Summary", completed: props.step > 6 }
    ];
    totalSteps = 6;
  } 
else if (props.formType === "reNewOriginId") {
    steps = [
      { label: "Personal details", completed: props.step > 1 },
      { label: "Address", completed: props.step > 2 },
      { label: "Passport details", completed: props.step > 3 },
        { label: "Attachments", completed: props.step > 4 },
       { label: "Signature", completed: props.step > 5 },
      { label: "Summary", completed: props.step > 6 }
    ];
    totalSteps = 6;
  }
  else if (props.formType === "TouristVisa" ||
  props.formType === "JournalistVisa" ||
  props.formType === "InvestmentVisa" ||
  props.formType === "GIV" ||
  props.formType === "NGOWorkVisa" ||
  props.formType === "ConferenceVisa") {
    steps = [
      { label: "Information", completed: props.step > 1 },
      { label: "Personal Details", completed: props.step > 2 },
      { label: "Visa Information", completed: props.step > 3 },
      { label: "Attachments", completed: props.step > 4 },
      { label: "Signature", completed: props.step > 5 },
      { label: "Summary", completed: props.step > 6 }
    ];
    totalSteps = 6;
  } 
  const percent = (props.step / totalSteps) * 100;

  return (
    <ProgressBar percent={percent}>
      {steps.map((step, index) => (
        <Step key={index}>
          {({ accomplished }) => (
            <div className={`step ${accomplished ? "completed" : null}`}>
              {step.label}
            </div>
          )}
        </Step>
      ))}
    </ProgressBar>
  );
};

export default MultiStepProgressBar;