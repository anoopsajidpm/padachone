import React, { useState, useEffect } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
// import 'typeface-roboto';
import Layout from '../Layout';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import lightBlue from '@material-ui/core/colors/lightBlue';
import Location from '../Location/Location'
import Setup from '../Setup/Setup';
import stepperData from '../Setup/setup-stepper-data.json';
import {getPDdata} from '../../utils';
import ErrorBoundary from '../Error/ErrorBoundary';
import CookieConsent from "react-cookie-consent";

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary : {
      main: '#fff',
    },
    text: {
      // primary: "#000000",
      // secondary: "#ffffff"
    } 
  },
  typography: {
    // color: '#fff'
  }
});
function App() {  
  const [state, setState] = useState({finished : false, 
    pdtodaysDate: getPDdata().split(' ').join(''), 
    place :localStorage.getItem('padachone:place') , 
    country : localStorage.getItem('padachone:country'), 
    region: localStorage.getItem('padachone:region')});
  const {finished, country, region, pdtodaysDate, prayerdata, place} = state;
  const handlefinished = (obj) => {
    const {country, region, finished, place} = obj;
    debugger;
    setState({...state, finished, country, region: region, place : place});
  }

  

  useEffect(() => {
    const padachon_lsfind = Object.keys(localStorage).filter(key => key.startsWith('padachone:') && key !== 'padachone:region' && key !== 'padachone:country' && key !== 'padachone:place');
    if (padachon_lsfind.length) {
      setState({...state, finished : true})
    }
  }, [])
  return (
    
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <ErrorBoundary>
          <CookieConsent location="bottom" style={{ background: "#29b6f6",marginBottom:'30px' }} buttonStyle={{borderRadius: '10px'}}>
            This website uses cookies to enhance the user experience.
        </CookieConsent>
          {!finished && <Setup setupdata={stepperData} finished={(locationstate) => handlefinished(locationstate)} country={country} region={region} place={place}/>}
          {finished && <Layout country={country} region={region} pdate={pdtodaysDate} place={place} startup={(resetstate) => handlefinished(resetstate)}/>}
        </ErrorBoundary> 
      </div>
    </ThemeProvider>
    
  );
}

export default App;