import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ServiceTypes from "./ServiceTypes";
import DashboardCards from "./DashboardCards";
import ethiopia from '../assets/ethiopia.png';
import passport from '../assets/passport.png';
import MultiStepForm from "./MultiStepForm";

const AllServiceCards = () => {
  const [selectedServiceType, setSelectedServiceType] = useState(null);

  const renderServiceCardA = () => {
    setSelectedServiceType("PassportServices");
  };

  const renderServiceCardB = () => {
    setSelectedServiceType("Orign");
  };

  const renderServiceCardC = () => {
    setSelectedServiceType("Visa");
  };

  const renderServiceCardD = () => {
    setSelectedServiceType("LaissezPasser");
  };

  // Other renderServiceCard functions

  return (
    <Container className="mt-5" id="service-card-container">
      <Row className="mb-0 text-center mx-auto px-auto">
        {selectedServiceType === null && (
          <>
              <NavLink to="/ServiceCards" className="col-sm-12 col-md-6 col-lg-4">
                <DashboardCards
                  cardImage={passport}
                  title="Passport Services"
                  cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                  buttonName="Start"
                  cardFunction={renderServiceCardA}
                />
              </NavLink>
              <NavLink to="/OrignCards" className="col-sm-12 col-md-6 col-lg-4">
                <DashboardCards
                  cardImage={ethiopia}
                  title="Orign ID"
                  cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                  buttonName="Start"
                  cardFunction={renderServiceCardB}
                />
              </NavLink>
              <NavLink to="/VisaCards" className="col-sm-12 col-md-6 col-lg-4">
                <DashboardCards
                  cardImage={ethiopia}
                  title="Visa Service"
                  cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                  buttonName="Start"  
                  cardFunction={renderServiceCardC}
                />
              </NavLink>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <DashboardCards
                  
                  cardImage={ethiopia}
                  title="laissez passer"
                  cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                  buttonName="Start"
                  cardFunction={renderServiceCardD}
                />
                </div>
            {/* Add other DashboardCards as needed */}
          </>
        )}
      </Row>
      <Row>
        <Col>
          {selectedServiceType && (selectedServiceType=="LaissezPasser")?<MultiStepForm formType={selectedServiceType} category={selectedServiceType} />:<ServiceTypes serviceType={selectedServiceType} />}
        </Col>
      </Row>
    </Container>
    
  );
};

export default AllServiceCards;
