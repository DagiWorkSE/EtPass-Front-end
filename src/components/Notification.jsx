import React, { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Transport from '../api/transport';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await Transport.HTTP.getNotifications();
        console.log('API Response:', response);
        setNotifications(response.data.data); // Update the state with fetched notifications
      } catch (error) {
        setError('Error fetching notifications: ' + error.message);
      }
    };

    fetchNotifications();
  }, []);
 const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
  };
  return (
    <div>
      <h1 className='text-center'>Notification Page</h1>
      <div className='notification-cards'>
        <ListGroup>
          {error ? (
            <ListGroup.Item>Error: {error}</ListGroup.Item>
          ) : (
            notifications.map((notification) => (
              <ListGroup.Item key={notification.id}>
                <Card className='ml-7'>
                  <Card.Body>
                    <Card.Title>{notification.message}</Card.Title>
                    <Card.Text>{notification.message}</Card.Text>
                    <Card.Text>
                   Sent at: {formatDateTime(notification.createdAt)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </div>
    </div>
  );
};

export default Notification;