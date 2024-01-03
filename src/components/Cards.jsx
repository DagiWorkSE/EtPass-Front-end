import React from "react";

import "../styles/homePageStyles.css";
// import "../styles/style.css";
import {Card} from 'react-bootstrap';

const Cards = ({img1,img2,title,detail}) => {
  return (
    
      <Card className="carde">
        <Card.Img className="imgbx" variant="top" src={img1} alt="logo" />
        <Card.Img className="imgbx imgbx1" variant="top" src={img2} alt="logo" />
        <Card.Body className="card-content">
          <Card.Title className=" card-detail card-title">{title}</Card.Title>
          <Card.Text className="card-detail">
            {detail}
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

export default Cards;

