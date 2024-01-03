import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  lostorstolen,
  pageRunOut,
  questions,
  passportcorrection,
  willExpireQuestions,
  damagedQuestions,
  NewOriginId,
  ReNewOriginId,
  TouristVisaQuestions,
  JournalistVisaQuestions,
  InvestmentVisaQuestions,
  GIVQuestions,
  NGOWorkVisaQuestions,
  ConferenceVisaQuestions,
} from "./Questions";
import { PassportRenewalForm } from "./passport/PassportRenewalForm";
import { LostOrStolenPassportRenewal } from "./passport/LostOrStolenPassportRenewal";
import { PageRunOutForm } from "./passport/PageRunOutForm";
import { PassportCorrection } from "./passport/PassportCorrection";
import { WillExpireForm } from "./passport/willExpireForm";
import { DamagedForm } from "./passport/DamagedForm";
import MultiStepProgressBar from "./MultiStepProgressBar";
import Transport from "../api/transport";
import { NewOriginIdForm } from "./originId/NewOriginId";
import { ReNewOriginIdForm } from "./originId/ReNewOriginId";
import { TouristVisa } from "./visa/TouristVisa";
import { JournalistVisa } from "./visa/JournalistVisa";
import { InvestmentVisa } from "./visa/InvestmentVisa";
import { GIV } from "./visa/GIV";
import { NGOWorkVisa } from "./visa/NGOWorkVisa";
import { ConferenceVisa } from "./visa/ConferenceVisa";
import AllServiceCards from "./AllServiceCards";

const MultiStepForm = ({ formType, category }) => {
  const backends = category == 'Passport'?Transport.HTTP.createPassportRequest:Transport.HTTP.createVisaRequest;
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions?.length || 0;
  const [pagesAnswers, setPagesAnswers] = useState({});

  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextButton = () => {
  
    if (index === totalPagesCount + 1) {
      // Submit the form
      // Transport.HTTP.createVisaRequest(pagesAnswers)
      backends(pagesAnswers)
        .then((res) => {
          if (res.data.success) {
            console.log("data sent for passport:::", pagesAnswers);
          }
        })
        .catch((error) => console.log(error.message));
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

  return (
    <div className="App">
      <Container className="h-100">
        <Row className="step-form-passport">
          <Col className="align-self-center">
            <MultiStepProgressBar step={index} formType={formType} />
          </Col>
        </Row>
        <Row>
          {submitted ? (
            <Card>
              <Card.Body className="card-body-step submitted-message">
                <div className="row">
                  <div className="col">
                    <h3>Your request has been submitted!</h3>
                  </div>
                  <div>
                    <h6>Thank You For Using ETPASS 🙏 🙏 🙏</h6>
                  </div>
                </div>
              </Card.Body>
              <Card.Footer>
                <Button className="next-button" onClick={handleStart}>
                  Start Over
                </Button>
              </Card.Footer>
            </Card>
          ) : (
            <Card>
              <Card.Body className="card-body-step ps-3 pt-4">
                {index === totalPagesCount + 1 ? (
                 <>
                    <div className="row">
                      <div className="col">
                        <h3>Summary</h3>
                        <h4>please Check your answers</h4>
                      </div>
                      <div>
                   <pre>
                    <div className="container row">
                      {Object.entries(pagesAnswers)
                        .filter(([key]) => !isNaN(parseInt(key)) && key !== "index")
                        .map(([key, value]) => (
                          <div key={key} className=" col-12 card12 mt-3">
                            <div className="card-body cards123">
                              {Object.entries(value)
                              .filter(([nestedKey]) => nestedKey !== "index")
                              .map(([nestedKey, nestedValue]) => (
                                <div key={nestedKey} className="mb-2">
                                  <strong>{nestedKey}:</strong> <span>{nestedValue}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                      </pre> 
                    </div>
                  </div>        
                </>
                ) : (
                  <>
                 {formType === "ExpiredPassport" && (
                  <PassportRenewalForm
                    list={questions}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                {formType === "LostOrStolen" && (
                  <LostOrStolenPassportRenewal
                    list={lostorstolen}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                {formType === "PageRunOut" && (
                  <PageRunOutForm
                    list={pageRunOut}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                {formType === "PassportCorrection" && (
                  <PassportCorrection
                    list={passportcorrection}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                {formType === "WillExpire" && (
                  <WillExpireForm
                    list={willExpireQuestions}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                {formType === "Damaged" && (
                  <DamagedForm
                    list={damagedQuestions}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                  {formType === "newOriginId" && (
                  <NewOriginIdForm
                    list={NewOriginId}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                 {formType === "reNewOriginId" && (
                  <ReNewOriginIdForm
                    list={ReNewOriginId}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                 {formType === "TouristVisa" && (
                  <TouristVisa
                    list={TouristVisaQuestions}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                 {formType === "JournalistVisa" && (
                  <JournalistVisa
                    list={JournalistVisaQuestions}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                 {formType === "InvestmentVisa" && (
                  <InvestmentVisa
                    list={InvestmentVisaQuestions}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                 {formType === "GIV" && (
                  <GIV
                    list={GIVQuestions}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                 {formType === "NGOWorkVisa" && (
                  <NGOWorkVisa
                    list={NGOWorkVisaQuestions}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                 {formType === "ConferenceVisa" && (
                  <ConferenceVisa
                    list={ConferenceVisaQuestions}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                )}
                  </>
                )}
              </Card.Body>
              <Card.Footer className="multistep-button">
                <Button
                  className="back-button"
                  onClick={prevButton}
                  disabled={index === 1}
                >
                  Previous
                </Button>
                <Button className="next-button" onClick={nextButton}>
                  {index === 1
                    ? "Start"
                    : index === totalPagesCount + 1
                    ? "Submit"
                    : "Next"}
                  
                </Button>
              </Card.Footer>
            </Card>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default MultiStepForm;