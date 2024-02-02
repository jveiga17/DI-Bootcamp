import React from 'react';
import { connect } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../actions/ageActions';

const AgeCounter = ({ age, loading, ageUpAsync, ageDownAsync }) => {
  return (
    <div>
      <h2>Age: {age}</h2>
      {loading && <img src="logo.svg" alt="loading" />} {/* Adjust the path based on your project structure */}
      <button onClick={() => ageUpAsync()}>Age Up Async</button>
      <button onClick={() => ageDownAsync()}>Age Down Async</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    age: state.age.age,
    loading: state.age.loading,
  };
};

export default connect(mapStateToProps, { ageUpAsync, ageDownAsync })(AgeCounter);
