import React from 'react';
import PropTypes from 'prop-types';

import LoadingHOC from '../../hoc/loadingHOC';

const CurrentForecast = props => (
  <div>
    icon {props.forecast.icon}
    <br />
    temp {props.forecast.temp}
    <br />
    wind direction {props.forecast.wind_direction}
    <br />
    wind power {props.forecast.wind_power}
  </div>
);

export default LoadingHOC('forecast')(CurrentForecast);
