import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './ProfileComponent.css';
import UserService from '../../Services/UserService';
import { useSelector } from 'react-redux';

function ProfileComponent() {
  const [userData, setUserData] = useState();
  const user = useSelector((state) => state.user.user);
  
  const userId = user?.id;

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await UserService.getUser(userId);
      setUserData(data.user);
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
          <Card.Title>{userData?.name}</Card.Title>
          <Card.Text>
          {userData?.role}
          </Card.Text>
          <div className="d-flex justify-content-between recognition-content">
            <div className="d-flex align-items-center">
            <img 
                variant="top" 
                src={require("../../assets/shape/award-48.png")}
                alt="gratification" 
                className="gratification-img"
            />
              <h6 className="recognition-counter">{userData?.postsReceived} received</h6>
            </div>
            <div className="d-flex align-items-center">
              <img 
                    variant="top" 
                    src={require("../../assets/shape/award-sent.png")}
                    alt="gratification" 
                    className="gratification-img"
                />
              <h6 className="recognition-counter">{userData?.postsCreated} sent</h6>
              <span>
            </span>
            </div>
          </div>
        </Card.Body>
      </Card>
      <div>
       <hr className="divider"/>
      </div>
    </div>
    
  );
}

export default ProfileComponent;
