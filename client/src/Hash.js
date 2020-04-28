import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Hash extends Component {
  state = {
    values: {},
    index: ''
  };

  componentDidMount() {
    this.fetchValues();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  handleSubmit = async event => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index
    });
    this.setState({ index: '' });
  };

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          url: {key} &nbsp; &nbsp; &nbsp; &nbsp; SHA256: {this.state.values[key]}
        </div>
      );
    }

    return entries;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="App-form">
          <label>Enter your url:</label>
          <input
            value={this.state.index}
            onChange={event => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>

        <h3 className="App-hashurl">Hashed URLs:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Hash;
