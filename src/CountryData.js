import React, { Component } from 'react';
import CountryChart from './CountryChart'
import Example from './CountryChart';
let countryInput = document.getElementById('searchCountryInput');

const API = 'https://covid19.mathdro.id/api/countries/';

class CountryData extends React.Component {
  render() {
    const data = [
      {
        name: "Confirmed",

        number: this.props.confirmed
      },

      { name: "Recovered", number: this.props.recovered },

      { name: "Deaths", number: this.props.deaths }
    ];

    return <CountryChart data={data} />;
  }
}
      
export default CountryData;