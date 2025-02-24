import React from 'react';
import LeaveRequest from './LeaveRequest';

const Dashboard = ({ token }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <LeaveRequest token={token} />
    </div>
  );
};

export default Dashboard;