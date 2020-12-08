import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://api.spacexdata.com/v3/launches')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });

  }

  render() {

    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {

      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.flight_number}>
                Flight ID: {item.flight_number}
                Mission Name: {item.mission_name}
                Launch Year: {item.launch_year}
              </li>
            ))}
          </ul>
        </div>
      );

    }

    }

}

export default App;
