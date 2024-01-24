import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: '',
    inputValue: '',
    postResponse: '',
  };

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5000/api/hello');
      const data = await response.text();
      this.setState({ message: data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: this.state.inputValue }),
      });

      const data = await response.text();
      this.setState({ postResponse: data });
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Type something:
            <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
        
        <p>{this.state.postResponse}</p>
      </div>
    );
  }
}

export default App;
