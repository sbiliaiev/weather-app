import React from 'react';

const ForecastList = props => (
  <div>
    <hr />
    {
      props.forecast.map(item => (
        <div key={item.date}>
          date {item.date} <br />
          icon {item.icon} <br />
          temp {item.temp_min} - {item.temp_max}
          <hr />
        </div>
      ))
    }
  </div>
);

export default ForecastList;
