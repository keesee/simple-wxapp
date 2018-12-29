import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Temp from './Temp' // This was renamed.  you might have tempurature.js (misspelled) they need to rename the file to Temp.js
import axios from 'axios'

import './App.css'; // REMOVE App.css -- we only need index.css (included in index.js)
// also clean up the rest of your files.  
// App.test, logo.svg, App.css are no longer needed.  they were generated by create-react-app

class App extends Component {


  // constructor is the first thing that runs when on object is built
  constructor(props) {
    super(props);

    // inititalize the state for this app/component
    // setup the shape and data types of the state
    this.state = {
      savedLocations: [], 
      currentLocation: '',
      currentLocationDataWx: {},
      wxData: {},
      fieldCity: '',
      loading: false,
    }

    this.handleFieldChangeCity = this.handleFieldChangeCity.bind(this)
    this.handleCitySubmit = this.handleCitySubmit.bind(this)
  }


  ///////////////////////////////////////////////////////////////////////////////////
  // Lifecycle //////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////



  // component will mount runs just 
  // before the component is going to be added to the dom.
  componentWillMount() {
    console.log("I'm will be born!")
    console.log(this.state) // should be our default initial state.  No data
  }

  // component did mount run once the node is mounted
  // animation?  
  componentDidMount() {
    console.log("I'm born!")
    this.getForcastData('london')
    // console.log(this.state)
  }

  // component will unmount run just before the node is deleted
  // cleanup. 
  componentWillUnmount() {
    console.log('I will die')
  }

  
  ///////////////////////////////////////////////////////////////////////////////////
  // Methods ////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

  getForcastData(city) {
    const url = 'http://api.openweathermap.org/data/2.5/forecast' 
    // console.log('getting data from',  url)
    // fetch(url)
    //   .then(res =>  res.json())
    //   .then(json => this.handleChangeCityData(json))
    //   .catch(err => console.log(err))
    const options = {
      q:city,
      APPID: '36c003ef23594c56c99f7ddaa57fb384',
      units: 'metric'
    }
    
    this.setState({ loading: true })

    axios.get(url, {
      params: options
    })
    .then( res => {
      const data = res.data
      const list = data.list
      const today = list[0]
      const todayWx = today.main
      const wxData = {
        city: data.city.name,
        ...todayWx
      }

      this.setState({
        currentLocationDataWx: data,
        currentLocation: data.city.name,
        wxData: wxData,
        loading: false,
        error: false,
      })
    })
    .catch(err => {
      this.setState({
        loading: false,
        error: true
      })
    })
  }


  handleChangeCity(newCity) {// 'chengdu'
    this.setState({ 
      currentLocation:newCity 
    })
    console.log('the city has been changed to ', newCity)
  }

  handleCurrentCityClear() {
    this.handleChangeCity('')
  }

  handleChangeCityData(cityData) {
    this.setState({ currentLocationDataWx: cityData })
    console.log('data has been updated', this.state)
  }

  handleFieldChangeCity(ev) {
    console.log(ev)
    this.setState({ fieldCity: ev.target.value });
  }

  handleCitySubmit() {
    console.log(this.state.fieldCity)
    this.getForcastData(this.state.fieldCity)
    this.setState({ fieldCity: '' })
  }


  renderLoader() {
    return <CircularProgress size={100} />
  }

  ///////////////////////////////////////////////////////////////////////////////////
  // Renderer ///////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////


  // the render method is required.  
  // It should return JSX. i.e. <div>sample code</div>
  render() {
    const wxData = this.state.wxData
    // the name on out Material Toolbar
    let nameOfCity = ''

    // Assign the Location if its set in state
    // otherwise it should be select Location
    if (this.state.currentLocation) {
      // if we already have a city, use it
      nameOfCity = this.state.currentLocation
    } else {
      // no city.  use 'Select Location' as the app title
      nameOfCity = 'Select Location'
    }

    // get temperature for high/low for the state 
    const tempHigh = this.state.currentLocationDataWx.tempHigh
    const tempLow = this.state.currentLocationDataWx.tempLow

    console.log(this.state)
    if (this.state.loading) { 
      const Loader = this.renderLoader
      return <Loader />
     }


    // Render the toolbar and Temp components
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              {wxData.city}
            </Typography>
          </Toolbar>
        </AppBar>
        { console.log(this.state) }
        {/* <Temp value={this.state.currentLocationDataWx.list[0].main.temp} unit='c' /> */}
        <Temp value={tempLow} unit='c' />
        <div>{wxData.city}</div>
        <div>{Math.round(wxData.temp_max)}</div>
        <div>{Math.round(wxData.temp_min)}</div>
        <div>{Math.round(wxData.temp)}</div>
        {/* <input
            id="city-field"
            onChange={this.handleFieldChangeCity}
            value={this.state.fieldCity}
          /> */}
        <div>
        <TextField
          id="city-field2"
          label="City"
          value={this.state.name}
          onChange={this.handleFieldChangeCity}
          margin="normal"
          variant="outlined"
        />
        </div>
        <div>
              <Button variant="contained" onClick={this.handleCitySubmit}>
                Get Weather
              </Button>
        </div>
          {/* <button onClick={this.handleCitySubmit}>Submit</button> */}
      </div>
    );
  }
}

export default App;