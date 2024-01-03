import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../styles/checkstatus.css';
import Transport from "../api/transport";
import ActiveApplicationTable from "./ActiveApplicationTable";

const ActiveApplications = () => {
  const [viewPassport, setViewPassport] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPassport = async () => {
      try {
        const response = await Transport.HTTP.viewPassportApplication();
        console.log('API Response:', response);
        setViewPassport(response.data.data);
      } catch (error) {
        setError('Error fetching Status: ' + error.message);
      }
    };

    fetchPassport();
  }, []);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : viewPassport.length > 0 ? (
        viewPassport.map((viewPassportItem) => (
          <div key={viewPassportItem.id} className="container row active-application">
            <div>     
              <h5 className="my-3 mx-3 col float-start">Full Name: <span className="app-answer">{viewPassportItem.firstName}</span> </h5>
              <h5 className="my-3 mx-3 col float-end">Service Type: <span className="app-answer">Passport</span> </h5>
            </div>
            <hr/>
            <div className="row">     
              <h5 className="my-3 mx-3 col">Phone: <span className="app-answers"> {viewPassportItem.phone}</span> </h5>
              <h5 className="my-3 mx-3 col">Date Of Birth: <span className="app-answers">{viewPassportItem.dateOfBirth}</span> </h5>
              <h5 className="my-3 mx-3 col">Place Of Birth: <span className="app-answers">{viewPassportItem.placeOfBirth}</span> </h5>
            </div>
            <div className="row">     
              <h5 className="my-3 mx-3 col">Nationality: <span className="app-answers">{viewPassportItem.nationality}</span> </h5>
              <h5 className="my-3 mx-3 col">Gender: <span className="app-answers">{viewPassportItem.gender}</span> </h5>
              <h5 className="my-3 mx-3 col">Martial Status: <span className="app-answers">{viewPassportItem.martial_status}    </span> </h5>
            </div>
            <div className="row">     
              <h5 className="my-3 mx-3 col">Passport Page Number: <span className="app-answers">{viewPassportItem.passport_page_number}</span> </h5>
              <h5 className="my-3 mx-3 col">Old Passport Number: <span className="app-answers">{viewPassportItem.old_passport_number}</span> </h5>
              <h5 className="my-3 mx-3 col">Old Passport Issue Date: <span className="app-answers">{viewPassportItem.old_passport_issue_date}</span> </h5>
            </div>
            <div className="text-center">   
            <Link to={`/application-details/${viewPassportItem.id}`}>
              <Button variant="outline-success" className="my-4 mx-auto  px-5">
                View Details
              </Button>
            </Link>
            {(viewPassportItem.status == "Phase 1")?

            
            <>
            {/* <Link to={`/ServiceCards`} className="mx-2"> */}
           
              <Button variant="outline-primary" onClick={()=>{
                 navigate(`/ServiceCards`, {
                  state: {
                    viewPassportItem
                  },
                });

              }} className="my-4 mx-3 px-5">
                Continue Application
              </Button>
            {/* </Link>    */}
            </>:<></>}
            </div>
            
          </div>
        ))
      ) : (
        <p>No application available.</p>
      )}
    </>
  );
};

export default ActiveApplications;
