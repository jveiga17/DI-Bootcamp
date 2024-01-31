import React from 'react';
import { useSelector } from 'react-redux';

const UserData = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>User Data</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserData;
