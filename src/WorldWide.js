import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Example from './chart'
import MyData from './MyData'
import headImage from './images/medicine.svg'

function WorldWide() {
    return (
        <div className="worldWide mt-5 mb-5 pt-5 pb-5">
            <div className="container mt-5 mb-5 pb-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-4 mt-3"><span className="text-info">COVID-19</span> Worldwide results</h1>
                    </div>
                    <div className="col-md-6">
                        <img src={headImage} height="225" className="ml-5"></img>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5 pt-5 pb-5">
                <MyData />
            </div>
        </div>
    )
}

export default WorldWide;