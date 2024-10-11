import DatePickerComponent from "../DatePicker/DatePickerComponent";
import './ReservationComponent.css';

const options = [
    'Garden Office - Louise Lopez Avenue',
    'BM Office - Faria Lima Avenue'
];

const ReservationComponent = () => {
    return (
        <div className='space'>
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
        </div>
    );
}

export default ReservationComponent;
