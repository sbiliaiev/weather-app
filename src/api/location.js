const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position.coords);
      });
    } else {
      reject(new Error('Geolocation is disabled'));
    }
  });

export default {
  getCurrentLocation,
};
