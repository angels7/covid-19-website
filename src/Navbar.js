import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SearchCountry from './SearchCountry'
import WorldWide from './WorldWide'
import App from './App'
import PublicAdvice from './PublicAdvice'

function Navbar() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-secondary bg-info p-3">
                <div className="container">
                <a className="navbar-brand text-white display-4 font-weight-bold">COVID-19</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="float-right">
                <div className="collapse navbar-collapse text-center ml-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mr-2 ml-2">
                        <Link to={'/WorldWide'} className="nav-link text-white">WorldWide</Link>
                        </li>
                        <li className="nav-item mr-2 ml-2">
                            <Link to={'/SearchCountry'} className="nav-link text-white">By country</Link>
                        </li>
                        <li className="nav-item mr-2 ml-2">
                        <Link to={'/PublicAdvice'} className="nav-link text-white">Advice for public</Link>
                        </li>
                    </ul>
                </div>
                </div>
                </div>
            </nav>
            <Switch>
                <Route path='/WorldWide' component={WorldWide} />
                <Route path='/SearchCountry' component={SearchCountry} />
                <Route path='/PublicAdvice' component={PublicAdvice} />
            </Switch>
        </Router>
    )
}

export default Navbar;