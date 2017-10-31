import axios from 'axios';

axios.interceptors.request.use(
  config => {
    return {
      ...config,
      url:
        process.env.NODE_ENV === 'production'
          ? `https://min-api.cryptocompare.com/${config.url}`
          : config.url,
    };
  },
  error => Promise.reject(error),
);
