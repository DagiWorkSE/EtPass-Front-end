import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const DateSelector = ({ label, name, onPageUpdate }) => {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(new Date(today.getFullYear(), 11, 25));
  const [years, setYears] = useState([]);

  useEffect(() => {
    setYears(generateYears(100));
  }, []);

  const generateYears = (numYears) => {
    const currentYear = today.getFullYear();
    const yearArray = [];
    for (let i = numYears; i > -10; i--) {
      yearArray.push(currentYear - i);
    }
    return yearArray;
  };

  const setDays = (monthIndex) => {
    const daysCount = daysInMonth[monthIndex];
    const options = [];
    for (let i = 1; i <= daysCount; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  const handleDateChange = () => {
    const day = parseInt(document.getElementById('select-day').value, 10);
    const month = parseInt(document.getElementById('select-month').value, 10);
    const year = parseInt(document.getElementById('select-year').value, 10);
    const newDate = new Date(year, month, day);
    const newDateSend = year+"-"+month+"-"+day;
    setSelectedDate(newDate);
    onPageUpdate(name, newDateSend);
  };

  return (
    <div className="form-group row my-2">
      <label htmlFor="select-day" className="col-form-label">{label}</label>
      <div className="col-sm-3 pe-0" style={{width: 'unset'}}>
        <select className="form-control" style={{width: 'unset'}} id="select-day" onChange={handleDateChange} value={selectedDate.getDate()}>
          {setDays(selectedDate.getMonth())}
        </select>
      </div>

      {/* <label htmlFor="select-month" className="col-sm-3 col-form-label">Month</label> */}
      <div className="col-sm-4 px-0" style={{width: 'unset'}}>
        <select className="form-control" style={{width: 'unset'}} id="select-month" onChange={handleDateChange} value={selectedDate.getMonth()}>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i}>{new Date(2000, i, 1).toLocaleString('en-US', { month: 'short' })}</option>
          ))}
        </select>
      </div>

      {/* <label htmlFor="select-year" className="col-sm-3 col-form-label">Year</label> */}
      <div className="col-sm-6 px-0" style={{width: 'unset'}}>
        <select className="form-control" style={{width: 'unset'}} id="select-year" onChange={handleDateChange} value={selectedDate.getFullYear()}>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DateSelector;
