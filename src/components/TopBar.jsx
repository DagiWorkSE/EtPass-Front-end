import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import pf from '../assets/pf.jpg';
import logo from '../assets/Logo.png';
import { FaBell, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Transport from '../api/transport';

function TopBar() {
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await Transport.HTTP.getNotifications();
        console.log('API Response:', response);
        setNotification(response.data.data); // Update the state with fetched notifications
      } catch (error) {
        setError('Error fetching notifications: ' + error.message);
      }
    };

    fetchNotifications();
  }, []);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <Navbar className="bg-body-tertiary" id="top-bars">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" className="logotop" />
        </Navbar.Brand>
        <Nav className="ms-auto align-items-start">
          <div className="d-flex flex-column">
            <FaBell className="mt-2 bell" onClick={handleOpenModal} />
          </div>
          <img src={pf} alt="" className="profile-picture" />
          <NavDropdown title={sessionStorage.getItem("First Name")} id="basic-nav-dropdown" align="end">
            <div className="top">
              <NavDropdown.Item href="#action/3.1">
                <b>
                  {sessionStorage.getItem("First Name")}<span>(Admin)</span>
                </b>
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <FaSignOutAlt /> Logout
              </NavDropdown.Item>
            </div>
          </NavDropdown>
        </Nav>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error ? (
            <p>{error}</p>
          ) : notification.length > 0 ? (
            notification.map((notificationItem) => (
              <p key={notificationItem.id}>{notificationItem.message}</p> 
            ))
          ) : (
            <p>No notifications available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default TopBar;