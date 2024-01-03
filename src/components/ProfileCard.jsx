import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import pf from '../assets/pf.jpg';

const ProfileCard = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center p-3 h-100">
      <div className="bg-light d-flex flex-column font-lato align-items-center justify-content-start ml-4">
        <div className="border border-3 border-primary bg-white d-flex flex-column gap-4 justify-content-end w-100 h-100 rounded-md">
          <h2 className="text-2xl text-dark text-center pt-4">User Profile</h2>
          <div className="bg-white border border-dark-19 border-solid border-t-2 d-flex flex-column align-items-center justify-content-start px-4 py-6">
            <Row className="w-100">
              <Col md={6}>
                <ProfileInfo label="First Name" value="Kaleab" />
                <ProfileInfo label="Last Name" value="Endashaw" />
                <ProfileInfo label="Email" value="E.kaleab@mail.com" />
                <ProfileInfo label="Birthday" value="12-Dec-1990" />
                <Button
                  className="border-2 btn btn-success"
                >
                  Change password
                </Button>
                <Button
                  className=" btn btn-info mt-2"
                >
                  Edit Profile
                </Button>
              </Col>
              <Col md={6} className="border-gray-300_01 border-l-2 border-solid">
                <h5 className="text-dark text-xl">Profile Image</h5>
                <div className="d-flex flex-column gap-4 align-items-center justify-content-start mb-4">
                  <div className="d-flex flex-column align-items-center justify-content-start pt-2 px-2 rounded-md">
                    {/* <img src={pf} alt="" className="w-[300px] h-[400px] mt-2" /> */}
                  </div>
                  <Button
                    className="text-dark cursor-pointer font-medium min-w-[200px] rounded-md text-center text-xl"
                    variant="btn btn-outline-primary"
                  >
                    Upload New
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

const ProfileInfo = ({ label, value }) => (
  <div className="d-flex flex-row gap-4 align-items-center justify-content-start mt-4">
    <h6 className="text-dark text-xl w-32">{label}</h6>
    <p className="text-dark text-xl">{value}</p>
  </div>
);

export default ProfileCard;
