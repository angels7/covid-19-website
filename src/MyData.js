import React, { Component } from 'react';
import Example from './chart'

const API = 'https://covid19.mathdro.id/api';

class MyData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmed: 0,
      recovered: 0,
      deaths: 0
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({
        confirmed: data.confirmed.value,
        deaths: data.deaths.value,
        recovered: data.recovered.value }));
  }

  render() {
    const data = [
      {
        name: 'Confirmed',
        number: this.state.confirmed
      },
      { name: 'Recovered', number: this.state.recovered },
      { name: 'Deaths', number: this.state.deaths }
    ];
      return(
          <Example data={data} />
        )
      }
    }

export default MyData;