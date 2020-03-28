import React from 'react';
import handshake from './images/handshaking.png'
import greet from './images/safe-greetings.png'
import gloves from './images/wearing-gloves.png'
import blue1 from './images/blue-1.png'
import blue2 from './images/blue-2.png'
import blue3 from './images/blue-3.png'
import blue4 from './images/blue-4.png'
import stress from './images/stress.jpg'
import childstress from './images/children-stress.jpg'
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'
import four from './images/4.png'


function PublicAdvice() {
    return(
        <div className="publicAdvice">
            <div className="container mt-5 mb-5 pt-5 pb-5">
                <h1 className="text-center display-4 mb-5">Ask WHO</h1>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <img src={handshake} height="185"/>
                    </div>

                    <div className="col-md-4">
                        <img src={greet} height="185" />
                    </div>

                    <div className="col-md-4">
                        <img src={gloves} height="185" />
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5 pt-5 pb-5">
                <h1 className="text-center display-4 mb-5">Protect yourself and others from getting sick</h1>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <img src={blue1} height="275"/>
                    </div>

                    <div className="col-md-3">
                        <img src={blue2} height="275" />
                    </div>

                    <div className="col-md-3">
                        <img src={blue3} height="275" />
                    </div>

                    <div className="col-md-3">
                        <img src={blue4} height="275" />
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5 pt-5 pb-5">
                <h1 className="text-center display-4 mb-5">How to cope with stress during 2020-nCoV</h1>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img src={stress}/>
                    </div>

                    <div className="col-md-6">
                        <img src={childstress} />
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5 pt-5 pb-5">
                <h1 className="text-center display-4 mb-5">Stay healthy while travelling</h1>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <img src={one} height="275"/>
                    </div>

                    <div className="col-md-3">
                        <img src={two} height="275" />
                    </div>

                    <div className="col-md-3">
                        <img src={three} height="275" />
                    </div>

                    <div className="col-md-3">
                        <img src={four} height="275" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicAdvice;