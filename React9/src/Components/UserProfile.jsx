
import React from 'react';
import { useLocation } from 'react-router-dom';

const UserProfile = () => {
  const location = useLocation();
  const { state } = location;

  // Check if state exists before accessing properties
  if (!state) {
    return <div className='text-center'>No user data available. Please log in again.</div>;
  }

  return (
    <div className='text-center'>
      <p className="fs-1">{state.username}</p>
      <p className="fs-2">{state.email}</p>
      <p className="fs-3">{state.dob}</p>
    </div>
  );
}

export default UserProfile;
