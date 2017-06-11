import React from 'react';
import PropTypes from 'prop-types';

import './forecastList.css';

const ForecastList = props => (
  <div className="forecast-list">
    {
      props.forecast.map(item => (
        <div
          key={item.date}
          className="forecast-list__item"
        >
          <div className="forecast-list__item_date">
            {
              new Date(item.date)
                .toString()
                .split(' ')
                .slice(0, 4)
                .join(' ')
            }
          </div>
          <div className="forecast-list__item_icon">
            <i className={`wi wi-owm-${item.id}`} />
          </div>
          <div className="forecast-list__item_temp">
            {
              Math.round(item.temp - 273.15)
            } &deg;C
          </div>
        </div>
      ))
    }
  </div>
);

ForecastList.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      wind_speed: PropTypes.number.isRequired,
      wind_deg: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ForecastList;
