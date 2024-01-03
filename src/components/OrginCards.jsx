import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import MultiStepForm from "./MultiStepForm";
import DashboardCards from "./DashboardCards";
import ethiopia from '../assets/ethiopia.png';
import passport from '../assets/passport.png';

const OrignCards = (serviceType) => {
  const [selectedFormType, setSelectedFormType] = useState(null);

  const renderServiceCardA = () => {
    setSelectedFormType("ExpiredPassport");
  };

  const renderServiceCardB = () => {
    setSelectedFormType("LostOrStolen");
  };

  const renderServiceCardC = () => {
    setSelectedFormType("PassportCorrection");
  };
  const renderServiceCardD = () => {
    setSelectedFormType("WillExpire");
  };
  const renderServiceCardE = () => {
    setSelectedFormType("Damaged");
  };
  const renderServiceCardF = () => {
    setSelectedFormType("PageRunOut");
  };

  return (
    <Container className="mt-5" id="">
      <Row className="mb-0">
       
        {selectedFormType === null && (
          <>
            <Col>
              <DashboardCards
                cardImage={ethiopia}
                title="Orign ID By Spouse"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"
                cardFunction={renderServiceCardA}
              />
            </Col>
            <Col>
              <DashboardCards
                cardImage={ethiopia}
                title="Orign ID By Birth"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"
                cardFunction={renderServiceCardB}
              />
            </Col>
            <Col>
              <DashboardCards
                cardImage={ethiopia}
                title="Orign ID By Parent"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"  
                cardFunction={renderServiceCardC}
              />
            </Col>
            
          </>
        )}
      </Row>
      <Row>
        <Col>
          {selectedFormType && <MultiStepForm formType={selectedFormType} />}
        </Col>
      </Row>
    </Container>
  );
};

export default OrignCards;
