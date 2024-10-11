import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerComponent.css'; 

const DatePickerComponent = () => {
    const today = new Date(); 
    const [selectedDate, setSelectedDate] = useState(today);

    const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());
  
    return (
      <div className="date-picker-container">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a date"
          inline
          className="custom-date-picker"
          minDate={today} 
          maxDate={maxDate} 
        />
      </div>
    );
};

export default DatePickerComponent;
