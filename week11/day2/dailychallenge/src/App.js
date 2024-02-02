import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AgeCounter from './components/AgeCounter';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Age Counter App</h1>
        <AgeCounter />
      </div>
    </Provider>
  );
};

export default App;
