import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import DatePickerComponent from "../DatePicker/DatePickerComponent";
import './ReservationComponent.css';

const options = [
  'Garden Office - Louise Lopez Avenue',
  'BM Office - Faria Lima Avenue'
];

const ReservationComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isReserved, setIsReserved] = useState(false);

  const handleReservation = async () => {
    setIsLoading(true); 

    setTimeout(() => {
      setIsLoading(false); 
      setIsReserved(true); 
    }, 3000); 
  };

  return (
    <div className="space">
      <h6>Going to the office? Make your seat reservation!</h6>
      <div className="calendar">
        <DatePickerComponent />
      </div>
      <div className="select-office">
        <select className="form-control" id="FormControlSelect1" defaultValue="default">
          <option value="default" disabled>Select an office</option>
          {options.map((office, index) => {
            return (
              <option key={index} value={office}>{office}</option>
            );
          })}
        </select>
      </div>
      <div className="text-end btn-content-reserve">
        <Button
          type="button"
          className="btn-send-reserve"
          onClick={handleReservation}
          disabled={isLoading || isReserved} 
        >
          {isLoading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : isReserved ? 'Done!' : 'Reserve seat'}
        </Button>
      </div>
    </div>
  );
}

export default ReservationComponent;
