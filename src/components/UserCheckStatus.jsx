import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const UserCheckStatus = () => {
  return (
    <Container fluid className="d-flex flex-column font-lato items-center justify-end mx-auto mt-2 w-full" style={{backgroundColor:"#F8F9FA"}}>
      <Row className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Col className="flex flex-1 flex-col md:gap-10 gap-[61px] justify-start md:px-5 w-full">
          <Row className="flex flex-col md:gap-10 gap-[61px] items-center justify-start w-full">
            <Col sm={6}>
              <Card className="bg-white-A700 rounded-[10px] shadow-bs3 mx-auto" style={{ width: "500px", height: "100px" }}>
              <Card.Header className="bg-light_blue-900 text-white-A100 p-[22px]">
                  <Card.Title className="text-sm md:text-base"> 
                    Application Status
                  </Card.Title>
                </Card.Header>
                <Card.Body className="px-[33px]">
                  <Card.Text className="mt-3 mb-5 pb-2 font-bold fs-5">
                      <>
            
                    Applicant Name:
                    <span className="font-bold">
                    &nbsp;  Adugna Chombe
                    </span>
                    </>
                  </Card.Text>
                  <Card.Text className="mt-4 font-bold ms-5" >
                      <>
                      <span className="text-muted">
                       Service type:
                      </span>
                    <span className="font-bold">
                    &nbsp;  Passport Service
                    </span>   
                    </>
                  </Card.Text>
                  <Card.Text className="mt-4 font-bold ms-5">
                      <>
                       <span className="text-muted">
                    Request type:
                       </span>
                    <span className="font-bold">
                    &nbsp;  Expired Passport Renewal
                    </span>      
                    </>
                  </Card.Text>
                  <Card.Text className="mt-4 font-bold ms-5">
                      <>
                    <span className="text-muted">
                            Request Mode:
                    </span>
                    <span className="font-bold">
                    &nbsp;  Normal
                    </span>  
                    </>
                  </Card.Text>
                  <Card.Text className="mt-4 font-bold ms-5">
                      <>
                    <span className="text-muted">
                            Delivery Date:
                    </span>
                    <span className="font-bold">
                    &nbsp;  23-december-2023
                    </span>
                    </>
                  </Card.Text>
                  <Card.Text className="mt-4 font-bold ms-5">
                      <>
                    <span className="text-muted">
                            Application Status:
                    </span>
                    <span className="font-bold">
                    &nbsp;  Payment Completed
                    </span>
                     </>
                  </Card.Text>
                  <Card.Text className="mt-4 font-bold ms-5 mb-5 ">
                      <>
                    <span className="text-muted">
                            Application Number:
                    </span>
                    <span className="font-bold">
                    &nbsp;  at53dcc8764satna23
                    </span>
                    </>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCheckStatus;