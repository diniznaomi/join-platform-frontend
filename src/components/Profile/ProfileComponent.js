import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './ProfileComponent.css';
import UserService from '../../Services/UserService';

function ProfileComponent() {
  const [userData, setUserData] = useState({name: 'Naomi Moura', role: 'Product Manager'});
  const receivedCount = 10; 
  const sentCount = 5;
  const userId = 5;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await UserService.getUser(userId);
        setUserData(data.user);
      } catch (error) {
        throw new Error('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
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
          <Card.Title>{userData.name}</Card.Title>
          <Card.Text>
          {userData.role}
          </Card.Text>
          <div className="d-flex justify-content-between recognition-content">
            <div className="d-flex align-items-center">
            <img 
                variant="top" 
                src={require("../../assets/shape/award-48.png")}
                alt="gratification" 
                className="gratification-img"
            />
              <h6 className="recognition-counter">{receivedCount} received</h6>
            </div>
            <div className="d-flex align-items-center">
              <img 
                    variant="top" 
                    src={require("../../assets/shape/award-sent.png")}
                    alt="gratification" 
                    className="gratification-img"
                />
              <h6 className="recognition-counter">{sentCount} sent</h6>
              <span>
            </span>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div>
       <hr class="divider"/>
      </div>
    </div>
    
  );
}

export default ProfileComponent;
