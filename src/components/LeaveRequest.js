import React, { useState } from 'react';
import axios from 'axios';

const LeaveRequest = ({ token }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/leave-requests`,
        {
          startDate,
          endDate,
          reason,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert('Leave request submitted successfully');
    } catch (error) {
      console.error('Error submitting leave request', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Leave Request</h2>
      <div>
        <label>Start Date</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div>
        <label>End Date</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <div>
        <label>Reason</label>
        <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LeaveRequest;