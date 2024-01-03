import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import MultiStepForm from "./MultiStepForm";
import DashboardCards from "./DashboardCards";
import ethiopia from '../assets/ethiopia.png';
import passport from '../assets/passport.png';

const VisaCards = (serviceType) => {
  const [selectedFormType, setSelectedFormType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Visa");

  const renderServiceCardA = () => {
    setSelectedFormType("TouristVisa");
  };

   const renderServiceCardB = () => {
    setSelectedFormType("JournalistVisa");
  };

  const renderServiceCardC = () => {
    setSelectedFormType("InvestmentVisa");
  };
  const renderServiceCardD = () => {
    setSelectedFormType("GIV");
  };
  const renderServiceCardE = () => {
    setSelectedFormType("NGOWorkVisa");
  };
  const renderServiceCardF = () => {
    setSelectedFormType("ConferenceVisa");
  };

  return (
    <Container className="mt-5" id="service-card-container">
      <Row className="mb-0">
       
        {selectedFormType === null && (
          <>
            <Col sm={12} md={6} lg={4}>
              <DashboardCards
                cardImage={ethiopia}
                title="Tourist Visa"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"
                cardFunction={renderServiceCardA}
              />
            </Col>
             <Col sm={12} md={6} lg={4}>
              <DashboardCards
                cardImage={ethiopia}
                title="Journalist Visa"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"
                cardFunction={renderServiceCardB}
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <DashboardCards
                cardImage={ethiopia}
                title="Investment Visa"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"  
                cardFunction={renderServiceCardC}
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <DashboardCards
                cardImage={ethiopia}
                title="GIV"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"  
                cardFunction={renderServiceCardD}
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <DashboardCards
                cardImage={ethiopia}
                title="NGO Work Visa"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"  
                cardFunction={renderServiceCardE}
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <DashboardCards
                cardImage={ethiopia}
                title="Conference Visa"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"  
                cardFunction={renderServiceCardF}
              />
            </Col>
          </>
        )}
      </Row>
      <Row>
          {selectedFormType && <MultiStepForm formType={selectedFormType} category={selectedCategory} />}
      </Row>
    </Container>
  );
};

export default VisaCards;
