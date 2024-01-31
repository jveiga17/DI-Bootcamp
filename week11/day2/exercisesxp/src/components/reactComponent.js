import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from './userActions';
import UserData from './userData';

const reactComponent = () => {
    const dispatch = useDispatch();

    const fetchData = () => {
      dispatch(fetchUserData());
    };
  
    return (
      <div>
        <button onClick={fetchData}>Fetch User Data</button>
        <UserData />
      </div>
    );
  };

export default reactComponent;
