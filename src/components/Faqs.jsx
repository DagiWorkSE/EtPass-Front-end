import React, { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import "../styles/homePageStyles.css";

function Faqs() {
  const faqData = [
    {
      title: "New Passport",
      disc: "Description for new passport.",
    },
    {
      title: "Visa Service",
      disc: "Description for visa service.",
    },
    {
      title: "National Service",
      disc: "Description for national service.",
    },
    {
      title: "Contact Us",
      disc: "Description for contact us.",
    },
    {
      title: "Feedback",
      disc: "Description for feedback.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <Container className="my-5 accordions" >
      <Accordion className="accordions">
        {faqData.map((faq, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header onClick={() => handleAccordionClick(index)}>
              {faq.title}
            </Accordion.Header>
            <Accordion.Body>
              {openAccordion === index && faq.disc}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}

export default Faqs;

















