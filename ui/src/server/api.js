const fetch = require('node-fetch');
const { API_PORT, API_URL } = require('./config');

exports.getFramework = () => fetch(`${API_URL}:${API_PORT}/random`)
  .then(res => {
    if (res.status !== 200) {
      throw Error(res.message);
    }

    return res.json();
  })
  .catch(err => Promise.reject(err));
