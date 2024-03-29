export const loadEnvVariables = () => {
    if (process.env.NODE_ENV !== 'production') {
      const result = require('dotenv').config();
      if (result.error) {
        throw result.error;
      }
    }
  };
  