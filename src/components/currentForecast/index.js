import React from 'react';
import PropTypes from 'prop-types';

import LoadingHOC from '../../hoc/loadingHOC';
import './currentForecast.css';

const CurrentForecast = props => (
  <div className="forecast-current">

    <div className="forecast-current__top">
      <div className="forecast-current__icon">
        <i className={`wi wi-owm-${props.forecast.id}`} />
      </div>
      <div className="forecast-current__temp">
        <div>{Math.round(props.forecast.temp - 273.15)} &deg;C</div>
        <div className="forecast-current__temp_description">
          {props.forecast.description}
        </div>
      </div>
    </div>

    <div className="forecast-current__bottom">
      <div className="forecast-current__wind_deg">
        <div>Wind direction:</div>
        <i className={`wi wi-wind towards-${Math.round(props.forecast.wind_deg)}-deg`} />
      </div>
      <div className="forecast-current__wind_speed">
        <div>Wind Speed:</div>
        <i className={`wi wi-wind-beaufort-${Math.round(props.forecast.wind_speed)}`} />
      </div>
    </div>

  </div>
);

export default LoadingHOC('forecast')(CurrentForecast);
