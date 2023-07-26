
import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { FamilyRelocation } from './components/FamilyRelocation/FamilyRelocation';
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Contact } from './components/Main/Contact/Contact';
import { Partners } from './components/Main/Partners/Partners';
import { QuestionCarousel } from './components/Main/Questions/QuestionCarousel.js/QuestionCarousel';
import { BusinessRelocation } from './components/BusinessRelocation/BusinessRelocation';
import { InvestmentsRelocation } from './components/InvestmentsRelocation/InvestmentsRelocation';
import CookieConsent from "react-cookie-consent";
import { Migration } from './components/Migration/Migration';

function App() {
  let { state: stateLocation } = useLocation();

  const [weather, setWeather] = useState({});


  useEffect(() => {

    fetch('https://api.open-meteo.com/v1/forecast?latitude=35&longitude=33&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode&daily=weathercode&current_weather=true&timezone=GMT')
      .then((response) => response.json())
      .then((weather) => {
        const weatherData = {
          location: 'Nicosia, Cyprus',
          data: weather.current_weather.time,
          temperature: weather.current_weather.temperature,
          unitTemp: weather.hourly_units.temperature_2m,
          windspeed: weather.current_weather.windspeed,
          unitWind: weather.hourly_units.windspeed_10m,
          hourly: weather.hourly.precipitation_probability[1],
          precipitation: weather.hourly_units.precipitation_probability,
        }
        setWeather(weatherData)
      })
  }, [])


  return (
    <div className={styles.container}>

      <Header />
      <Routes>
        <Route path='/' element={<Main weather={weather} />} />
        <Route path='/investments' element={<InvestmentsRelocation />} />
        <Route path='/business' element={<BusinessRelocation />} />
        <Route path='/family' element={<FamilyRelocation />} />
        <Route path='/migration' element={<Migration />} />

      </Routes>
      {!stateLocation &&
        <>
          <Contact />
          <Partners />
          <QuestionCarousel />
        </>}
      <Footer />
      <CookieConsent className={styles.banner} debug={true}
        style={{ background: 'white' }}
        contentStyle={{ color: 'black' }}
        buttonStyle={{ color: '#434364', background: 'linear-gradient(90.49deg, #FFEB80 0%, #FDBFA3 100.2%)', borderRadius: '20px' }}
      >This website uses cookies to enhance the user experience.</CookieConsent>
    </div>
  );
}

export default App;



