import React from 'react'
import ReactDOM from 'react-dom';
import CountryData from './CountryData'

const API = 'https://covid19.mathdro.id/api/countries/';

class SearchCountry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmed: 0,
      recovered: 0,
      deaths: 0,
      country: ""
    };

    this.fetchData = this.fetchData.bind(this);
  }
  fetchData() {
    fetch(API + this.state.country)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          return console.log("not found, show error");
        } else {
          this.setState({
            confirmed: data.confirmed.value,
            deaths: data.deaths.value,
            recovered: data.recovered.value
          });
        }
      });
  }

    render() {
      return (
        <div className="searchCountry mt-5 mb-5 pt-5 pb-5">
          <div className="container mt-5 mb-5 pb-5">
            <div className="row">
              <div className="col-md-11">
                <input
                  className="form-control form-control-lg bg-dark text-white btn-dark"
                  type="text"
                  value={this.state.country}
                  onChange={e => this.setState({ country: e.target.value })}
                  placeholder="Search by country"
                />
              </div>
              <div className="col-md-1">
                <button className="btn btn-dark btn-lg" onClick={this.fetchData}>Search</button>
              </div>
            </div>
          </div>

          <div className="container mt-5 mb-5 pt-5 pb-5">
            <CountryData 
                confirmed={this.state.confirmed}
                deaths={this.state.recovered}
                recovered={this.state.recovered}
            />
          </div>
        </div>
      );
    }
  }

export default SearchCountry;