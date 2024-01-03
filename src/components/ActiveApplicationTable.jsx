import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../styles/checkstatus.css';
import { FaEye } from "react-icons/fa";
import Transport from "../api/transport";

const ActiveApplicationTable = () => {
  const [viewPassport, setViewPassport] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPassport = async () => {
      try {
        const response = await Transport.HTTP.viewPassportApplication();
        console.log('API Response:', response);
        setViewPassport(response.data.data);
      } catch (error) {
        setError('Error fetching notifications: ' + error.message);
      }
    };

    fetchPassport();
  }, []);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : viewPassport.length > 0 ? (
        <Table responsive bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Service Type</th>
              <th>Applied Date</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {viewPassport.map((viewPassportItem, index) => (
              <tr key={viewPassportItem.id}>
                <td>{index + 1}</td>
                <td>{viewPassportItem.first_name}</td>
                <td>{viewPassportItem.last_name}</td>
                <td>Passport</td>
                <td>{viewPassportItem.createdAt}</td>
                <td>{viewPassportItem.phone}</td>
                <td>
                  <Link to={`/application-details/${viewPassportItem.id}`}>
                    <Button variant="outline-success" className="mx-auto d-block">
                      <FaEye/> Details
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No Data available.</p>
      )}
    </>
  );
};

export default ActiveApplicationTable;
