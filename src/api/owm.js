import axios from 'axios';

const getForecast = (param) => {
  if (typeof param === 'string') {
    console.log('STRING');
    return axios(`http://api.openweathermap.org/data/2.5/forecast?q=${param}&appid=0b4b9500201c5de881eaab32a605349f`);
  }
  return axios(`http://api.openweathermap.org/data/2.5/forecast?lat=${param.latitude}&lon=${param.longitude}&appid=0b4b9500201c5de881eaab32a605349f`);
};

export default {
  getForecast,
};
