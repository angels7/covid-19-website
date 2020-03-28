import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import WorldWide from './WorldWide';
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="container mt-5 mb-5 pt-5 pb-5">
          <div className="overview">
            <h5 className="text-center display-4 mb-2">Overview</h5>
            <p className="text-muted">
            Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.

            Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.

            The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. 

            The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).

            At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.
            </p>
          </div>

          <div className="prevention mt-5 mb-5 pt-5 pb-5">
            <h5 className="text-center display-4 mb-2">Prevention</h5>
            <p className="text-muted">
            To prevent infection and to slow transmission of COVID-19, do the following:
            <br /><br />
              <ul>
                <li>Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.</li>
                <li>Maintain at least 1 metre distance between you and people coughing or sneezing.</li>
                <li>Avoid touching your face.</li>
                <li>Cover your mouth and nose when coughing or sneezing.</li>
                <li>Stay home if you feel unwell.</li>
                <li>Refrain from smoking and other activities that weaken the lungs.</li>
                <li>Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.</li>
              </ul>
            </p>
          </div>

          <div className="symptoms mt-5 mb-5">
            <h5 className="text-center display-4 mb-2">Symptoms</h5>
            <p className="text-muted">
            The COVID-19 virus affects different people in different ways.  COVID-19 is a respiratory disease and most infected people will develop mild to moderate symptoms and recover without requiring special treatment.  People who have underlying medical conditions and those over 60 years old have a higher risk of developing severe disease and death.
            <br /><br />
            Common symptoms include:
            <br /><br />
            <ul>
              <li>fever</li>
              <li>tiredness</li>
              <li>dry cough.</li>
            </ul>
            Other symptoms include:
            <br /><br />
            <ul>
              <li>shortness of breath</li>
              <li>aches and pains</li>
              <li>sore throat</li>
              <li>and very few people will report diarrhoea, nausea or a runny nose.</li>
            </ul>
            People with mild symptoms who are otherwise healthy should self-isolate and contact their medical provider or a COVID-19 information line for advice on testing and referral.
            <br /><br />
            People with fever, cough or difficulty breathing should call their doctor and seek medical attention.
            </p>
          </div>


        </div>
      <Footer />
    </div>
  );
}

export default App;
