import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'react-proptypes';
import { Grid, Cell } from 'react-mdc-web/lib';

import locationAction from '../actions/locationActions';
import forecastAction from '../actions/forecastActions';

import SearchInput from './searchInput';

class App extends React.Component {
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
  }

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
          <SearchInput />
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
