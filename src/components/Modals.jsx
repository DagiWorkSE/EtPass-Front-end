import { useState } from 'react';
import {Button,Modal} from 'react-bootstrap';
import "../styles/homePageStyles.css";
import { Link } from 'react-router-dom';

const Modals = ({title,content,showmodal}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Link onClick={handleShow} >{title}</Link>
      
      <Modal show={show} onHide={handleClose} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        
        <Modal.Body className='align-center modal-sm'>{content}</Modal.Body>
      
      </Modal>
    </>
  );
};
export default Modals;
