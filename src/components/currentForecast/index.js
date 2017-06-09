import React from 'react';
import PropTypes from 'prop-types';

const CurrentForecast = props => (
  <div>
    icon {props.forecast && props.forecast.weather && props.forecast.weather[0].icon}
    <br />
    temp {props.forecast && props.forecast.main && props.forecast.main.temp}
    <br />
    wind direaction {props.forecast && props.forecast.wind && props.forecast.wind.deg}
    <br />
    wind power {props.forecast && props.forecast.wind && props.forecast.wind.speed}
  </div>
);

export default CurrentForecast;
