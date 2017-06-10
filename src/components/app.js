import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'react-proptypes';
import { Grid, Cell } from 'react-mdc-web/lib';

import locationAction from '../actions/locationActions';
import forecastAction from '../actions/forecastActions';

import SearchInput from './searchInput';
import CurrentForecast from './currentForecast';
import ForecastList from './forecastList';

class App extends React.Component {
  state = {
    locationName: '',
    forecast: [],
  }

  componentDidMount() {
    this.props.getCurrentLocation();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.latitude !== nextProps.latitude &&
      this.props.longitude !== nextProps.longitude
    ) {
      const param = {
        latitude: nextProps.latitude,
        longitude: nextProps.longitude,
      };
      this.props.getForecast(param);
    }

    if (this.state.locationName !== nextProps.forecast.city.name) {
      this.setState((state) => {
        const obj = { ...state };
        console.log(nextProps);
        obj.locationName = `${nextProps.forecast.city.name}, ${nextProps.forecast.city.country}`;
        obj.forecast = this.filterForecastData(nextProps.forecast.list);
        obj.forecast = obj.forecast.filter(item => item !== undefined);
        return obj;
      });
    }
  }

  handleLocationNameChange = (name) => {
    this.props.getForecast(name);
    this.setState((state) => {
      const obj = { ...state };
      obj.locationName = name;
      return obj;
    });
  }

  filterForecastData = data => (
    data.map((item, index) => {
      if (index === 5 || index === 12 || index === 20 || index === 28 || index === 36) {
        const obj = {
          icon: item.weather[0].icon,
          description: item.weather[0].description,
          temp: item.main.temp,
          temp_min: item.main.temp_min,
          temp_max: item.main.temp_max,
          wind_speed: item.wind.speed,
          wind_deg: item.wind.deg,
          date: item.dt_txt,
        };
        return obj;
      }
    })
  )

  render() {
    return (
      <Grid>

        <Cell
          col={4}
          tablet={1}
          phone={0}
        />
        <Cell
          col={4}
          tablet={6}
          phone={4}
        >
          <SearchInput
            onSubmit={this.handleLocationNameChange}
            value={this.state.locationName}
          />
          <CurrentForecast
            forecast={this.state.forecast[0]}
          />
          <ForecastList
            forecast={this.state.forecast.splice(1, 4)}
          />
          
        </Cell>
        <Cell
          col={4}
          tablet={1}
          phone={0}
        />

      </Grid>
    );
  }
}

App.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  locationStatus: PropTypes.string.isRequired,
  getCurrentLocation: PropTypes.func.isRequired,

  forecast: PropTypes.object.isRequired,
  forecastStatus: PropTypes.string.isRequired,
  getForecast: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  latitude: store.location.get('latitude'),
  longitude: store.location.get('longitude'),
  locationStatus: store.location.get('status'),

  forecast: store.forecast.get('forecast').toJS(),
  forecastStatus: store.forecast.get('status'),
});

const mapDispatchToProps = dispatch => ({
  getCurrentLocation: () =>
    dispatch(locationAction.getCurrentLocation()),
  getForecast: param =>
    dispatch(forecastAction.getForecast(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
