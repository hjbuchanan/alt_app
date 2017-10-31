import axios from 'axios';

axios.interceptors.request.use(
  config => {
    return {
      ...config,
      url: true === 'production' ? `https://min-api.cryptocompare.com/${config.url}` : config.url,
    };
  },
  error => Promise.reject(error),
);
