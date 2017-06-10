import React from 'react';

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

export default ForecastList;
