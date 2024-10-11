import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa'; 
import './ProfileComponent.css';

function ProfileComponent() {
  const receivedCount = 10; 
  const sentCount = 5;

  return (
    <div className="d-flex justify-content-start">
      <Card className="text-center profile-content">
        <div className="d-flex justify-content-center">
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/150"
            alt="Profile image"
            className="img"
          />
        </div>
        <Card.Body>
          <Card.Title>Jordana Zanfonni</Card.Title>
          <Card.Text>
            Mid-level Software Engineer
          </Card.Text>
          <div className="d-flex justify-content-between recognition-content">
            <div className="d-flex align-items-center">
              <span>{receivedCount} Received</span>
              <FaStar className="me-1 star" /> 
            </div>
            <div className="d-flex align-items-center">
              <span>{sentCount} Sent</span>
              <span>
              <img 
                  variant="top" 
                  src={require("../../assets/shape/gratification.png")}
                  alt="gratification" 
                  className="gratification-img"
              />
            </span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProfileComponent;
