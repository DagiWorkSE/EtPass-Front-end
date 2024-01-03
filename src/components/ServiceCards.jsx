import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import MultiStepForm from "./MultiStepForm";
import DashboardCards from "./DashboardCards";
import passport from '../assets/passport.png';
import { useLocation } from "react-router";

const ServiceCards = (serviceType) => {
  // console.log(serviceType);
  const [selectedFormType, setSelectedFormType] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Passport");

  const location = useLocation();
  // const navigate = useNavigate();
  const { viewPassportItem } = location.state || {};
  useEffect(() => {
    // Log the viewPassportItem to verify if it's being received correctly
    console.log("viewPassportItem:", viewPassportItem);

    // Set selectedFormType based on viewPassportItem
    if (viewPassportItem) {
      setSelectedFormType(viewPassportItem.application_type);
      console.log("Selected Form Type:", viewPassportItem.application_type);
    }
  }, [viewPassportItem]);

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
    // <Container className="mt-5" id="service-card-container">
    <>
        {selectedFormType === null && (
          <Row>
            <Col sm={12} md={6} lg={4}>
              <DashboardCards
                cardImage={passport}
                title="Expired Passport"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"
                cardFunction={renderServiceCardA}
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <DashboardCards
                cardImage={passport}
                title="Lost or Stolen"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"
                cardFunction={renderServiceCardB}
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <DashboardCards
                cardImage={passport}
                title="Passport Correction"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"  
                cardFunction={renderServiceCardC}
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <DashboardCards
                cardImage={passport}
                title="Will Expire"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"
                cardFunction={renderServiceCardD}
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <DashboardCards
                cardImage={passport}
                title="Damaged passport"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"
                cardFunction={renderServiceCardE}
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <DashboardCards
                cardImage={passport}
                title="Page run-out"
                cardContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                buttonName="Start"
                cardFunction={renderServiceCardF}
              />
              </Col>
          </Row>
        )}
          {selectedFormType && <MultiStepForm formType={selectedFormType} category={selectedCategory} dataForm={viewPassportItem} />}
    {/* </Container> */}
      </>
  );
};

export default ServiceCards;
